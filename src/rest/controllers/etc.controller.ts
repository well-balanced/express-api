import { Handler } from 'express'

export const root: Handler = (req, res) => {
  res.send({
    name: '@well-balanced/api'
  })
}