/**
 * Config var for app
**/
module.exports = {
  mongoDBURI: process.env.MONGOLAB_URI || 'mongodb://heroku_x4bz85sv:4btedcfpao88ohdbm8gnam8k72@ds151141.mlab.com:51141/heroku_x4bz85sv',
  port: process.env.PORT || 4941,
  secret: process.env.SECRET || 'mysecret'
};
