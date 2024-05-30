import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().required().min(1).max(15),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
  favorite: Joi.boolean(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(1).max(15),
  email: Joi.string().email(),
  phone: Joi.number(),
  favorite: Joi.boolean(),
})
  .min(1)
  .messages({ "object.min": "Body must have at least one field" });


export const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});