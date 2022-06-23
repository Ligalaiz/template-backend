import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

class Service {
  send(form) {
    const { SOURCE_MAIL, AUTH_USER, AUTH_PASS } = process.env;
    const { name, email, desc } = form;

    const mailOptions = {
      from: SOURCE_MAIL,
      to: 'slavakuz88@gmail.com',
      subject: 'New order from template',
      text: `name: ${name}, email: ${email}, desc: ${desc}`,
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: AUTH_USER,
        pass: AUTH_PASS,
      },
    });

    return { mailOptions, transporter };
  }
}

const service = new Service();

export { service };
