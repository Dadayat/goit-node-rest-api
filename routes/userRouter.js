import express from 'express';

const userRouter = express.Router();

import { validateBody } from '../helpers/validateBody.js';
import { authenticate } from '../helpers/authenticate.js';
import { registerSchema, loginSchema } from '../schemas/userSchemas.js';
import {
  register,
  getCurrent,
  logout, login
} from '../controllers/userControllers.js';

userRouter.post('/register', validateBody(registerSchema), register);

userRouter.post('/login', validateBody(loginSchema), login);

userRouter.get('/current', authenticate, getCurrent);

userRouter.post('/logout', authenticate, logout);

export default userRouter;
