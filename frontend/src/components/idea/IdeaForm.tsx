import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  Chip,
  Autocomplete,
  CircularProgress
} from '@mui/material';

interface IdeaFormProps {
  isLoading: boolean;
  onSubmit: (formData: IdeaFormData) => void;
}

export interface IdeaFormData {
  contentType: string;
  industry: string;
  tone: string;
  keywords: string[];
  additionalInfo: string;
}

const contentTypes = [
  { value: 'blog', label: 'Blog Post' },
  { value: 'social', label: 'Social Media' },
  { value: 'video', label: 'Video Content' },
  { value: 'newsletter', label: 'Newsletter' }
];

const industries = [
  { value: 'technology', label: 'Technology' },
  { value: 'health', label: 'Health & Wellness' },
  { value: 'finance', label: 'Finance' },
  { value: 'education', label: 'Education' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'travel', label: 'Travel' },
  { value: 'food', label: 'Food & Cooking' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sports', label: 'Sports & Fitness' },
  { value: 'business', label: 'Business' },
  { value: 'design', label: 'Design & Creativity' },
  { value: 'other', label: 'Other' }
];

const tones = [
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'humorous', label: 'Humorous' },
  { value: 'inspirational', label: 'Inspirational' },
  { value: 'educational', label: 'Educational' },
  { value: 'persuasive', label: 'Persuasive' },
  { value: 'conversational', label: 'Conversational' }
];

const IdeaForm: React.FC<IdeaFormProps> = ({ isLoading, onSubmit }) => {
  const [formData, setFormData] = useState<IdeaFormData>({
    contentType: '',
    industry: '',
    tone: 'professional',
    keywords: [],
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleKeywordsChange = (event: React.SyntheticEvent, value: string[]) => {
    setFormData({ ...formData, keywords: value });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.contentType) {
      newErrors.contentType = 'Please select a content type';
    }

    if (!formData.industry) {
      newErrors.industry = 'Please select an industry';
    }

    if (!formData.tone) {
      newErrors.tone = 'Please select a tone';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <Card elevation={0} sx={{ border: 1, borderColor: 'grey.200', borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
          Generate Content Ideas
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Customize your preferences to generate relevant content ideas for your audience.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth error={!!errors.contentType}>
                <InputLabel id="content-type-label">Content Type</InputLabel>
                <Select
                  labelId="content-type-label"
                  id="contentType"
                  name="contentType"
                  value={formData.contentType}
                  label="Content Type"
                  onChange={handleSelectChange}
                >
                  {contentTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.contentType && <FormHelperText>{errors.contentType}</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth error={!!errors.industry}>
                <InputLabel id="industry-label">Industry</InputLabel>
                <Select
                  labelId="industry-label"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  label="Industry"
                  onChange={handleSelectChange}
                >
                  {industries.map((industry) => (
                    <MenuItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.industry && <FormHelperText>{errors.industry}</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth error={!!errors.tone}>
                <InputLabel id="tone-label">Tone</InputLabel>
                <Select
                  labelId="tone-label"
                  id="tone"
                  name="tone"
                  value={formData.tone}
                  label="Tone"
                  onChange={handleSelectChange}
                >
                  {tones.map((tone) => (
                    <MenuItem key={tone.value} value={tone.value}>
                      {tone.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.tone && <FormHelperText>{errors.tone}</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                multiple
                id="keywords"
                freeSolo
                options={[]}
                value={formData.keywords}
                onChange={handleKeywordsChange}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                      color="primary"
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Keywords (optional)"
                    placeholder="Type and press Enter"
                    helperText="Add keywords to guide idea generation"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="additionalInfo"
                name="additionalInfo"
                label="Additional Information (optional)"
                multiline
                rows={4}
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Provide any additional context or specific topics you're interested in"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={isLoading}
                sx={{ py: 1.5 }}
              >
                {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Generate Ideas'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default IdeaForm;
