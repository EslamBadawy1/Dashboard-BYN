const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  { timestamps: true },
);

AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

AdminSchema.methods.comparePassword = async function (matchedPassword) {
  return await bcrypt.compare(matchedPassword, this.password);
};

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
