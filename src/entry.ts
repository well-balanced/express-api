import express from 'express'
import { PORT } from './env'

const app = express()

app.get('/', (req, res) => {
  res.send({
    name: '@well-balanced/api'
  })
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})

