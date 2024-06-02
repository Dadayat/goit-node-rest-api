import sendEmail from '../helpers/sendEmail.js';

export async function sendVerificationEmail(email, verificationToken) {
    const verifyEmail = {
      to: email,
      from: 'dadayat@meta.ua',
      subject: "Welcome to phonebook",
      http: `<a target="_blank" href="${process.env.BASE_URL}/api/users/verify/${verificationToken}">Click to verify email</a>`,
      text: `To confirm your registration please open the link ${process.env.BASE_URL}/api/users/verify/${verificationToken}`,
    };
    await sendEmail(verifyEmail);
  }