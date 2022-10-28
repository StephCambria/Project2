const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// GET a single logged in user
router.get("/user/:id", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });

    if (userData) {
      const user = userData.get({ plain: true });
      res.render("login", {
        user: user,
        session: req.session,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

//=================================

router.get("/", async (req, res) => {
  return res.render("homepage");
});

router.get("/fridge", async (req, res) => {
  return res.render("fridge");
});

router.get("/grocery", async (req, res) => {
  return res.render("grocery");
});

router.get("/dashboard", async (req, res) => {
  return res.render("dashboard");
});

router.get("/login", async (req, res) => {
  return res.render("login");
});

router.get("/signup", async (req, res) => {
  return res.render("signup");
});

module.exports = router;
