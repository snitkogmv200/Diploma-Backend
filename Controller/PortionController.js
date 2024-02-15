// import prisma from "../DB/db.config";

// // * Receiving all portions of a certain order
// export const fetchPortion = async (req, res) => {
// 	const order_id = req.params.id

// 	const portion = await prisma.portin.findMany({

// 		where: {
// 			ordr_id: order_id
// 		}
// 	})

// 	return res.json({ status: 200, data: portion })
// }