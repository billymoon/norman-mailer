import nodemailer from "nodemailer";

const config = JSON.parse(process.env.NORMAN_MAILER_CONFIG || "{}");

const transporter = nodemailer.createTransport(config);

const norman = async ({ fromEmail, fromName, bodyText, toEmail }) => {
  const from =
    fromName && fromEmail
      ? `${fromName} <${fromEmail}>`
      : `${fromName || fromEmail}`;

  const info = await transporter.sendMail({
    from,
    to: toEmail,
    subject: `New message from ${from}`,
    text: bodyText,
    replyTo: from
  });

  console.log("Message sent: %s", info.messageId);
};

export default norman;
