import InquieryModel from "../models/InquiryModel.js";
import nodemailer from "nodemailer";

const inquery = async (req, res) => {
  console.log("okkkkkkkkkk");
  const { name, email, message } = req.body;
  console.log(req.body);
  if (!email || !message) {
    console.log("email and message is required");
    return res.status(400).json({ message: "email and mesage is required" });
  }
  try {
    const data = await InquieryModel.create({
      name,
      email,
      message,
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "raybalawas@gmail.com",
        pass: "cqfflnhmkedpheha",
      },
    });
    const mailMessage = {
      from: `"One Roof Education"`,
      to: "pixelgenixitsolutions@gmail.com",
      //   to: "rahulyadav201818@gmail.com",

      subject: `One Roof Edutech`,
      html: `
          <h3>New Inquiry from <strong>email:</strong> ${email}</h3>
          <p><strong>Message:</strong> ${message}</p>
          `,
    };

    await transporter
      .sendMail(mailMessage)
      .then(() => {
        console.log("email send succesfullY!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      });

    return res
      .status(200)
      .json({ data: data, message: "Inquiry has raised successfully" });
  } catch (error) {
    console.log("Error to send inquiry");
    return res
      .status(500)
      .json({ message: "server error when trying to send inquiry" });
  }
};

export { inquery };
