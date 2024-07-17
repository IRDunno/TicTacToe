const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// Routes

// register
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const currentDate = new Date();

    const register = await pool.query(
      "INSERT INTO users (username, password, datecreated, dateupdated) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, password, currentDate, currentDate]
    );

    res
      .status(201)
      .send({ message: "User registered successfully!", data: register });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred during registration." });
  }
});

// get all users
app.get("/users", async (req, res) => {
  try {
    const getAllUsers = await pool.query("SELECT * FROM users");

    res.status(200).send({ data: getAllUsers.rows });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occured fetching users" });
  }
});

// get a user
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    res.status(200).send({ data: getUser.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occured fetching user" });
  }
});

// update a user
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;
    const currentDate = new Date();

    const updateUser = await pool.query(
      "UPDATE users SET username = $1, password = $2, dateupdated = $3 WHERE id = $4",
      [username, password, currentDate, id]
    );

    res.status(200).send({ message: "User updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occured updating user" });
  }
});

// delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
      id,
    ]);

    res.status(200).send({ message: "User deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occured deleting user" });
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
