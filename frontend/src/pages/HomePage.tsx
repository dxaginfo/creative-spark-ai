import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Paper,
  useTheme
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import TuneIcon from '@mui/icons-material/Tune';
import AssessmentIcon from '@mui/icons-material/Assessment';

const features = [
  {
    icon: <AutoAwesomeIcon fontSize="large" color="primary" />,
    title: 'AI-Powered Creativity',
    description: 'Generate high-quality content ideas personalized to your audience and industry in seconds.'
  },
  {
    icon: <SpeedIcon fontSize="large" color="primary" />,
    title: 'Beat Creative Blocks',
    description: 'Never stare at a blank page again. Get fresh ideas for blogs, social media, videos, and newsletters.'
  },
  {
    icon: <TuneIcon fontSize="large" color="primary" />,
    title: 'Full Customization',
    description: 'Tailor ideas to your specific needs with industry, tone, and content type filters.'
  },
  {
    icon: <AssessmentIcon fontSize="large" color="primary" />,
    title: 'Performance Insights',
    description: 'Track which content ideas perform best and optimize your strategy with data-driven analytics.'
  }
];

const HomePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          backgroundColor: 'primary.light', 
          color: 'white', 
          py: { xs: 8, md: 12 },
          borderRadius: { md: '0 0 50px 50px' },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                fontWeight={700} 
                sx={{ 
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Generate Brilliant Content Ideas with AI
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
                Say goodbye to creative blocks. Create captivating content ideas for blogs, social media, videos, and newsletters in seconds.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  component={RouterLink} 
                  to="/register"
                  variant="contained" 
                  color="secondary"
                  size="large"
                  sx={{ 
                    py: 1.5, 
                    px: 4, 
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  Get Started Free
                </Button>
                <Button 
                  component={RouterLink} 
                  to="/features"
                  variant="outlined" 
                  color="inherit"
                  size="large"
                  sx={{ 
                    py: 1.5, 
                    px: 4, 
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src="/static/hero-image.png" // Add this image to your public folder
                alt="Content idea generation"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: 3
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
            Why Choose CreativeSpark AI
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Our platform combines cutting-edge AI with powerful content marketing tools to supercharge your creative process.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                elevation={0} 
                sx={{ 
                  height: '100%', 
                  borderRadius: 3,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 3
                  },
                  border: 1,
                  borderColor: 'grey.200'
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
              How It Works
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
              Generate brilliant content ideas in just three simple steps
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/static/how-it-works.png" // Add this image to your public folder
                alt="How CreativeSpark AI works"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: 3
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    borderRadius: 3, 
                    border: 1, 
                    borderColor: 'grey.200',
                    position: 'relative'
                  }}
                >
                  <Box 
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      transform: 'translate(-30%, -30%)',
                      bgcolor: 'primary.main',
                      color: 'white',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    1
                  </Box>
                  <Typography variant="h5" gutterBottom fontWeight={600}>
                    Set Your Preferences
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Choose your content type, industry, and desired tone to customize the idea generation process.
                  </Typography>
                </Paper>
                
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    borderRadius: 3, 
                    border: 1, 
                    borderColor: 'grey.200',
                    position: 'relative'
                  }}
                >
                  <Box 
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      transform: 'translate(-30%, -30%)',
                      bgcolor: 'primary.main',
                      color: 'white',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    2
                  </Box>
                  <Typography variant="h5" gutterBottom fontWeight={600}>
                    Generate Ideas
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Our AI analyzes trends, audience behavior, and your preferences to create relevant content ideas.
                  </Typography>
                </Paper>
                
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    borderRadius: 3, 
                    border: 1, 
                    borderColor: 'grey.200',
                    position: 'relative'
                  }}
                >
                  <Box 
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      transform: 'translate(-30%, -30%)',
                      bgcolor: 'primary.main',
                      color: 'white',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    3
                  </Box>
                  <Typography variant="h5" gutterBottom fontWeight={600}>
                    Save & Organize
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Save your favorite ideas, organize them into collections, and export them to your content calendar.
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 10 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
            Ready to Transform Your Content Strategy?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.9, maxWidth: 700, mx: 'auto' }}>
            Join thousands of content creators, marketers, and social media managers who are already using CreativeSpark AI.
          </Typography>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              py: 2,
              px: 5,
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
          >
            Start Creating Ideas Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
