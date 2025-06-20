import mongoose, { Types } from "mongoose";

const InquierySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const InquieryModel = mongoose.model("Inquiry", InquierySchema);
export default InquieryModel;
