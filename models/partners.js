const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const partnerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    
    },

    image: {
      type: String,
      required: true,
    },
    featured: {
      type: String,
      required: false,
      unique: true
    },
    cost: {
      type: Currency,
      required: true,
      min: 0,
    },
    decription: {
      type: String,
      required: true,
    },
    partner: [partnerSchema],
  },
  {
    timestamps: true,
  }
);
const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
