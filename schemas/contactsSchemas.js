import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().required().min(1).max(15),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
});

export const updateContactSchema = Joi.object({});
