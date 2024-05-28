import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import contactsRouter from './routes/contactsRouter.js';
import authUserRouter from './routes/authUserRouter.js';

export const app = express();

dotenv.config();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

onsole.log('authUserRouter', authUserRouter);

app.use('/api/users', authUserRouter);
app.use('/api/contacts', contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});