import express from "express";
import Doctor from "../models/doctor.js";

const router = express.Router();

// Add doctor
router.post("/", async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
