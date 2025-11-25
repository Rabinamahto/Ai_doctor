// Sample doctors data
export const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    experience: 12,
    fees: 800,
    rating: 4.8,
    reviews: 156,
    location: "Delhi",
    qualifications: "MBBS, MD (Cardiology), FACC",
    about: "Specialized in interventional cardiology with over 12 years of experience in treating heart diseases.",
    clinicAddress: "Max Hospital, Saket, New Delhi",
    phone: "+91-9876543210",
    email: "dr.priya@example.com",
    photo: "https://via.placeholder.com/150",
    availability: ["Mon", "Wed", "Fri"],
    timeSlots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"]
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialty: "Dermatologist",
    experience: 8,
    fees: 600,
    rating: 4.6,
    reviews: 89,
    location: "Mumbai",
    qualifications: "MBBS, MD (Dermatology)",
    about: "Expert in treating skin, hair, and nail disorders. Specialized in cosmetic dermatology.",
    clinicAddress: "Lilavati Hospital, Bandra, Mumbai",
    phone: "+91-9876543211",
    email: "dr.rajesh@example.com",
    photo: "https://via.placeholder.com/150",
    availability: ["Tue", "Thu", "Sat"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "03:00 PM", "04:00 PM"]
  },
  {
    id: 3,
    name: "Dr. Anjali Mehta",
    specialty: "Pediatrician",
    experience: 15,
    fees: 700,
    rating: 4.9,
    reviews: 234,
    location: "Bangalore",
    qualifications: "MBBS, MD (Pediatrics), FIAP",
    about: "Experienced pediatrician specializing in child healthcare and vaccinations.",
    clinicAddress: "Apollo Hospital, Bangalore",
    phone: "+91-9876543212",
    email: "dr.anjali@example.com",
    photo: "https://via.placeholder.com/150",
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    timeSlots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"]
  }
];

export const specialties = [
  { name: "Cardiologist", icon: "❤️", desc: "Heart specialists" },
  { name: "Dermatologist", icon: "🧴", desc: "Skin & hair care" },
  { name: "Pediatrician", icon: "👶", desc: "Child healthcare" },
  { name: "Orthopedic", icon: "🦴", desc: "Bone & joint care" },
  { name: "Gynecologist", icon: "👩‍⚕️", desc: "Women's health" },
  { name: "Dentist", icon: "🦷", desc: "Dental care" },
  { name: "General Physician", icon: "🩺", desc: "General health" },
  { name: "Psychiatrist", icon: "🧠", desc: "Mental health" }
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Verma",
    review: "Excellent service! Found the right doctor within minutes. The AI assistant was very helpful.",
    rating: 5,
    date: "2 weeks ago"
  }
];
