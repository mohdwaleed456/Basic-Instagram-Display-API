const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    const conn = await mongoose.connect('mongodb://0.0.0.0:27017/InstaApi', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database connected Successful!')
  } catch (error) {
    console.log(`error: ${error.message}`)
    process.exit(1)
  }
}
module.exports = connectDb
