const mongoose = require("mongoose");

const UserSchema = {
    email: {
        type: String,
        required: true,
        unique: true,
      },
    fullName:{
        type: String,
        required: true,
    } 
  };
  
     
module.exports = mongoose.model("user", UserSchema);
