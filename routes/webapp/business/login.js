
/**
 * @description Takes an req parameter and res parameter and presents the login layout
 *
 * @param req The req parameter used to access the database,
 * @returns N/A
 */
exports.get = function(req, res) {
	req.logout();
    res.render('business/login', { 
    	message: req.flash("login"),
    	layout: false
    });
};


