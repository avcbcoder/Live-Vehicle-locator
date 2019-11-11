import { getUserByEmail } from "./demo-db";
import { DEFAULT_ERROR_MESSAGE, ERROR_CODE } from "constants";

const { INVALID_INPUT } = ERROR_CODE;

/** check whether email is registered
 * -> 1. check is email exist in user db
 * req : {email} as query
 * res : json => {err:boolean, errorMessage:string, exist:boolean}
 */
export default async (req, res) => {
  console.log(`user -> check`);
  try {
    const { email } = req.query;
    
    // should not be null
    if (!email) throw INVALID_INPUT;
    const user = getUserByEmail(email);
    
    // return true if user exist
    res.json({ err: false, exist: user ? true : false });
  } catch (err) {
    res.json({ err: true, errorMessage: err ? err : DEFAULT_ERROR_MESSAGE });
  }
};
