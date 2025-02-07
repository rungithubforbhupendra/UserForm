const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fields: [
    {
      label: String,
      type: String,  // text, checkbox, radio, dropdown, etc.
      options: [String],  // For dropdown and radio button
      required: Boolean,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', formSchema);
