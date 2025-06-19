import React from 'react';
import { Box, Container, Typography, Link, Grid, Divider, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'grey.200'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight={700}>
              CreativeSpark AI
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              AI-powered content idea generation for blogs, social media, videos, and newsletters.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                aria-label="twitter"
                color="primary"
                sx={{ mr: 1 }}
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                color="primary"
                sx={{ mr: 1 }}
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="github"
                color="primary"
                component="a"
                href="https://github.com/dxaginfo/creative-spark-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight={600}>
              Quick Links
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <Link component={RouterLink} to="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Home
              </Link>
              <Link component={RouterLink} to="/features" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Features
              </Link>
              <Link component={RouterLink} to="/pricing" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Pricing
              </Link>
              <Link component={RouterLink} to="/blog" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Blog
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Contact
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight={600}>
              Legal
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <Link component={RouterLink} to="/terms" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Terms of Service
              </Link>
              <Link component={RouterLink} to="/privacy" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Privacy Policy
              </Link>
              <Link component={RouterLink} to="/cookies" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Cookie Policy
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 4, mb: 3 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} CreativeSpark AI. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
