const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

const app = require('./app')

const connectDb = require('./database')

connectDb()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}...`)
})
