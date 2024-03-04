import prisma from "../DB/db.config.js";
import validatorSignup from "../validations/product.js";

// * Get all product
export const fetchProduct = async (req, res) => {
	const products = await prisma.product.findMany({})

	return res.json({ status: 200, data: products })
}

// * Create product
export const createProduct = async (req, res) => {
	const { error } = validatorSignup(req.body)

	if (error) {
		return res.status(400).json({ type: "Joi", message: error.details[0].message })
	}

	const { product_name, description, warehouse_id } = req.body

	const needWarehouse = await prisma.warehouse.findUnique({
		where: {
			id: warehouse_id
		},
	})

	if (!needWarehouse) {
		return res.json({ status: 400, msg: "Неправильно введён id склада" })
	}

	const newOrder = await prisma.product.create({
		data: {
			product_name,
			description,
			warehouse_id: needWarehouse.id
		}
	})

	return res.json({ status: 200, data: newOrder, msg: "Order created" })
}

// * Update the product
export const updateProduct = async (req, res) => {
	const { error } = validatorSignup(req.body)

	if (error) {
		return res.status(400).json({ type: "Joi", message: error.details[0].message })
	}

	const productId = req.params.id
	const { product_name, description, warehouse_id } = req.body

	const needWarehouse = await prisma.warehouse.findUnique({
		where: {
			id: warehouse_id
		},
	})

	if (!needWarehouse) {
		return res.json({ status: 400, msg: "Неправильно введён id склада" })
	}

	await prisma.product.update({
		where: {
			id: productId
		},
		data: {
			product_name,
			description,
			warehouse_id: needWarehouse.id
		}
	})

	return res.json({ status: 200, msg: "Product update" })
}

// * Delete product
export const deleteProduct = async (req, res) => {
	const productId = req.params.id
	await prisma.product.delete({
		where: {
			id: productId
		}
	})

	return res.json({ status: 200, msg: "Product deleted successfully" })
}


