const mongoose = require("mongoose");

const newsLetterSchema = mongoose.Schema({
    title: {
        type: String, 
        required: [true, "please add your Title"], 
    },
    author: {
        type: String, 
        required: [true, "please add your author name"], 
    },
    date: {
        type: String, 
        required: [true, "please add date"], 
    },
    imageUrl: {
        type: Number, 
        required: [true, "please add imageUrl"], 
    },
    description: {
        type: String, 
        required: [true, "please add description"], 
    },
}, {
    timestamps: true, 
});

module.exports = mongoose.model("User", userSchema);