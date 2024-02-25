const express = require("express")
const app = express()

const config = require("./data.json")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

// app.get("/", (req, res) => {
//     res.render("index.ejs", { message: "req.body.firstName" })
// })

app.listen(config.portnum)