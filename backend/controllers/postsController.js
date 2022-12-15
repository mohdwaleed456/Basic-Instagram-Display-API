const Posts = require('../models/postsModel')
const axios = require('axios')

exports.getData = async (req, res, next) => {
  let ROOT_URL = process.env.ROOT_URL
  let USER_ID = process.env.USER_ID
  let TOKEN = process.env.TOKEN
  let config = {
    method: 'get',
    url: `${ROOT_URL}/${USER_ID}/media?access_token=${TOKEN}&fields=id,timestamp,caption,media_url`,
    headers: {
      Cookie: 'csrftoken=cPhoKHBJi9sOGy1Mp6dwJiNB1k3UUl1L; ig_nrcb=1'
    }
  }

  axios(config)
    .then(function (response) {
      let data = response.data.data
      res.send(data)
    })
    .catch(function (error) {
      return error
    })
}

exports.postData = async (req, res) => {
  // console.log(req.body)
  const data = await Posts.create(req.body)
  res.send(data)
}
