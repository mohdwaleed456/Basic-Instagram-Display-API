const mongoose = require('mongoose')

const postsSchema = mongoose.Schema(
  {
    img_url: {
      type: String,
      required: true
    },
    caption: {
      type: String
    }
  }
)

const Posts = mongoose.model('Posts', postsSchema)
module.exports = Posts
