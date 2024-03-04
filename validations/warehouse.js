import Joi from 'joi'

const validation = (schema) => (payload) =>
	schema.validate(payload, { abortEarly: false })

const warehouseSchema = Joi.object({
	name: Joi.string().min(3).max(64).required(),
	city: Joi.string().min(3).max(128).required(),
	street: Joi.string().min(3).max(128).required()
})

const validatorSignup = validation(warehouseSchema)
export default validatorSignup
