// import { MailTrapClient, sender } from "../Mailtrap/mailtrap.config.js";
// import {
//   PASSWORD_RESET_REQUEST_TEMPLATE,
//   PASSWORD_RESET_SUCCESS_TEMPLATE,
//   VERIFICATION_EMAIL_TEMPLATE,
// } from "./emailtemplates.js";

// export const sendVerificationEmail = async (email, verificationToken) => {
//   const recipient = [{ email }];
//   try {
//     const response = await MailTrapClient.send({
//       from: sender,
//       to: recipient,
//       subject: "Verify your email",
//       html: VERIFICATION_EMAIL_TEMPLATE.replace(
//         "{verificationCode}",
//         verificationToken
//       ),
//       category: "Email Verification",
//     });
//     console.log("Email sent Successfully", response);
//   } catch (error) {
//     console.log("Error sending Verification", error);
//     throw new Error(`Error while sending Verification Email:${error}`);
//   }
// };
// export const sendWelcomeEmail = async (email, name) => {
//   const recipient = [{ email }];

//   try {
//     const response = await MailTrapClient.send({
//       from: sender,
//       to: recipient,
//       template_uuid: "fb53d86a-8854-4391-a3d3-bd365c80cf78",
//       template_variables: {
//         company_info_name: "Authentication Zone",
//         name: name,
//       },
//     });

//     console.log("Welcome email sent successfully", response);
//   } catch (error) {}
// };
// export const sendPasswordResetEmail = async (email, resetURL) => {
//   const recipient = [{ email }];
//   try {
//     const response = await MailTrapClient.send({
//       from: sender,
//       to: recipient,
//       subject: "Reset your password",
//       html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
//       category: "Password reset",
//     });
//     console.log("Email sent Successfully", response);
//   } catch (error) {
//     console.log("Error sending password reset email", error);
//     throw new Error(`Error sending password reset email:${error}`);
//   }
// };
// export const sendResetSuccessEmail = async (email) => {
//   const recipient = [{ email }];
//   try {
//     const response = await MailTrapClient.send({
//       from: sender,
//       to: recipient,
//       subject: "Password reset successful",
//       html: PASSWORD_RESET_SUCCESS_TEMPLATE,
//       category: "Password reset",
//     });
//     console.log("Password reset email sent successfully", response);
//   } catch (error) {
//     console.log("Error sending password reset success email", error);
//     throw new Error(`Error sending password reset success email:${error}`);
//   }
// };

import { sendEmail } from "./nodemailer.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailtemplates.js";

// Send verification email
export const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: '"Authentication Zone" <abhishek1310verma@gmail.com>', // Replace with your sender email
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken
    ),
  };

  try {
    await sendEmail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.log("Error sending verification email", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

// Send welcome email
export const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: '"Authentication Zone" <abhishek1310verma@gmail.com>',
    to: email,
    subject: "Welcome to Authentication Zone",
    html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
  };

  try {
    await sendEmail(mailOptions);
    console.log("Welcome email sent successfully");
  } catch (error) {
    console.log("Error sending welcome email", error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

// Send password reset request email
export const sendPasswordResetEmail = async (email, resetURL) => {
  const mailOptions = {
    from: '"Authentication Zone" <abhishek1310verma@gmail.com>',
    to: email,
    subject: "Reset your password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  };

  try {
    await sendEmail(mailOptions);
    console.log("Password reset email sent successfully");
  } catch (error) {
    console.log("Error sending password reset email", error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

// Send password reset success email
export const sendResetSuccessEmail = async (email) => {
  const mailOptions = {
    from: '"Authentication Zone" <abhishek1310verma@gmail.com>',
    to: email,
    subject: "Password reset successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  };

  try {
    await sendEmail(mailOptions);
    console.log("Password reset success email sent successfully");
  } catch (error) {
    console.log("Error sending password reset success email", error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};
