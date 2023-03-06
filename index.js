const express = require("express")
const server = express()

server.get("/", (req, res) => {
  return res.json({
    mensagem: "API Funcionando...",
  })
})

server.listen(3000, () => {
  console.log("Funcionando")
})
