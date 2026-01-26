import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0d47a1',
        color: 'white',
        padding: '2rem 0',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Adjusting the Grid for responsiveness */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Where to find us?
            </Typography>
            <Typography variant="body2">
              ECE Block third floor
              <br />
              Maharaja Agrasen Institute of Technology
              <br />
              atomroboticslab@gmail.com
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {/* Responsive Grid Item */}
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Sitemap
                </Typography>
                <Link href="/" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                  Home
                </Link>
                <Link href="/about" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                  About
                </Link>
                <Link href="/projects" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                  Projects
                </Link>
                <Link href="/achievements" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                  Achievements
                </Link>
                <Link href="/blogs" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                  Blogs
                </Link>
                <Link href="https://lnk.bio/A.T.O.M" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                  Contact
                </Link>
              </Grid>

              {/* Responsive Grid Item */}
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                  <Link href="https://x.com/atom_robotics_?lang=en&mx=2" target="_blank" rel="noopener noreferrer" color="inherit">
                    <Twitter />
                  </Link>
                  <Link href="https://www.instagram.com/a.t.o.m_robotics_lab/" target="_blank" rel="noopener noreferrer" color="inherit">
                    <Instagram />
                  </Link>
                  <Link href="https://www.linkedin.com/company/a-t-o-m-robotics-lab/" target="_blank" rel="noopener noreferrer" color="inherit">
                    <LinkedIn />
                  </Link>
                </Box>
              </Grid>

              {/* Responsive Grid Item */}
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  We like to build Robots
                </Typography>
                <Typography variant="body2">
                  A Robotics Community
                  <br />
                  based out of Delhi
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} A.T.O.M Robotics. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
