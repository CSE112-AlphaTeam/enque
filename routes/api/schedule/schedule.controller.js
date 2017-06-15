'use strict';

var _ = require('underscore');

exports.save_appointment = function (req, res, next) 
{
    // grab our db object from the request
    var db = req.db;
    const appointments = db.get('appointments');

    if(req.body.first_name && req.body.last_name && req.body.phone && req.body.time && req.body.reason)
    {
        appointments.insert(
            {
                
                fname: req.body.first_name,
                lname: req.body.last_name,
                appointment_time: req.body.time,
                contact_number: req.body.phone,
                reason: req.body.reason
                
            },
            
            function(err, doc) { if (err) console.log(err);}
        );

        //verify callerID
        var accountSid = 'AC25fa0bed39ca0b79e61b4740c730dcbd';
        var authToken = '931ca60c934f47644d9eb549b10b943b';
        var client = require('twilio')(accountSid, authToken);
        client.validationRequests.create({
            phoneNumber: '+1' + req.body.phone,
            friendlyName: req.body.first_name + ' ' + req.body.last_name
        }).then(function(data) {
            //console.log(data.validationCode);
            res.json({code: data.validationCode});
        });

    }
        
};
