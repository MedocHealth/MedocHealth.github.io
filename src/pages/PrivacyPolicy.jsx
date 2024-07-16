
import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import logo from '../resources/medoc-black.png';
import '../css/privacypolicy.css';

function PrivacyPolicy() {
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
          PRIVACY POLICY
        </Typography>

        <Typography variant="body2" className="last-updated">
          Last updated April 4, 2024
        </Typography>

        <Typography variant="body1" className="policy-text">
          Medoc Health IT Private Limited is focused on Simplifying medical finances and bringing family
          medicine together by making the healthcare industry more accessible to people across the country.
          Medoc aims to be the single destination for all your healthcare needs. Medoc Health IT Private
          Limited is the author and publisher of www.medochealth.in and the products and services provided by
          Medoc Health IT Private Limited.
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          General Terms
        </Typography>

        <List>
          <ListItem>
            <ListItemText>
              (a) By clicking on 'Continue' during the sign-up process, by accessing or using the Platform or by
              using the Service, or by otherwise giving Us Your information, You confirm that You can enter into a
              legally binding contract under Indian law, in particular, the Indian Contract Act, 1872, and have
              read, understood, agreed, and consented to the practices and policies outlined in this Privacy
              Policy and agree to be bound by the Privacy Policy.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              (b) You hereby consent to Our collection, use, sharing, and disclosure of Your information as
              described in this Privacy Policy. We reserve the right to change, modify, add or delete portions of
              the terms of this Privacy Policy, at our sole discretion, at any time.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              (c) If You are accessing or using Services on the Site from an overseas location, You do so at your
              own risk and shall be solely liable for compliance with any applicable local laws.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              (d) If you do not agree with any of the terms and conditions of this Privacy Policy, please do not
              proceed with using this Site or any Services.
            </ListItemText>
          </ListItem>
        </List>

        <Typography variant="h5" component="h2" className="section-title">
          1. WHAT INFORMATION DO WE COLLECT?
        </Typography>

        <Typography variant="body1" className="policy-text">
          We collect personal information that you voluntarily provide to us when you register on the
          Services, express an interest in obtaining information about us or our products and Services when
          you participate in activities on the Services, or otherwise when you contact us.
        </Typography>

        <Typography variant="body1" className="policy-text">
          The personal information that we collect depends on the context of your interactions with us and the
          Services, the choices you make, and the products and features you use. The personal information we
          collect may include the following:
        </Typography>

        <List>
          <ListItem>
            <ListItemText>Names</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Phone numbers</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Email addresses</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Mailing addresses</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Usernames</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Passwords</ListItemText>
          </ListItem>
          {/* Add more list items for other types of information collected */}
        </List>

        <Typography variant="h5" component="h2" className="section-title">
          2. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </Typography>

        <Typography variant="body1" className="policy-text">
          We may share information in specific situations described in this section and/or with the following
          categories of third parties.
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          3. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </Typography>

        <Typography variant="body1" className="policy-text">
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or
          store information. Specific information about how we use such technologies and how you can refuse
          certain cookies is set out in our Cookie Notice.
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
        </Typography>

        <Typography variant="body1" className="policy-text">
          Our Services offer you the ability to register and log in using your third-party social media
          account details (like your Google logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider.
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          5. HOW LONG DO WE KEEP YOUR INFORMATION?
        </Typography>

        <Typography variant="body1" className="policy-text">
          We will only keep your personal information for as long as it is necessary for the purposes set out
          in this privacy notice unless a more extended retention period is required or permitted by law (such
          as tax, accounting, or other legal requirements).
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          6. HOW DO WE KEEP YOUR INFORMATION SAFE?
        </Typography>

        <Typography variant="body1" className="policy-text">
          We have implemented appropriate and reasonable technical and organisational security measures
          designed to protect the security of any personal information we process. However, despite our
          safeguards and efforts to secure your information, no electronic transmission over the Internet or
          information storage technology can be guaranteed to be 100% secure.
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          7. WHAT ARE YOUR PRIVACY RIGHTS?
        </Typography>

        <Typography variant="body1" className="policy-text">
          You have the right to withdraw your consent, opt out of marketing communications, and review or change
          the information in your account. You can contact us to exercise these rights.
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          8. CONTROLS FOR DO-NOT-TRACK FEATURES
        </Typography>

        <Typography variant="body1" className="policy-text">
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
          ('DNT') feature or setting. At this stage, no uniform technology standard for recognising and
          implementing DNT signals has been finalised.
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          9. CHILDREN'S PRIVACY
        </Typography>

        <Typography variant="body1" className="policy-text">
          Our services are intended for individuals who can form legally binding contracts under the Indian
          Contract Act of 1872. If you are under 18 years old, you may only use our services with the express
          permission and under the direct supervision of a parent or legal guardian.
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          10. DO WE MAKE UPDATES TO THIS NOTICE?
        </Typography>

        <Typography variant="body1" className="policy-text">
          We may update this privacy notice from time to time. The updated version will be indicated by an
          updated 'Revised' date, and the updated version will be effective as soon as it is accessible.
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </Typography>

        <Typography variant="body1" className="policy-text">
          If you have questions or comments about this notice, you may contact our Data Protection Officer
          (DPO), Jaysheel Bhatt, by email at dpo@medochealth.in, by phone at +91 6300664255, or contact us by
          post at:
        </Typography>

        <Typography variant="body1" className="policy-text">
          Medoc Health IT Private Limited<br />
          Ansh Kumar Mishra<br />
          Chief Operations Officer<br />
          70, GM Enclave<br />
          Jalandhar, Punjab 144009<br />
          India
        </Typography>

        <Typography variant="h5" component="h2" className="section-title">
          12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </Typography>

        <Typography variant="body1" className="policy-text">
          Based on the applicable laws of your country, you may have the right to request access to the
          personal information we collect from you, change that information, or delete it according to the
          provisions stated in the privacy policy. To request, review, update, or delete your personal
          information, please contact us by mailing to data@medochealth.in.
        </Typography>
      </Paper>
    </Container>
  );
}

export default PrivacyPolicy;