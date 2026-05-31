require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = async (req, res, next) => {
  const { name, phoneNumber, message } = req.query;
  const msg = {
    to: "levietduc2000cb@gmail.com",
    from: "fruituser443@gmail.com", // Use the email address or domain you verified above
    subject: "Liên hệ tư vấn mua hàng",
    text: `
    Name: ${name}
    PhoneNumber: ${phoneNumber}
    Message:${message}
    `,
    html: `
    <strong>Name: </strong><p>${name}</p><br>
    <strong>PhoneNumber: </strong><p>${phoneNumber}</p><br>
    <strong>Message: </strong><p>${message}</p>`,
  };
  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Send email is success" });
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
    res.status(400).json({ message: "Send email is failure" });
  }
};
