import Joi from 'joi'

const validation = (schema) => (payload) =>
	schema.validate(payload, { abortEarly: false })

const productSchema = Joi.object({
	product_name: Joi.string().min(2).max(64).required(),
	description: Joi.string().min(2).max(255),
	warehouse_id: Joi.string().pattern(new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$')).required(),
})

const validatorSignup = validation(productSchema)
export default validatorSignup
