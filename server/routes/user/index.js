const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("signup");
});


route.get("/check", async (req, res) => {
  console.log(`user -> check`);
  try {
    const { email } = req.query;
    const exist = false;
    res.json({ err: false, exist });
  } catch (err) {
    res.json({ err: true, errorMessage: DEFAULT_ERROR_MESSAGE });
  }
});

/** get details of user with email
 * -> steps : 1. check if email is registered -> 2. return details as JSON
 * req : {email} as query
 * res : json => {err:boolean, errorMessage:string, exist:boolean}
 */
route.get("/check", async (req, res) => {
  console.log(`user -> check`);
  try {
    const { email } = req.query;
    const exist = false;
    if (exist) {
      // extract details of user (extract password)
    }
    res.json({ err: false, exist });
  } catch (err) {
    res.json({ err: true, errorMessage: DEFAULT_ERROR_MESSAGE });
  }
});

route.get("/", async (req, res) => {
  console.log(`user -> check`);
  try {
    const { email } = req.query;
    const exist = false;
    res.json({ err: false, exist });
  } catch (err) {
    res.json({ err: true, message: "verma ki galti" });
  }
});

route.post("/", async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });
    res.redirect("/login");
  } catch (e) {
    res.redirect("/signup");
  }
});

route.get("/new-user", async (req, res) => {
  console.log(`user -> newLogin`);
  try {
    const loggedIn = req.session.userId;
    // already logged in
    if (loggedIn) {
      res.json(E_101);
    } else {
      const { email, password } = req.query;
      const user = array.find(function(user) {
        return user.id === userId;
      });
      // user not registered
      if (!user) {
        res.json(E_102);
      } else {
        // password mismatch
        if (!user.pass === password) {
          res.json(E_103);
        } else {
          req.session.userId = user.id;
          res.json({ err: false });
        }
      }
    }
  } catch (err) {
    res.json({ err: true, errorMessage: DEFAULT_ERROR_MESSAGE });
  }
});



route.get("/check", async (req, res) => {
  console.log(`user -> check`);
  try {
    const { email } = req.query;
    const user = array.find(function(user) {
      return user.email === email;
    });
    if (user) {
      res.json({ err: false, exist: true });
    }
  } catch (err) {
    res.json({ err: true, errorMessage: DEFAULT_ERROR_MESSAGE });
  }
});

route.get("/profile",);

export { route };
