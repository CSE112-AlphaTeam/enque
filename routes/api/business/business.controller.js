/**
* Using Rails-like standard naming convention for endpoints.
* GET     /users              ->  index
* POST    /users              ->  create
* GET     /users/:id          ->  show
* PUT     /users/:id          ->  update
* DELETE  /users/:id          ->  destroy
*/

'use strict';

var _ = require('underscore');

/**
 * @description grab our db object from the request and query the collection
 * @param req The req parameter used to access the database
 * @param res 
 * @return res.json(200, users);
 */
exports.index = function(req, res) {

  // grab our db object from the request
  var db = req.db;
  var collection = db.get('businesses');

  // query the collection
  collection.find({ }, function(err, users) {
    if (err) { return handleError(res, err); }
    return res.json(200, users);
  });
};

/**
 * @description Handle Errors by sending status
 * @param res 
 * @param err
 * @return res.sendStatus;
 */
function handleError(res, err) {
  return res.sendStatus(500, err);
}
