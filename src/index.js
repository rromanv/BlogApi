import './helpers/dotenv'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import pino from 'express-pino-logger'

import { notFound, errorHandler } from './helpers/errors'
import router from './routes'

const app = express()
const port = parseInt(process.env.PORT)

app.use(cors({ origin: process.env.ORIGIN }))
app.use(helmet())
app.use(pino())
app.use(express.json())

app.use(router)

app.use(notFound)
app.use(errorHandler)

app.listen(port)
