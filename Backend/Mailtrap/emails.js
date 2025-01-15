import { MailTrapClient, sender } from "../Mailtrap/mailtrap.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailtemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await MailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email sent Successfully", response);
  } catch (error) {
    console.log("Error sending Verification", error);
    throw new Error(`Error while sending Verification Email:${error}`);
  }
};
export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await MailTrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "fb53d86a-8854-4391-a3d3-bd365c80cf78",
      template_variables: {
        company_info_name: "Authentication Zone",
        name: name,
      },
    });

    console.log("Welcome email sent successfully", response);
  } catch (error) {}
};
export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await MailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password reset",
    });
    console.log("Email sent Successfully", response);
  } catch (error) {
    console.log("Error sending password reset email", error);
    throw new Error(`Error sending password reset email:${error}`);
  }
};
export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await MailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password reset successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password reset",
    });
    console.log("Password reset email sent successfully", response);
  } catch (error) {
    console.log("Error sending password reset success email", error);
    throw new Error(`Error sending password reset success email:${error}`);
  }
};
