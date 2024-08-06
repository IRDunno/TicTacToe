const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Username and password are required" });

  const duplicate = await User.findOne({ username }).exec();
  if (duplicate)
    return res
      .status(409) // 409 - Conflict status
      .json({ success: false, message: "Username already exists" });
  try {
    const result = await User.create(req.body);
    res
      .status(201)
      .json({ success: true, message: "User created", data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Username and password are required" });

  const foundUser = await User.findOne({ username }).exec();
  if (!foundUser)
    return res
      .status(401)
      .json({ success: false, message: "Invalid username or password" }); // 401 - Unauthorized
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match)
    return res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });

  const accessToken = jwt.sign(
    { username: foundUser.username },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "10m" }
  );
  const refreshToken = jwt.sign(
    { username: foundUser.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  const updateUser = await User.findByIdAndUpdate(
    foundUser.id,
    { refreshToken },
    { new: true }
  );
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    // secure: true,
  });
  res.status(200).json({
    success: true,
    message: "User logged in",
    accessToken
  });
};

const refreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken });
  if (!foundUser)
    return res.status(403).json({ success: false, message: "Forbidden" });
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.username)
      return res.status(403).json({ success: false, message: "Forbidden" });
    const accessToken = jwt.sign(
      { username: decoded.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );
    res.status(200).json({ accessToken });
  });
};

const logout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  console.log("s")
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken });
  
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, secure: true });
    return res.sendStatus(204);
  }

  foundUser.refreshToken = "";
  await foundUser.save();

  res.clearCookie("jwt", { httpOnly: true, secure: true });
  res.sendStatus(204);
};

module.exports = { register, login, refreshToken, logout };
