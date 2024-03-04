import prisma from "../DB/db.config.js"
import validatorSignup from "../validations/warehouse.js"

// * Get all warehouse
export const fetchWarehouse = async (req, res) => {
	const warehouse = await prisma.warehouse.findMany()

	return res.json({ status: 200, data: warehouse })
}

// * Create warehouse
export const createWarehouse = async (req, res) => {
	const { error } = validatorSignup(req.body)

	if (error) {
		return res.status(400).json({ type: "Joi", message: error.details[0].message })
	}

	const { warehouse_name, city, street } = req.body

	const newWarehouse = await prisma.warehouse.create({
		data: {
			warehouse_name,
			city,
			street
		}
	})

	return res.json({ status: 200, data: newWarehouse, msg: "Warehouse created" })
}

// * Update the warehouse
export const updateWarehouse = async (req, res) => {
	const { error } = validatorSignup(req.body)

	if (error) {
		return res.status(400).json({ type: "Joi", message: error.details[0].message })
	}

	const warehouseId = req.params.id
	const { warehouse_name, city, street } = req.body

	await prisma.warehouse.update({
		where: {
			id: warehouseId
		},
		data: {
			warehouse_name,
			city,
			street
		}
	})

	return res.json({ status: 200, msg: "Warehouse update" })
}

// * Delete user
export const deleteWarehouse = async (req, res) => {
	console.log(req)

	const warehouseId = req.params.id
	await prisma.warehouse.delete({
		where: {
			id: warehouseId
		}
	})

	return res.json({ status: 200, msg: "Warehouse deleted successfully" })
}