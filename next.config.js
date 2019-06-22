const composePlugins = require('next-compose-plugins'),
  images = require('next-images'),
  sass = require('@zeit/next-sass')

module.exports = composePlugins([images, sass])
