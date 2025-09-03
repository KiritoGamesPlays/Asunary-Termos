const express = require("express")
const app = express()
const port = 3025

app.get('/', (req, res) => {

  res.status(200).sendFile("/home/container/index.html")

})

app.use(express.static('files'));


app.listen(port, () => {

  console.log(`Online na porta: ${port}`)

})
