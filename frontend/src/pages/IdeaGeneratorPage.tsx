import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Typography,
  Grid,
  Box,
  Alert,
  Paper,
  Divider,
  CircularProgress
} from '@mui/material';
import IdeaForm, { IdeaFormData } from '../components/idea/IdeaForm';
import IdeaCard from '../components/idea/IdeaCard';
import { Idea, addIdea, updateIdea, deleteIdea } from '../store/slices/ideasSlice';
import { ideasAPI } from '../services/api';

const IdeaGeneratorPage: React.FC = () => {
  const [generatedIdeas, setGeneratedIdeas] = useState<Idea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleGenerateIdeas = async (formData: IdeaFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await ideasAPI.generate(formData);
      setGeneratedIdeas(response.data);
    } catch (err: any) {
      console.error('Error generating ideas:', err);
      setError(
        err.response?.data?.message ||
        'Failed to generate ideas. Please try again later.'
      );
      setGeneratedIdeas([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveIdea = async (id: string) => {
    try {
      const idea = generatedIdeas.find(idea => idea.id === id);
      if (!idea) return;

      const updatedIdea = { ...idea, status: idea.status === 'saved' ? 'draft' : 'saved' };
      await ideasAPI.save(id, updatedIdea);
      
      // Update local state
      setGeneratedIdeas(generatedIdeas.map(idea => 
        idea.id === id ? updatedIdea : idea
      ));
      
      // Update redux store
      dispatch(updateIdea(updatedIdea));
    } catch (err: any) {
      console.error('Error saving idea:', err);
      setError(
        err.response?.data?.message ||
        'Failed to save the idea. Please try again.'
      );
    }
  };

  const handleEditIdea = (idea: Idea) => {
    // This would typically open a modal or navigate to edit page
    console.log('Edit idea:', idea);
  };

  const handleDeleteIdea = async (id: string) => {
    try {
      await ideasAPI.delete(id);
      
      // Update local state
      setGeneratedIdeas(generatedIdeas.filter(idea => idea.id !== id));
      
      // Update redux store
      dispatch(deleteIdea(id));
    } catch (err: any) {
      console.error('Error deleting idea:', err);
      setError(
        err.response?.data?.message ||
        'Failed to delete the idea. Please try again.'
      );
    }
  };

  const handleShareIdea = (idea: Idea) => {
    // This would typically open a share modal
    console.log('Share idea:', idea);
  };

  return (
    <Container maxWidth="lg">
      <Box mb={4}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
          AI Content Idea Generator
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Generate creative content ideas for blogs, social media, videos, and newsletters in seconds.
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      <IdeaForm onSubmit={handleGenerateIdeas} isLoading={isLoading} />

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, mb: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {!isLoading && generatedIdeas.length > 0 && (
        <Box mt={6}>
          <Paper
            sx={{
              p: 2,
              mb: 4,
              bgcolor: 'primary.light',
              color: 'white',
              borderRadius: 2
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              {generatedIdeas.length} Content Ideas Generated
            </Typography>
            <Typography variant="body2">
              Save your favorite ideas to access them later from your dashboard.
            </Typography>
          </Paper>

          <Grid container spacing={3}>
            {generatedIdeas.map((idea) => (
              <Grid item key={idea.id} xs={12} sm={6} md={4}>
                <IdeaCard
                  idea={idea}
                  onSave={handleSaveIdea}
                  onEdit={handleEditIdea}
                  onDelete={handleDeleteIdea}
                  onShare={handleShareIdea}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {!isLoading && generatedIdeas.length === 0 && (
        <Paper
          elevation={0}
          sx={{
            p: 6,
            mt: 6,
            textAlign: 'center',
            borderRadius: 2,
            bgcolor: 'grey.50',
            border: '1px dashed',
            borderColor: 'grey.300'
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No ideas generated yet
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fill out the form above to generate content ideas tailored to your needs.
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default IdeaGeneratorPage;
