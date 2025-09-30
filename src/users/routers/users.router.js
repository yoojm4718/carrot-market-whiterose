import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../models/users.model";
import { Op } from "sequelize";

const usersRouter = Router();

// 회원가입 API
usersRouter.post("/", async (req, res, next) => {
  try {
    const { nickname, email, password, passwordConfirm, phoneNumber } =
      req.body;

    if (!nickname || !email || !password || !passwordConfirm || !phoneNumber)
      throw new Error(
        "nickname, email, password, passwordConfirm, phoneNumber must exist"
      );

    const emailRegex =
      /^(?!\.)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;
    if (!emailRegex.test(email)) throw new Error("email not valid");

    if (password !== passwordConfirm) throw new Error("password not same");

    const phoneNumberRegex = /^010\d{8}$/;
    if (!phoneNumberRegex.test(phoneNumber))
      throw new Error("phone number not valid");

    const foundSameUser = await User.findOne({
      where: {
        [Op.or]: [{ nickname }, { email }],
      },
    });
    if (foundSameUser) throw new Error("user already exist");

    const hashedPassword = await bcrypt.hash(password, 5);

    await User.create({
      nickname,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    return res.status(201).json({
      status: "success",
      message: "user successfully created!",
    });
  } catch (err) {
    console.err(err);
    return next(err);
  }
});

export default usersRouter;
