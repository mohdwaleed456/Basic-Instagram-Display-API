const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const posts = require('./routes/postsRoute')
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.use('/posts', posts)

module.exports = app
