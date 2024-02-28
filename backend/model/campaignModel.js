const mongoose = require('mongoose');

// Define the campaign schema
const campaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  targetGroup: {
    type: String,
    enum: ['all', 'male', 'female'],
    required: true
  },
}, {
  timestamps: true
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
