import express from 'express';

const authUserRouter = express.Router();

console.log('authUserRouter created');

import { validateBody } from '../helpers/validateBody.js';
import { authenticate } from '../helpers/authenticate.js';
import { registerSchema, loginSchema } from '../schemas/userSchemas.js';
import {
  register,
  getCurrent,
  logout, login
} from '../controllers/authControllers.js';

authUserRouter.post('/register', validateBody(registerSchema), register);

authUserRouter.post('/login', validateBody(loginSchema), login);

authUserRouter.get('/current', authenticate, getCurrent);

authUserRouter.post('/logout', authenticate, logout);

export default authUserRouter;
