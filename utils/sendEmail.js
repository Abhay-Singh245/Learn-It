import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {

  const transporter = createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b11dd83e508afc",
      pass: "********ea1b",
    },
  });
  // const transporter = createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: process.env.SMTP_PORT,
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASS,
  //   },
  // });

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};
