const express = require("express")
const server = express()
const news = require("./src/data/news.json")

server.get("/news", (req, res) => {
  return res.json(news)
})

server.listen(3000, () => {
  console.log("API Funcionando")
})
