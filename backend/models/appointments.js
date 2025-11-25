import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  date: String,
  time: String,
  status: { type: String, default: "pending" },
});

export default mongoose.model("Appointment", appointmentSchema);
