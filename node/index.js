import './env.js'
import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/router.js'
import cors from 'cors'

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// initialize router
router(app)

app.get('/test', (req, res) => {
  res.send('test')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})

export default app
