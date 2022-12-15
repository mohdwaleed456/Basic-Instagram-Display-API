const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

exports.login = async (req, res) => {
  const data = await User.findOne({ userId: req.body.userId })
  if (data) {
    createToken(data, req, res)
  } else {
    res.send({ status: 401, messgae: 'User ID is invalid!'})
  }
}

const createToken = (data, req, res) => {
  let userId = data.userId
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h'
  })
  res.cookie('instaToken', token, {
    expires: new Date(Date.now() + 3600000),
    httpOnly: true
  })
  res.send({ status: 200, token, data })
}

exports.authenticate = async (req, res, next) => {
  let token
  if (req.headers.authorization) {
    token = req.headers.authorization
  } else if (req.cookies.instaToken) {
    token = req.cookies.instaToken
  }
  if (!token) {
    res.send('You are not logged in!')
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
  if (decoded) {
    console.log('Token is verified!')
    next()
  } else {
    res.send('Token has been expired!')
  }
}
