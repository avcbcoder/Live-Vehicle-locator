import { getUserByEmail } from "./demo-db";
import { DEFAULT_ERROR_MESSAGE, ERROR_CODE } from "constants";

const {
  ALREADY_LOGGED_IN,
  UNREGISTERED_EMAIL,
  INC_PASSWORD,
} = ERROR_CODE;

export default async (req, res) => {
  console.log(`user -> login`);
  try {
    const loggedIn = req.session.userId;
    // already logged in
    if (loggedIn) {
      throw ALREADY_LOGGED_IN;
    } else {
      const { email, password } = req.query;
      const user = getUserByEmail(email);
      // user not registered
      if (!user) {
        throw UNREGISTERED_EMAIL;
      } else {
        // password mismatch
        if (!user.pass === password) {
          throw INC_PASSWORD;
        } else {
          req.session.userId = user.id;
          res.json({ err: false });
        }
      }
    }
  } catch (err) {
    res.json({ err: true, errorMessage: err ? err : DEFAULT_ERROR_MESSAGE });
  }
};
