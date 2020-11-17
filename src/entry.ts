import express from 'express'
import { PORT } from './env'
import { router } from './rest'

const app = express()
app.use(router)

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
