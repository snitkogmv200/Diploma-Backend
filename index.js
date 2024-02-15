import("dotenv/config")

import express from "express"
import cors from "cors"
const app = express()
const PORT = process.env.PORT || 5050

// * Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
	origin: "*"
}))

app.get("/", (req, res) => {
	return res.send("Hi Everyone")
})

// * Rotes file
import routes from "./routes/index.js"
app.use(routes)

const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()

