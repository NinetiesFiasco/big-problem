const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3503

const vueClientFolder = path.join(process.cwd(), '/dist')

app.use(express.static(vueClientFolder))

app.use('/', (req, res) => res.status(200).send('Please build project'))

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT} environment: ${process.env.NODE_ENV}`)
})