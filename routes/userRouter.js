import express from 'express';

const userRouter = express.Router();

import { validateBody } from '../helpers/validateBody.js';
import { authenticate } from '../helpers/authenticate.js';
import { registerSchema, loginSchema, emailSchema } from '../schemas/userSchemas.js';
import {
  register,
  getCurrent,
  logout, login,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail
} from '../controllers/userControllers.js';
import { upload } from '../helpers/upload.js';

userRouter.post('/register', validateBody(registerSchema), register);

userRouter.get('/verify/:verificationCode', verifyEmail)

userRouter.post('/verify', validateBody(emailSchema), resendVerifyEmail)

userRouter.post('/login', validateBody(loginSchema), login);

userRouter.get('/current', authenticate, getCurrent);

userRouter.post('/logout', authenticate, logout);

userRouter.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar)

export default userRouter;
