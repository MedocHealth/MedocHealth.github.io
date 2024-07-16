
import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import logo from '../resources/medoc-black.png';
import '../css/privacypolicy.css';

function Termsofuse() {
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
          Terms and Conditions
        </Typography>
        <br></br>
        {/* <Typography variant="body2" className="last-updated">
          Last updated April 4, 2024
        </Typography> */}
        <Typography variant="h5" component="h2" className="section-title">
          Definition
        </Typography>
        <Typography variant="body1" className="policy-text">
          Healthcare Ecosystem: A network of interconnected individuals, organizations, and technologies that collectively provide, manage, and support healthcare services.
        </Typography>
        <Typography variant="body1" className="policy-text">
          User: Any individual or entity that accesses and utilizes the services offered within the healthcare ecosystem.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Provider: A licensed healthcare professional or organization that delivers healthcare services to users.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Platform: The digital interface or application through which users and providers interact within the healthcare ecosystem.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Data: Any information collected, stored, or processed within the healthcare ecosystem, including personal health information (PHI).
        </Typography>
        <br></br>
        <Typography variant="h5" component="h2" className="section-title">
          User Agreement
        </Typography>
        <Typography variant="body1" className="policy-text">
          Acceptance: By accessing or using the healthcare ecosystem, users agree to be bound by these terms and conditions.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Eligibility: Users must be of legal age and have the capacity to enter into a binding agreement.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Account Creation: Users may be required to create an account to access certain features or services.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Accuracy of Information: Users are responsible for providing accurate and up-to-date information.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Use of Services: Users agree to use the healthcare ecosystem's services for lawful purposes only.
        </Typography>
        <br></br>
        <Typography variant="h5" component="h2" className="section-title">
          Provider Agreement
        </Typography>
        <Typography variant="body1" className="policy-text">
          Qualifications: Providers must be licensed and in good standing in their respective jurisdictions.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Compliance: Providers must comply with all applicable laws, regulations, and professional standards.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Confidentiality: Providers must maintain the confidentiality of user information and PHI.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Quality of Care: Providers must provide high-quality care that meets or exceeds accepted standards.
        </Typography>
        <br></br>
        <Typography variant="h5" component="h2" className="section-title">
          Data Privacy And Security
        </Typography>
        <Typography variant="body1" className="policy-text">
          Collection and Use: The healthcare ecosystem will collect and use data as outlined in its privacy policy.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Security: The healthcare ecosystem will implement reasonable security measures to protect data.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Sharing: Data will only be shared with third parties in accordance with the privacy policy and applicable laws.
        </Typography>
        <br></br>
        <Typography variant="h5" component="h2" className="section-title">
          Disclaimers
        </Typography>
        <Typography variant="body1" className="policy-text">
          No Medical Advice: The healthcare ecosystem does not provide medical advice. Users should consult with qualified healthcare professionals for diagnosis and treatment.
        </Typography>
        <Typography variant="body1" className="policy-text">
          No Warranty: The healthcare ecosystem is provided "as is" without any warranties or guarantees.
        </Typography>
        <Typography variant="body1" className="policy-text">
          Liability Limitation: The healthcare ecosystem's liability for any damages arising from its use is limited.
        </Typography>
        <br></br>
        <Typography variant="h5" component="h2" className="section-title">
          Termination
        </Typography>
        <Typography variant="body1" className="policy-text">
          By User: Users may terminate their accounts at any time.
        </Typography>
        <Typography variant="body1" className="policy-text">
          By Provider: Providers may terminate their participation at any time.
        </Typography>
        <Typography variant="body1" className="policy-text">
          By Platform: The healthcare ecosystem may terminate user or provider accounts for violations of these terms and conditions.
        </Typography>
        <br></br>
        <Typography variant="h5" component="h2" className="section-title">
        Governing Law and Dispute Resolution
        </Typography>
        <Typography variant="body1" className="policy-text">
        These terms and conditions are governed by the laws of Jalandhar, Punjab, India.
        </Typography>
        <br></br>
        <Typography variant="h5" component="h2" className="section-title">
        Modifications
        </Typography>
        <Typography variant="body1" className="policy-text">
        The healthcare ecosystem may modify these terms and conditions from time to time.
Users and providers will be notified of any changes.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Termsofuse;