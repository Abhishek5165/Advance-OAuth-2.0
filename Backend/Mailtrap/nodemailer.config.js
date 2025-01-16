// import { MailtrapClient } from "mailtrap";
// const TOKEN = "162cd008783dcab7ad08eeb442e7b914";

// export const MailTrapClient = new MailtrapClient({
//   token: TOKEN,
// });

// export const sender = {
//   email: "mailtrap@demomailtrap.com",
//   name: "Team Coder-Quest",
// };


import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Change to your SMTP host
  port: 465, // Use 587 for TLS or 465 for SSL
  secure: true, // True for SSL
  auth: {
    user: "abhishek1310verma@gmail.com", // Replace with your email
    pass: "ohzt wryr nnvn hnbr",   // Replace with your App Password or email password
  },
});

// Helper function to send emails
export const sendEmail = async (emailOptions) => {
  try {
    await transporter.sendMail(emailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error.message}`);
  }
};
