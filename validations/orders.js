import Joi from 'joi'

const validation = (schema) => (payload) =>
	schema.validate(payload, { abortEarly: false })

const orderSchema = Joi.object({
	description: Joi.string().min(5).max(255),
	massa: Joi.number().integer().max(1000).required(),
	ordr_priority: Joi.string().min(2).max(64),
	dimension: Joi.number().integer(),
	usr_id: Joi.string().max(36),
	point_id: Joi.string().max(36),
	status_id: Joi.string().max(36),
	delivery_method_id: Joi.string().max(36),
	delivery_address_id: Joi.string().max(36)
})

const validatorSignup = validation(orderSchema)
export default validatorSignup
