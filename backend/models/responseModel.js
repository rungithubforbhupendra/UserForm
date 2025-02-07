const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    formId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Form' 
    },
    responses: Object,  // Store responses as a JSON object
    submittedAt: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model('Response', responseSchema);
