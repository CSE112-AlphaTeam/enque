'use strict';

var _ = require('underscore');

exports.save_appointment = function (req, res, next) 
{
    // grab our db object from the request
    var db = req.db;
    const appointments = db.get('appointments');

    if(req.body.result && req.body.result.parameters && req.body.result.parameters.business_id && req.body.result.parameters.appointment_time && req.body.result.parameters.phone_number)
    {
        appointments.insert(
            {
               business_id: req.body.result.parameters.business_id,
               appointment_time: req.body.result.parameters.appointment_time,
               contact_number: req.body.result.parameters.phone_number
                
            },
            
            function(err, doc) { if (err) console.log(err);}
        );
    }
        
};
