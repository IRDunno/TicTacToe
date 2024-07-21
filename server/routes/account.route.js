const router = require("express").Router();
const Account = require("../models/account.model");

// Create account
router.post("/", async (req, res) => {
  try {
    const exists = await Account.findOne({
      where: { username: req.body.username },
    });

    if (exists) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const account = await Account.create(req.body);
    res.status(201).json(account);
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
