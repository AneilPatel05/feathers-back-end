// Initializes the `advertisements` service on path `/advertisements`
const createService = require('feathers-mongodb');
const hooks = require('./advertisements.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/advertisements', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('advertisements');

  mongoClient.then(db => {
    service.Model = db.collection('advertisements');
  });

  service.hooks(hooks);
};
