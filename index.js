const cors = require("cors")
const express = require("express")
const server = express()
const news = require("./src/data/news.json")

server.use(cors())

server.get("/", (req, res) => {
  return res.json(news)
})

server.listen(3000, () => {
  console.log("API Funcionando")
})
