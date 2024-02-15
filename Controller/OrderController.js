import prisma from "../DB/db.config.js"

// * Get all order
export const fetchOrders = async (req, res) => {
	const orders = await prisma.ordr.findMany({})

	return res.json({ status: 200, data: orders })
}

// * Create order
export const createOrder = async (req, res) => {
	const { description, massa, ordr_priority, usr_id, point_id, status_id, dimension } = req.body

	const newOrder = await prisma.ordr.create({
		data: {
			description,
			massa,
			ordr_date: new Date(),
			ordr_priority,
			usr_id,
			point_id,
			status_id,
			dimension
		}
	})

	return res.json({ status: 200, data: newOrder, msg: "Order created" })
}

// * Get the user's order
export const showOrder = async (req, res) => {
	const user_id = req.params.id

	const order = await prisma.ordr.findMany({

		where: {
			usr_id: user_id
		}
	})

	return res.json({ status: 200, data: order })
}

// * Delete order
export const deleteOrder = async (req, res) => {
	const orderId = req.params.id
	await prisma.ordr.delete({
		where: {
			id: orderId
		}
	})

	return res.json({ status: 200, msg: "Order deleted successfully" })
}

