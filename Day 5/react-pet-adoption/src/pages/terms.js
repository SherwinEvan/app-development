import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const termsAndConditionsContent = `
1. Introduction

Welcome to our Pet Adoption website (the "Website"). By using our Website, you agree to comply with and be bound by these terms and conditions (the "Terms"). If you do not agree to these Terms, please do not use the Website.

2. Use of the Website

2.1. Eligibility
You must be at least 18 years old to use this Website. By using the Website, you represent and warrant that you are at least 18 years old.

2.2. User Account
To access certain features of the Website, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.

3. Pet Adoption

3.1. Pet Listings
The Website may provide listings of pets available for adoption. These listings are provided by third-party organizations, and we make no guarantees regarding the accuracy or availability of these listings.

3.2. Adoption Process
If you choose to adopt a pet through the Website, you may be required to complete an adoption application and adhere to the adoption policies of the relevant pet organization. We are not responsible for the adoption process or the actions of the pet organizations.

4. Privacy Policy

Your use of the Website is also governed by our Privacy Policy. Please review our Privacy Policy for information on how we collect, use, and disclose your personal information.

5. Termination

We reserve the right to terminate or suspend your access to the Website at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Website or third parties, or for any other reason.

6. Contact Us

If you have any questions or concerns about these Terms, please contact us at [contact email].

7. Changes to Terms

We may revise and update these Terms from time to time. Please check these Terms regularly to ensure that you are aware of any changes.

`;

const TermsAndConditions = () => (
  <Typography>
    <Title>Terms and Conditions</Title>
    <Paragraph>{termsAndConditionsContent}</Paragraph>
  </Typography>
);

export default TermsAndConditions;
