const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      //   unique: true,
    },
    modified: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    phone_Num: [
      {
        number: {
          type: Number,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Contacts = mongoose.model("Contacts", contactsSchema);

module.exports = Contacts;
