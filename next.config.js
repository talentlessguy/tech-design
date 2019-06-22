const images = require('next-optimized-images'),
  sass = require('@zeit/next-sass')

module.exports = sass(
  images({
    target: 'serverless'
  })
)
