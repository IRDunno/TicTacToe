const router = require("express").Router();
const Account = require("../models/account.model");

// Create account
router.post("/", async (req, res) => {
  try {
    const account = await Account.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get accounts
router.get("/", async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;