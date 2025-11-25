import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  experience: Number,
  location: String,
  fees: Number,
  about: String,
  availability: [
    {
      day: String,
      slots: [String]
    }
  ]
});

export default mongoose.model("Doctor", doctorSchema);
