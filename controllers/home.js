/**
 * GET /
 * Home page.
 */

var Journal = require('../models/Journal.js');

exports.index = (req, res) => {
  Journal.find((err, blurbs) => {
    res.render('Home', {
      title: 'Home', journals: blurbs
    });
  });
};
