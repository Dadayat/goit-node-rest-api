import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config();
const {MAIL_PASSWORD, MAILTRAP_USERNAME} = process.env;


const transport = nodemailer.createTransport({
	host: 'sandbox.smtp.mailtrap.io',
	port: 2525,
	auth: {
        user: MAILTRAP_USERNAME,
        pass: MAIL_PASSWORD,
	},
});

function sendEmail(message) {
	return transport.sendMail(message);
}

export default sendEmail;