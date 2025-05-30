import Joi from "joi";

export const emailSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Please enter a valid email address.",
    }),
});
