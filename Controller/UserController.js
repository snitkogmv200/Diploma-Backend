import prisma from "../DB/db.config.js"

// * Get all users
export const fetchUsers = async (req, res) => {
	const users = await prisma.usr.findMany({})

	return res.json({ status: 200, data: users })
}

// * Create user
export const createUser = async (req, res) => {
	const { first_name, last_name, email, phone, role_value } = req.body
	console.log(req.body)
	const findUser = await prisma.usr.findUnique({
		where: {
			email: email,
		}
	})
	console.log(findUser)

	if (findUser) {
		return res.json({ status: 400, message: "Email Already Taken. Please another email." })
	}

	const newUser = await prisma.usr.create({
		data: {
			first_name: first_name,
			last_name: last_name,
			email: email,
			phone: phone,
			role_value: role_value
		}
	})

	return res.json({ status: 200, data: newUser, msg: "User created" })
}

// * Update the user
export const updateUser = async (req, res) => {
	const userId = req.params.id
	console.log(userId)
	const { first_name, last_name, email, phone, role_value } = req.body

	await prisma.usr.update({
		where: {
			id: userId
		},
		data: {
			first_name,
			last_name,
			email,
			phone,
			role_value
		}
	})

	return res.json({ status: 200, msg: "User update" })
}

// * Show user
export const showUser = async (req, res) => {
	const userId = req.params.id
	const user = await prisma.usr.findFirst({
		where: {
			id: userId
		},
	})

	return res.json({ status: 200, data: user })
}

// * Delete user
export const deleteUser = async (req, res) => {
	const userId = req.params.id
	await prisma.usr.delete({
		where: {
			id: userId
		}
	})

	return res.json({ status: 200, msg: "User deleted successfully" })
}
