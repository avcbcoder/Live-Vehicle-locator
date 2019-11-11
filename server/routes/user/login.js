// import {}

route.get("/login", async (req, res) => {
    console.log(`user -> login`);
    let msg = "";
    let err = "";
    try {
      const loggedIn = req.session.userId;
      // already logged in
      if (loggedIn) {
        res.json(E_101);
      } else {
        const { email, password } = req.query;
        const user = array.find(function(user) {
          return user.email === email;
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