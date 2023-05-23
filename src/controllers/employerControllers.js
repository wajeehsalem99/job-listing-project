const Employer = require("../models/Client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const sginUp = async (req, res, next) => {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 10);
    const { id, email } = await Employer.create(user);

    const token = await jwt.sign({ id, email }, process.env.JWT_SECRET);
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ id, email });
  } catch (e) {
    next(e);
  }
};

const sginIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const employer = await Employer.findOne({ where: { email } });
    if (!employer) throw new Error("invalid email or password ");
    const isValid = bcrypt.compare(password, employer.password);
    if (!isValid) throw new Error("invalid email or password ");

    const token = await jwt.sign(
      { id: employer.id, email },
      process.env.JWT_SECRET
    );
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ id: employer.id, email });
  } catch (e) {
    next(e);
  }
};
module.exports = { sginIn, sginUp };
