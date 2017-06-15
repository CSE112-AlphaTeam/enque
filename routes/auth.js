var express = require('express');
var router = express.Router();



module.exports = function(passport){


    // =====================================
    // Signup ===============================
    // =====================================
    // show the login form

/**
 * @description Show the Login Form. Render the page and pass in any flash data if it exists
 *
 * @param req
 * @param res
 * @returns N/A
 */

router.get('/signup', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('auth/signup.hjs');
});



/**
 * @description Process the signup form 
 *
 * @param req
 * @param res
 * @returns N/A
 */
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
}));




router.get('/employeeregister',function (req,res){
    res.render('business/registeremployees');
});


/**
 * @description Redirect to the secure profile section or redirect back to the signup page if there is an error
 *
 * @param req
 * @param res
 * @returns N/A
 */
router.post('/employeeregister',passport.authenticate('local-signup-employee',{
    successRedirect : '/config', // redirect to the secure profile section
    failureRedirect : '/' // redirect back to the signup page if there is an error
}));




/**
 * @description Get the user out of session and pass to template
 * @param req
 * @param res
 * @returns N/A
 */
router.get('/profile', isLoggedIn, function(req, res) {
    res.render('auth/profile.hjs', {
        user : req.user // get the user out of session and pass to template
    });
});

// =====================================
// LOGOUT ==============================
// =====================================
// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });


/**
 * @description Route middleware to make sure a user is logged in. If user is authenticated in the session, carry on
 * If they aren't redirect them to the home page
 * @param req
 * @param res
 * @returns N/A
 */
 
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}


/**
 * @description Route middleware to make sure a company is logged in. If user is authenticated in the session, carry on
 * If they aren't redirect them to the home page
 * @param req
 * @param res
 * @returns N/A
 */
function isLoggedInBusiness(req, res, next) {

    // if user is authenticated in the session, carry on
    if ((req.isAuthenticated()&& req.user.Business.length) === 1) {
        return next();
    }

    // if they aren't redirect them to the home page
    res.redirect('/');
}

return router;

};
