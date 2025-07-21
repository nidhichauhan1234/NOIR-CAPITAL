import { Schema, model, Document } from 'mongoose';

export interface IApplication extends Document {
  name: string;
  email: string;
  phone: string;
  jobRole: string;
  resumeUrl: string;
  skills: string[];
  experience: number;
  appliedDate: Date;
  status: 'New' | 'Shortlisted' | 'Interviewing' | 'Rejected' | 'Hired';
  matchScore?: number;
  interviewer?: string;
  interviewHistory?: {
    round?: string;
    date?: Date;
    interviewer?: string;
    feedback?: string;
  }[];
  feedback?: string;
}

const ApplicationSchema = new Schema<IApplication>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  jobRole: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  skills: [{ type: String }],
  experience: { type: Number, required: true },
  appliedDate: { type: Date, required: true },
  status: { type: String, enum: ['New', 'Shortlisted', 'Interviewing', 'Rejected', 'Hired'], default: 'New' },
  matchScore: { type: Number },
  interviewer: { type: String },
  interviewHistory: [
    {
      round: { type: String },
      date: { type: Date },
      interviewer: { type: String },
      feedback: { type: String },
    }
  ],
  feedback: { type: String },
});

export default model<IApplication>('Application', ApplicationSchema);
