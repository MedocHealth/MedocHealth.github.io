
import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import logo from '../resources/medoc-black.png';
import '../css/privacypolicy.css';

function Refundpolicy() {
  return (
    <Container maxWidth="lg" className="privacy-policy">
    {/* paper used to make it as legal docs */}
      <Paper elevation={3} className="content-paper">
        <Box className="header">
          <img src={logo} width="173" height="40" alt="footer-logo" className="logo" />
          <Typography variant="body1" className="tagline">
            The complete healthcare ecosystem building towards better accessibility
            to healthcare and supporting you with medical finances and family medicine.
          </Typography>
        </Box>

        <Typography variant="h4" component="h1" className="main-title">
          REFUND POLICY
        </Typography>

        {/* <Typography variant="body2" className="last-updated">
          Last updated April 4, 2024
        </Typography> */}

        <Typography variant="body1" className="policy-text">
        Medoc Health IT Private Limited does not support or provide any refunds.
          </Typography>
      </Paper>
    </Container>
  );
}

export default Refundpolicy;