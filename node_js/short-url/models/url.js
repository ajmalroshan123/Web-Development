const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: {
        type: [{timestamp: Number}],
        default: []
    },
},
{ timestamps: true});

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;