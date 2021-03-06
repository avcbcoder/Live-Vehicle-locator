import { createNewUser } from "./demo-db";
import { DEFAULT_ERROR_MESSAGE, ERROR_CODE } from "constants";

const { ALREADY_LOGGED_IN, INVALID_INPUT, ALREADY_REGISTERED } = ERROR_CODE;

/** user/new-user
 *
 * add new user
 * -> steps : 1. check logged in -> 2. check if already registered -> add to db
 * req : req.session.userId
 * res : json => {err:boolean, errorMessage:string, message:string}
 */
export default async (req, res) => {
  console.log(`user -> check`);
  try {
    // already logged in
    const loggedIn = req.session.userId;
    if (loggedIn) throw ALREADY_LOGGED_IN;

    const { email, name, password } = req.query;

    // should not be null
    if (!email || !name || !password) throw INVALID_INPUT;

    // already registered
    const user = getUserByEmail(email);
    if (user) throw ALREADY_REGISTERED;

    // add user to DB
    createNewUser({ email, name, password });

    res.json({ err: false, message: "Account created successfully" });
  } catch (err) {
    res.json({ err: true, errorMessage: DEFAULT_ERROR_MESSAGE });
  }
};
