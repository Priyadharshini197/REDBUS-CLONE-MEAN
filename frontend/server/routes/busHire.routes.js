// server/routes/busHire.routes.js
const express = require('express');
const router = express.Router();
const BusHire = require('../models/busHire.model');

// Create a new bus hire request
router.post('/', async (req, res) => {
  try {
    const newHire = new BusHire(req.body);
    await newHire.save();
    res.status(201).json(newHire);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch all bus hire requests for a user
router.get('/:userId', async (req, res) => {
  try {
    const hires = await BusHire.find({ userId: req.params.userId });
    res.status(200).json(hires);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
