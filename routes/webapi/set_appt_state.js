/**
 * @description Finds user's appointment in database and updates state accordingly:
 * if checked in, state is set to roomed; if roomed, state is set to done.
 * @param req
 * @param res
 * @param next
 * @returns {JSON} An array of fieldObjects containing the form
 */
exports.put = function (req, res, next) {

    // grab our db object from the request
    var db = req.db;
    var appt = db.get('appointments');
    // query the collection
    appt.find({_id:req.params.id},function(err,data){
        var myState = {};
        if (data[0].state == 'lobby'){
            myState = {$set: {state : "checked in"}};
        } else if (data[0].state == 'checked in'){
            myState = {$set: {state : "done"}};
        }

        appt.findAndModify({_id:req.params.id }, myState, function(err, data) {
            if (err) { return res.sendStatus(500, err); }
            return res.json(200, data);
        });
    });

};
