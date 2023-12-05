const mongoose = require("mongoose");

const CallRecordSchema = mongoose.Schema({
  callerName: { type: String, required: true, min: 3, max: 30 },
  issue: { type: String, required: true, min: 3, max: 255 },
  phone: { type: String, required: true, min: 8, max: 20 },
  status: {
    type: String,
    enum: ["resolved", "pending", "cancelled", "new"],
    default: "new",
  },
  /*   owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  }, */
});

module.exports = mongoose.model("CallRecord", CallRecordSchema);
