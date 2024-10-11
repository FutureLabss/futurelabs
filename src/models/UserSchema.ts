import mongoose from "mongoose";


const UserDataSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  phone: { type: String, required: true }, // Only required in the second form
  locality: { type: String },
  skill: { type: String },

  // Form-specific fields (optional)
  // For Enrolling for a Job form
  address: { type: String },
  ageRange: { type: String }, // e.g., "15-20"
  discoveryMethod: { type: String }, // How they discovered the job
  state: { type: String },

  // For Hiring a Talent form
  availability: { type: String }, // e.g., "Full-time"
  workPreference: { type: String }, // e.g., "Remote"
  experience: { type: String }, // e.g., "Intermediate"
  resume: { type: Object }, // To store the uploaded file object
  smLink: { type: String }, // Social media or portfolio link
}, {
  timestamps: true
});

const User = mongoose.models.User || mongoose.model("User", UserDataSchema);
export default User