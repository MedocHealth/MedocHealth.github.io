import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import '../css/mepolicy.css';
import logo from '../resources/medoc-black.png';
function MePolicy() {
    return (
        <Container maxWidth="lg" className="me-policy">
            <Paper elevation={3} className="content-paper">
                <Box className="header">
                    <img src={logo} width="173" height="40" alt="footer-logo" className="logo" />
                    <Typography variant="body1" className="tagline">
                        The complete healthcare ecosystem building towards better accessibility
                        to healthcare and supporting you with medical finances and family medicine.
                    </Typography>
                </Box>

                <Typography variant="h4" component="h1" className="main-title">
                    ME App Privacy Policy
                </Typography>
                <Typography variant="h5" component="h2" className="section-title">
                    Introduction
                </Typography>

                <Typography variant="body1" className="policy-text">
                    Welcome to ME App privacy policy. The application under the name of ME App is operated by Medoc Health IT Private Limited, a company incorporated under the provisions of the Companies Act, 2013 and having its registered office at 70, G.M Enclave, Jalandhar Punjab.
                    Medoc Healthcare IT Private Limited (“Company” or “we” or “us”), offers this platform, ME App available on Google Play Store (“App”) (the Website and App collectively referred to as “Platform”) and any service availed by users (hereinafter referred to as “you”, “your'' or “User”) through the Platform, conditioned upon your acceptance of the terms and conditions contained in Company’s Terms of Use as available on its Platform and this privacy policy (“Privacy Policy”).
                    This policy describes the types of information we may collect from you or that you may provide when you visit the application, and our practices for collecting, using, maintaining, protecting and disclosing that information, when you use our services.
                    Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our web application. By accessing or using this web application, you agree to this privacy policy. This policy may change from time to time. Your continued use of this Web application after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates

                </Typography>
                <br></br>
                <Typography variant="h5" component="h2" className="section-title">
                    Information We Collect About You
                </Typography>

                <Typography variant="body1" className="policy-text">
                    We collect several types of information from and about users of our application, including:
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText
                            primary="Personal Information"
                            secondary="Means and includes any information that relates to a natural person through which an individual is identified, such as the name, contact details, email address, gender, age or any other relevant material provided by a User when they register for an account on the mobile application or use the services made available through the Platform. This may also include information regarding the family member, relative, partner, friend or any person related to the User in any way as provided by the User through the Platform."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Sensitive Information"
                            secondary="Medical records, financial information, health information, etc."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Technical Information"
                            secondary="IP address, device type, cookies, usage data, etc."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Integrated Service Information"
                            secondary="Information from integrated social media platforms"
                        />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" className="section-title">
                    Access Permission for File Management
                </Typography>

                <Typography variant="body1" className="policy-text">
                    To enhance user experience, we kindly request permission to read and write files on external storage. This access is crucial for users to securely upload and store their medical records on the ME app, granting them full control over sharing these records with healthcare providers. Please note that only files explicitly uploaded by the user will be accessed; rest assured, no other files from the storage system will be scanned or utilised in any way.
                </Typography>
                <br></br>
                <Typography variant="h5" component="h2" className="section-title">
                    Use of Your Information
                </Typography>

                <Typography variant="body1" className="policy-text">
                    We use your information in the ME App for various purposes, including:
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="Accessing ABHA services" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Managing personal medical finance and health insurance" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Facilitating online appointments, consultations, and medical deliveries" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Checking prescriptions and diagnostic test reports" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Tracking health and medical history" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Enabling fitness tracking features" />
                    </ListItem>
                </List>
                <Typography variant="body1" className="policy-text">
                    We use your information in the ME App for various purposes to enhance your experience and provide you with personalised services. This includes accessing all ABHA services, managing personal medical finance and health insurance, facilitating online appointments, consultations, and medical deliveries. Additionally, we use your information to check prescriptions and diagnostic test reports, track the health and medical history of family members and others, and enable fitness tracking features such as step count, appointment reminders, calorie count, blood pressure monitoring, heart rate tracking, and more. Your information is utilised solely for improving the app's functionality and tailoring services to meet your healthcare needs efficiently.
                </Typography>
                <br></br>
                <Typography variant="body1" className="policy-text">
                    By using the ME App, you agree and acknowledge that all information collected from you, including data voluntarily provided by you, received from Third Party Service Providers, and automatically gathered, may be utilised by Medoc for the following purposes:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="to comply with central, state or local laws that require disclosure" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="to respond to law enforcement officials or to judicial orders, subpoenas or other process" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="to avert a serious threat to health or safety" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="to enable the provision of Services opted by You including collating all User medical records, reports and other data" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="to enable the viewing of content in Your interest" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="to copy, reproduce, store, distribute, publish, export, adapt, edit and translate Personal Information to the extent reasonably required for the provision of Services by Medoc" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="to provide better products and Services and to programmatically use Your data to give You contextual Services." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="to fulfil Your requests for certain Services." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="to contact You about Our Services." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To respond to Your comments, reviews, and questions and provide better customer service." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To track Your activity on Our digital platforms and personalise and improve Your experience." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To understand Your preferences and to enhance, personalise, and customise Your experience using the application." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To use Your information to operate, improve, and maintain our site, and to prevent fraud and abuse." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To provide You with notices about Your account, including termination and renewal." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To carry out our obligations and enforce our rights arising from any contracts entered into between You and us." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To fulfil any other purpose for which You provide Us Personal Information." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="For any other purpose for which You give Us authorisation." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" className="section-title">
                    Cookies
                </Typography>

                <Typography variant="body1" className="policy-text">
                    A cookie is a small file placed on the hard drive of your device. You may refuse to accept  cookies by activating the appropriate setting on your browser. However, if you select this setting, you may be unable to access certain parts of our application. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our application.
                </Typography>
                <Typography variant="body1" className="policy-text">
                    Medoc and other third party service providers collect information about You using these cookies. Please note, a cookie in no way gives Us access to Your device. Our application uses these "cookies" to collect information and to improve Our service. Some cookies and other technologies may serve to recall Personal Information previously indicated by You.
                </Typography>
                <Typography variant="body1" className="policy-text">
                    <Typography variant="body1" className="policy-text">
                        Medoc and other third party service providers collect information about You using these cookies. Please note, a cookie in no way gives Us access to Your device. Our application uses these "cookies" to collect information and to improve Our service. Some cookies and other technologies may serve to recall Personal Information previously indicated by You.
                    </Typography>
                </Typography>
                <br></br>
                <Typography variant="h5" component="h2" className="section-title">
                    Disclosure of Your Information
                </Typography>

                {/* <Typography variant="body1" className="policy-text">
                    We may disclose your information to third parties for various purposes, including:
                </Typography> */}
                <List>
                    <ListItem>
                        <ListItemText primary="We may disclose aggregated information about our users, and information that does not identify any individual without restriction." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We may share information in specific situations described in this section and/or with the following categories of third parties." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We might share your data with third-party vendors, service providers, contractors, or agents ('third parties') who help us with our services and need access to that information to do their job. We have contracts with these third parties to protect your personal information. They can only use your personal information as instructed by us and cannot share it with any other organisation. They are committed to safeguarding the data they have on our behalf and keeping it for the time we specify. The types of third parties we may share personal information with include Government Entities, Research and Development entities, Hospitals, and Doctors." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We may also share or transfer Your information to Any third party to which We transfer or sell Our assets, merge, or consolidate. Such parties shall have the right to continue to use the information (including SPI) provided to Us by You in accordance with the Terms and this Privacy Policy." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We may disclose information to Our partners, affiliates, subsidiaries, group entities, investors, stakeholders, or potential associates in an anonymized and aggregated manner so that they, too, may understand how Users use Our Site and enable Us to create a better overall experience for You." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We may disclose your information to specific Google Maps Platform APIs, including Google Maps API and Places API, to facilitate location-based services. Your location data is collected and stored on your device's cache for an enhanced user experience. Be assured that we prioritise the security and confidentiality of your data. If you wish to revoke your consent, please contact us using the provided contact details in this Privacy Policy." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We may also share your personal information to enforce our terms and agreements or safeguard the rights, property, and safety of our users and others. This may involve sharing information with other companies, organisations, governments, or regulatory authorities for fraud prevention and reducing credit risks." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="When you share personal information or engage in public areas within the Services, this information may be visible to all users and could be publicly accessible beyond the Services indefinitely. If you connect with other users on our platform or sign up via a social network like Google, your contacts on that social network will have access to your name, profile picture, and activity descriptions. Similarly, other users can see your activity descriptions, interact with you on the platform, and view your profile." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We may disclose your information to deal with requests, enquiries, complaints or disputes and other customer care related activities including those arising out of the Users’ request of the Services and all other general administrative and business purposes." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We may also disclose your personal information to comply with any court order, law, or legal process, including to respond to any government or regulatory request." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We may disclose your personal information to enforce or apply our Terms of use." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We may disclose your information, when Medoc, in its sole discretion, deems it necessary in order to protect its rights or the rights of others; or for any other purpose disclosed by Us when You provide the Personal Information." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="We may also use Your personal data or contact information such as, Your name, address, postcode, gender, occupation, age, date of birth, email address, telephone number, company name, job title, and department only when Company requires it for the purposes of:" />
                    </ListItem>
                    <List>
                        <ListItem>
                            <ListItemText primary="i. processing Your application to use our Services and to provide You with the requested Services through mobile app;" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="ii. dealing with any complaint, queries or problems reported by You regarding the Services offered by the Company;" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="iii. notifying You of changes in its Services and help improve the Services Company provide to you." />
                        </ListItem>
                    </List>
                </List>



                <Typography variant="h5" component="h2" className="section-title">
                    Social Media Integration and Data Handling
                </Typography>

                <Typography variant="body1" className="policy-text">
                    Our Services allow you to register and sign in using third-party social media accounts. We receive certain profile information from your social media provider when you use this option.
                </Typography>

                <Typography variant="h5" component="h2" className="section-title">
                    Third-Party Data Sharing and Collaboration
                </Typography>

                <Typography variant="body1" className="policy-text">
                    We use OTPLess for authentication and share data with the Government of India's Ayushman Bharat Digital Mission. OTPLess has limited access to sensitive information, only for user authentication purposes.
                </Typography>

                <Typography variant="h5" component="h2" className="section-title">
                    User Privacy Rights
                </Typography>

                <Typography variant="body1" className="policy-text">
                    You have the right to:
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="Withdraw your consent" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Opt out of marketing communications" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Access and correct your information" />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" className="section-title">
                    Data Security
                </Typography>

                <Typography variant="body1" className="policy-text">
                    We have implemented appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </Typography>

                <Typography variant="h5" component="h2" className="section-title">
                    Data Retention
                </Typography>

                <Typography variant="body1" className="policy-text">
                    We will keep your personal information for as long as necessary for the purposes set out in this privacy notice, unless a longer retention period is required by law.
                </Typography>

                <Typography variant="h5" component="h2" className="section-title">
                    Changes to Privacy Policy
                </Typography>

                <Typography variant="body1" className="policy-text">
                    We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date.
                </Typography>

                <Typography variant="h5" component="h2" className="section-title">
                    Contact Us
                </Typography>

                <Typography variant="body1" className="policy-text">
                    For questions or concerns about this policy, please contact our Grievance Officer:
                </Typography>

                <Typography variant="body1" className="policy-text">
                    Jaysheel Bhatt<br />
                    Email: dpo@medochealth.in<br />
                    Phone: +91 6300664255
                </Typography>

                <Typography variant="body1" className="policy-text">
                    For other inquiries, contact us at data@medochealth.in.
                </Typography>
            </Paper>
        </Container>
    );
}

export default MePolicy;