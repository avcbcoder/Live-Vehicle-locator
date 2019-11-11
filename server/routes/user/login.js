import { getUserByEmail } from "./demo-db";
import { DEFAULT_ERROR_MESSAGE, ERROR_CODE } from "constants";

const {
  ALREADY_LOGGED_IN,
  UNREGISTERED_EMAIL,
  INC_PASSWORD,
  INVALID_INPUT
} = ERROR_CODE;

/** user/login
 *
 * login with credentials
 * -> steps : 1. check logged in -> 2. check if email is not registered -> 3.match credential
 * req : {email,password} as req.query
 * res : json => {err:boolean, errorMessage:string, message:string}
 */
export default async (req, res) => {
  console.log(`user -> login`);
  try {
    // already logged in
    const loggedIn = req.session.userId;
    if (loggedIn) throw ALREADY_LOGGED_IN;

    const { email, password } = req.query;

    // inputs should not be null
    if (!email || !password) throw INVALID_INPUT;

    const user = getUserByEmail(email);

    // user not registered
    if (!user) throw UNREGISTERED_EMAIL;

    // password mismatch
    if (!user.pass === password) throw INC_PASSWORD;

    req.session.userId = user.id;
    res.json({ err: false, message:"logged in successfully" });
  } catch (err) {
    res.json({ err: true, errorMessage: err ? err : DEFAULT_ERROR_MESSAGE });
  }
};
