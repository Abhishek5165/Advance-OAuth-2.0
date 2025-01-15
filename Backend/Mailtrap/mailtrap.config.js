import { MailtrapClient } from "mailtrap";
const TOKEN = "162cd008783dcab7ad08eeb442e7b914";

export const MailTrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Team Coder-Quest",
};