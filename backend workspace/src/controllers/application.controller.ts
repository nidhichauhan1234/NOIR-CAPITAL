import { Request, Response } from 'express';
import Application from '../models/application.model';

// GET /applications?role=...&skills=...&status=...&page=1&limit=10&sort=appliedDate
export async function getApplications(req: Request, res: Response) {
  const { role, skills, status, interviewer, feedback, page = 1, limit = 10, sort = '-appliedDate' } = req.query;
  const filter: any = {};
  if (role) filter.jobRole = role;
  if (status) filter.status = status;
  if (skills) filter.skills = { $in: (skills as string).split(',') };
  if (interviewer) filter.interviewer = interviewer;
  if (feedback) filter.feedback = { $regex: feedback, $options: 'i' };

  const applications = await Application.find(filter)
    .sort(sort as string)
    .skip((+page - 1) * +limit)
    .limit(+limit);

  const total = await Application.countDocuments(filter);
  res.json({ total, applications });
}

// PATCH /applications/:id/status
export async function updateStatus(req: Request, res: Response) {
  const { id } = req.params;
  const { status } = req.body;
  const updated = await Application.findByIdAndUpdate(id, { status }, { new: true });
  res.json(updated);
}

// PATCH /applications/:id/interview-history
export async function updateInterviewHistory(req: Request, res: Response) {
  const { id } = req.params;
  const { interviewHistory } = req.body;
  const updated = await Application.findByIdAndUpdate(
    id,
    { $set: { interviewHistory } },
    { new: true }
  );
  res.json(updated);
}

// PATCH /applications/:id/interviewer
export async function updateInterviewer(req: Request, res: Response) {
  const { id } = req.params;
  const { interviewer } = req.body;
  const updated = await Application.findByIdAndUpdate(
    id,
    { interviewer },
    { new: true }
  );
  res.json(updated);
}

// PATCH /applications/:id/feedback
export async function updateFeedback(req: Request, res: Response) {
  const { id } = req.params;
  const { feedback } = req.body;
  const updated = await Application.findByIdAndUpdate(
    id,
    { feedback },
    { new: true }
  );
  res.json(updated);
}
