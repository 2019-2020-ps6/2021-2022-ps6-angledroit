const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  label: Joi.string().required(),
  quizId: Joi.number(),
  answers: Joi.array(),
  imageUrl: Joi.string(),
  imageUrl2: Joi.string(),
})
