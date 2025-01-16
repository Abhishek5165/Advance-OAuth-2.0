export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #000000;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Coder - Quest Team ❤️</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #db165e; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Coder - Quest Team ❤️</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .header-image {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    .title {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #333333;
      margin: 20px 0;
    }
    .content {
      margin-top: 10px;
      text-align: center;
      color: #555555;
    }
    .btn {
      margin-top: 20px;
    }
    .btn a {
      text-decoration: none;
      background-color: #007bff;
      color: #ffffff;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 16px;
      display: inline-block;
    }
    .card-container {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      gap: 10px;
    }
    .card {
      background-color: #f9f9f9;
      padding: 15px;
      border: 1px solid #dddddd;
      border-radius: 10px;
      text-align: center;
      width: 260px;
    }
    .card img {
      width: 100%;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      font-size: 12px;
      color: #888888;
    }
    .footer .location {
      color: #555555;
    }
    .footer a {
      color: #007bff;
      text-decoration: none;
    }
    .temp{
      height: 200px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="title"><h1>Welcome, {name} !</div>
    
    <div class="content">
      Thanks for choosing Authentication Zone! We are happy to see you on board.
      <p>To get started, do this next step:</p>
      <div class="btn">
        <a href="https://advanced-oauth-2-0.onrender.com">Next Step</a>
      </div>
    </div>
    <div class="content">
      <p>If you need some help to get started check out :</p>
    </div>
    <div class="card-container">
      <div class="card">
        <img class="temp" src="https://ci3.googleusercontent.com/meips/ADKq_NYBe6T3kROQzysktWmfa9CxCOpQXzkYIx57HlxD9I1L-6fW-6TZg2biy_ZHkyaSyXipSQh8iyqq011b_mAbIVmD26zCRjbAUJdAJ33Hi2FINdF23ek_zbYqPu9ge5vlG_k=s0-d-e1-ft#https://mailsend-email-assets.mailtrap.io/28lp59j4hdhijk9ohq0jcicqji1m.jpeg" alt="Meet Orbit">
        <p><strong>Meet Orbit</strong> – your all-in-one solution for seamless, hassle-free meeting scheduling. 
          <br>
          <a href="https://meet-orbit.vercel.app/" style="color: #007bff;">Schedule now</a>
        </p>
      </div>
      <div class="card">
        <img src="https://ci3.googleusercontent.com/meips/ADKq_NZwfRyR3OIMX2n8R7l3Q9mJdnVhQbCm9z2ICOej7LWElSOZOB3f7aUD4km6RhPygdELlO0AqvFXpUb0-kD_NHX3Oiky_Qz8NsEBjRrNOA4EmEzLXo1fSasMLiYU-A7duMI=s0-d-e1-ft#https://mailsend-email-assets.mailtrap.io/wxins1blf0wjawk1lawhxc9c1f6n.jpeg" alt="Coder Quest">
        <p><strong>Coder Quest</strong> - Unlock your potential with our e-learning platform – where knowledge meets convenience!
          <br> 
          <a href="https://coder-quest.vercel.app/" style="color: #007bff;">Start today</a>
        </p>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <p>We hope you enjoy this journey as much as we enjoy creating it for you.</p>
      <p>© Authentication Zone • Lucknow • Uttar Pradesh</p>
      <a href="https://advanced-oauth-2-0.onrender.com">Unsubscribe</a>
    </div>
  </div>
</body>
</html>`
;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #db165e; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Coder - Quest Team ❤️</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;