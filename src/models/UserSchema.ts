import mongoose from "mongoose";


const UserDataSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  phone: { type: String, required: false }, // Only required in the second form
  locality: { type: String },
  skill: { type: String, enum: ["development", "design", "marketing", "management", "data-analysis"], default: "development" },

  // Form-specific fields (optional)
  // For Enrolling for a Job form
  address: { type: String },
  ageRange: { type: String }, // e.g., "15-20"
  discoveryMethod: { type: String }, // How they discovered the job
  state: { type: String },

  // For Hiring a Talent form
  availability: { type: String, enum: ["Full-time", "Part-time", "Remote", "On-site", "Hybrid", "Shift Work"], trim: true, default: "Full-time" }, // e.g., "Full-time"
  workPreference: { type: String }, // e.g., "Remote"
  experience: { type: String, enum: ["beginner", "intermediate", "professional", "expert"], trim: true, default: "beginner" }, // e.g., "Intermediate"
  resume: { type: String }, // To store the uploaded file object
  smLink: { type: String }, // Social media or portfolio link
}, {
  timestamps: true
});

const User = mongoose.models.User || mongoose.model("User", UserDataSchema);
export default User
