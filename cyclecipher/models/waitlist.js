import mongoose from 'mongoose';

const WaitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.models.Waitlist || mongoose.model('Waitlist', WaitlistSchema);