import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/health
router.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// GET /api/users
router.get('/users', (_req: Request, res: Response) => {
  // Example user data
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];
  
  res.json({ users });
});

// POST /api/users
router.post('/users', (req: Request, res: Response) => {
  const { name } = req.body;
  
  if (!name) {
    res.status(400).json({ error: 'Name is required' });
    return;
  }
  
  // Example response (in a real app, this would save to a database)
  res.status(201).json({
    id: Math.floor(Math.random() * 1000),
    name,
    createdAt: new Date().toISOString()
  });
});

export default router; 