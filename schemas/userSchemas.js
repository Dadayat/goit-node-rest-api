import Joi from "joi";
import { emailRegexp } from "../models/user.js";

export const registerSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required().min(6),
    subscription: Joi.string(),
  });
  
export const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required().min(6),
  });

export const emailSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
  })