const express = require('express')
const axios = require('axios')
const {rpcClient} = require('./rabbit')
require('./mongo/connection')
const addUser = require('./mongo/addUser')
const send = require('./mail/send')

const app = express()
const PORT = process.env.PORT || 3501
const GATEWAY_URL = `http://gateway:${process.env.GATEWAY_PORT}`

app.get('/', (req, res) => {
  res.json({res: `Hello World! Express 1 ${process.env.NODE_ENV}`})
})

app.get('/mongo', async (req, res) => {
  const responsik = await addUser()
  res.json({res: responsik}) 
})

app.get('/mail', async (req, res) => {
  const message = await send()
  res.json({res: message})
})

app.get('/axios', async (req, res) => {
  const response = await axios.get(`${GATEWAY_URL}/express2/axios`)
  res.json({res: `Let's work Express 1 + ${response.data} - worked!`})
})

app.get('/rabbit', async (req, res) => {
  try {
    const message = await rpcClient('Express 1 msg')
    res.status(200).json({res: message})
  } catch (err) {
    res.status(500).json({res: err})
  }
})

app.get('*', (req, res) => {
  res.send(req.url)
})

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT} environment: ${process.env.NODE_ENV}`)
})