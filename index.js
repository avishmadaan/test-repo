const express = require('express')
const path = require("path");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("Hello brother")
console.log(__dirname);

console.log(path.join(__dirname, "/../.."));