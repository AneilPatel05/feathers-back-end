const advertisements = require('./advertisements/advertisements.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(advertisements);
  app.configure(users);
};
