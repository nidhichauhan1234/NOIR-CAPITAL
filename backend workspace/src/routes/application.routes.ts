import { Router } from 'express';
import { getApplications, updateStatus, updateInterviewHistory, updateInterviewer, updateFeedback } from '../controllers/application.controller';
import { authenticateJWT } from '../middleware/auth.middleware';

const router = Router();

router.get('/applications', authenticateJWT, getApplications);
router.patch('/applications/:id/status', authenticateJWT, updateStatus);
router.patch('/applications/:id/interview-history', authenticateJWT, updateInterviewHistory);
router.patch('/applications/:id/interviewer', authenticateJWT, updateInterviewer);
router.patch('/applications/:id/feedback', authenticateJWT, updateFeedback);

export default router;
