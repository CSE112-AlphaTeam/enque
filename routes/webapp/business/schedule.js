var crypto = require('crypto');
var baby = require('babyparse');
var async = require('async');
// var sendgrid  = require('sendgrid')('robobetty', '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');
var sendgrid = require('sendgrid')('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');
var ObjectId = require('mongodb').ObjectID;

 /**
 * Takes a req and res parameters and is inputted into function to get employee, notemployee, and business data.
 *
 * @param req and res The two parameters passed in to get the apprporiate employee,
 * @returns The appropriate data about the employee
 */

/**
 * Takes a req and res parameters and is inputted into function to get employee, notemployee, and business data.
 *  Allows the User to input specified data and make changes
 * @param req and res The two parameters passed in to get the apprporiate employee,
 * @returns The appropriate data about the employee
 */
exports.get = function(req,res,next){

    var database =  req.db;
    var employeeDB = database.get('employees');
    var businessID = req.user[0].business;
    var name = req.body.inputName;
    var inputEmail = req.body.inputEmail;
    var inputPhone = req.body.inputPhone;
    
        res.render('business/schedule', {
        title: 'Schedule Appointment',
        isOwner: req.user[0].admin,
        businessId: req.user[0].business,
        schedule: "active"
    });
}

exports.post = function(req, res){
    var database =  req.db;
    var employeeDB = database.get('employees');
    var businessID = req.user[0].business;
    var name = req.body.inputName;
    var inputEmail = req.body.inputEmail;
    var inputPhone = req.body.inputPhone;

    var appointments = database.get('appointments');

    appointments.insert({
        fname: req.body.firstname,
        lname: req.body.lastname,
        appointment_time: req.body.phonenum,
        contact_number: req.body.date,
        reason: req.body.reason
    }, function(err, result){
        if (err) { throw err; }
        res.render('business/schedule', {
            title: 'Schedule Appointment',
            isOwner: req.user[0].admin,
            businessId: req.user[0].business,
            schedule: "active"
        });
    })

};
/* To query database:
    appointments.find({}, function(err, appt){
        console.log(appt);
    });
*/
