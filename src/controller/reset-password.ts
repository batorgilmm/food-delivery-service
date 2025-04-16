import nodemailer from "nodemailer";
import { User } from "../schema/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SALT_ROUND = 12;

export const resetRequest = async (req, res) => {
  const { userEmail } = req.body;

  const user = await User.findOne({ email: userEmail });

  if (!user) {
    res.json({ message: "User not found" });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "orgil0588@gmail.com",
      pass: "mranjxbxxzbgubei",
    },
  });

  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "1h",
  });

  const info = await transporter.sendMail({
    from: "Food delivery service", // sender address
    to: "batorgilmunkh88@gmail.com", // list of receivers
    subject: "Reset password", // Subject line
    html: `
      <h1>Reset password</h1>
      <p>Click <a href="http://localhost:3000/reset-password?token=${token}"> <button style="padding: 6px 12px; background-color: #3768FF; text: #FFF;">here </button> </a>  to reset your password</p>
    `,
  });

  console.log(info);

  res.json({ message: "Mail sent" });
};

export const updatePassword = async (req, res) => {
  const { _id, password } = req.body;
  
  const salt = bcrypt.genSaltSync(SALT_ROUND);

  const hash = bcrypt.hashSync(password, salt);

  const user = await User.findByIdAndUpdate(_id, { password: hash });

  console.log(user);

  res.json({ success: true });
};
