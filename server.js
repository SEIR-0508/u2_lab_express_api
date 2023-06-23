const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 3001
const db = require("./db")
const app = express()
const logger = require("morgan") // for betterlogging

//requiring our AppRouter which holds the individual routes
const AppRouter = require("./routes/AppRouter")

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", AppRouter) //sets up base URL
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
