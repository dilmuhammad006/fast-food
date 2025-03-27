import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().positive().equired(),
  description: Joi.string(),
  imageUrl: Joi.string(),
  category: Joi.string().required(),
}).required();
