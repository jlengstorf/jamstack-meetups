const fetch = require('node-fetch')
const urls = require('../../meetups.json');

var goget = function(url) {
  console.log('fetching:', url);
  return fetch(url)
    .then(res => res.json());
  };

module.exports = async () => {
  return await Promise.all(urls.map(goget));
};
