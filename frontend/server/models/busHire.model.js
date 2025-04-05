const mongoose = require('mongoose');

const busHireSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  busSize: { type: String, required: true },
  amenities: [{ type: String }],
  customRoute: { type: String, required: true },
  hireDate: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' }
});

module.exports = mongoose.model('BusHire', busHireSchema);
