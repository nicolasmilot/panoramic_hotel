import express from 'express'

// import { usersRoutes } from './routes/users/users.routes'

const app = express()

app.use(express.json())


// app.use('/api/v1/users', usersRoutes)

export { app as app }