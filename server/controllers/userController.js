const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await User.find({}).exec();

  if (!users) res.sendStatus(404);

  res.status(200).json({ success: true, data: users });
};

const createNewUser = async (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
  };

  if (!newUser.username || !newUser.password) {
    return res
      .status(400)
      .json({ success: false, message: "Username and password is required" });
  }

  const user = await User.create(newUser);
  if (!user) return res.sendStatus(500);

  res.status(201).json({ success: true, data: user });
};

const updateUser = async (req, res) => {
  const user = await User.findById(req.body.id).exec();

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: `User ID ${req.body.id} not found` });
  }
  if (req.body.username) user.username = req.body.username;
  if (req.body.password) user.password = req.body.password;
  const updatedUser = await user.save();
  if (!updatedUser) return res.sendStatus(500);

  res.status(200).json({ success: true, data: user });
};

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.body.id);
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: `User ID ${req.body.id} not found` });
  }

  res.status(200).json({ success: true, message: "User deleted" });
};

const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res
      .status(400)
      .json({ message: `User ID ${req.body.id} not found` });
  }
  res.status(200).json({ success: true, data: user });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUser,
};
