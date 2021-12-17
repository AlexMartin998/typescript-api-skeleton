import { Application, Request, Response } from 'express';
import express from 'express';

import './db/db';
import { setupMiddlewares } from './middlewares/setup.middleware';

// Initializations:
const app: Application = express();

// Settings
// app.set('PORT', process.env.PORT || 3000);

// Middlewares
setupMiddlewares(app);

// Routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ msg: 'GET' });
});

export default app;
