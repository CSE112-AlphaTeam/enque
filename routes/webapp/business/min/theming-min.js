var style = require('./../../../lib/style.js');

/**
 * @description Render the business theme
 * GET /api/m/form/:id
 *
 * @param req req.db A database object.
 * @param res Respond with '404' (form not found) or a JSON representation of
 *        the form.
 * @param next Used to handle any errors encountered when querying the
 *        database.array
 * @returns N/A
 */
exports.get = function (req, res, next) {
    // console.log(req);
    var bid = req.user[0].business;
    req.db.get('businesses').findById(bid, function (err, business) {
        if (err) {
            return next(err);
        }

        res.render('business/theme', {
            companyName: business.companyName,
            bg: business.style.bg,
            logo: business.logo,
            buttonBg: style.rgbObjectToCSS(business.style.buttonBg),
            buttonText: style.rgbObjectToCSS(business.style.buttonText),
            containerText: style.rgbObjectToCSS(business.style.containerText),
            containerBg: style.rgbObjectToCSS(business.style.containerBg),
            style: JSON.stringify(business.style)
        });
    });
};


