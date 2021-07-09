const passport = require("passport");
const secureRoute = require("./secured-routes");
const undergraduateRoutes = require("./undergraduates");
require("../undergraduates/auth");

const router = require("express").Router();

router.use("/undergraduate", undergraduateRoutes);
// Plug in the JWT strategy as a middleware so only verified users can access this route.
router.use(
  "/undergraduate",
  passport.authenticate("jwt", { session: false }),
  secureRoute
);
module.exports = router;
