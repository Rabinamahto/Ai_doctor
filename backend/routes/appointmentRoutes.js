import express from "express";
import Appointment from "../models/appointments.js";

const router = express.Router();

// Book appointment
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
