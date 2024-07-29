const usersDB = {
  users: require("../models/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  const duplicate = usersDB.users.find((user) => user.username === username);
  if (duplicate) return res.sendStatus(409); // 409 - Conflict status
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username: username, password: hashedPassword };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "models", "users.json"),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    res
      .status(201)
      .json({ success: true, message: "User created", data: usersDB.users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required" });

  const foundUser = usersDB.users.find((user) => user.username === username);
  if (!foundUser)
    return res
      .status(401)
      .json({ success: false, message: "Invalid username or password" }); // 401 - Unauthorized
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match)
    return res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });
  res.status(200).json({ success: true, message: "User logged in" });
};

module.exports = { register, login };
