const express = require("express");
const cors = require("cors");
const sequelize = require("./db");

// get routes
const accountRoutes = require("./routes/account.route");

// middlewares
const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/accounts", accountRoutes);

const PORT = 5000;

const run = async () => {
  try {
    await sequelize.sync();
    console.log("Database & tables created!");

    app.listen(PORT, () => {
      console.log(`Server has started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to create tables or insert data:", error);
  }
};

run();
