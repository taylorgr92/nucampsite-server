const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  admin: {
    type: Boolean,
    definition: false,
  },
  firstName: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
