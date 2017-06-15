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
 * @returns {JSON} An array of fieldObjects representing the users
 */
exports.index = function(req, res) {

  // grab our db object from the request
  var db = req.db;
  var collection = db.get('mobileTokens');

  // query the collection
  collection.find({ }, function(err, users) {
    if (err) { return handleError(res, err); }
    return res.json(200, users);
  });
};

/**
 * @description Deletes a thing from the DB.
 * @param req The req parameter used to access the database
 * @param res 
 * @returns {Status};
 */
exports.destroy = function(req, res) {
  // grab our db object from the request
  var db = req.db;
  var collection = db.get('mobileTokens');

  // query to create entry in collection
  collection.remove({ _id: req.params.id }, function(err) {
    if(err) { return handleError(res, err); }
    return res.sendStatus(204);
  });
};

/**
 * @description Handle Errors by sending status
 * @param res 
 * @param err
 * @returns Error Status;
 */
function handleError(res, err) {
  return res.sendStatus(500, err);
}
