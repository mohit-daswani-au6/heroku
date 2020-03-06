var User = require("../models/user");
module.exports = function(req, res, next) {
  if (req.session.userId) {
    User.findById(req.session.userId).populate("orders")
      .then(function(user) {
        req.user = user;
        next();
      })
      .catch(function(err) {
        console.log(err.message);
        res.redirect("/login");
      });
  } else res.redirect("/login");
};
