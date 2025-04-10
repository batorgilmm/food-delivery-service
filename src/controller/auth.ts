import { User } from "../schema/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUND = 12;

export const register = async (req, res) => {
  try {
    const { password } = req.body;

    console.log(req.body);

    const salt = bcrypt.genSaltSync(SALT_ROUND);

    const hash = bcrypt.hashSync(password, salt);

    const user = await User.create({ ...req.body, password: hash });

    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      res.status(400).json({ success: false, error: "User exist" });
      return;
    }
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    res
      .status(404)
      .json({ success: false, error: "Username or password is wrong" });
    return;
  }

  const isCompare = bcrypt.compareSync(password, user.password);

  if (!isCompare) {
    res
      .status(401)
      .json({ success: false, error: "Username or password is wrong" });
    return;
  }

  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "1h",
  });

  res.status(200).json({ success: true, token });
};
