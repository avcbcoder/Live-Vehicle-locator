const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("signup");
});

/** check whether email is registered
 * -> 1. check is email exist in user db
 * req : {email} as query
 * res : json => {err:boolean, errorMessage:string, exist:boolean}
 */
route.get("/auth", async (req, res) => {
  const 
  try {
    const { email, password } = req.query;
    res.json({ err: false, message:"Logged in successfully" });
  } catch (err) {
    res.json({ err: true, errorMessage: "verma ki galti" });
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
      if(exist){
          // extract details of user (extract password)
      }
      res.json({ err: false, exist });
    } catch (err) {
      res.json({ err: true, message: "verma ki galti" });
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

export { route };
