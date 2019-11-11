import { getUserById } from "./demo-db";
import { DEFAULT_ERROR_MESSAGE, ERROR_CODE } from "constants";

const { UNAUTHORIZED_ACCESS } = ERROR_CODE;

/** user/profile
 *
 * get details of user
 * -> steps : 1. get userId from session of request -> 2. return details as JSON
 * req : req.session.userId
 * res : json => {err:boolean, errorMessage:string, user}
 */
export default async (req, res) => {
  console.log(`user -> profile`);
  try {
    if (req.session && req.session.userId) {
      const { userId } = req.session.userId;
      const user = getUserById(userId);

      if (!user) throw UNAUTHORIZED_ACCESS;
      res.json({ err: false, user });
    } else throw UNAUTHORIZED_ACCESS;
  } catch (err) {
    res.json({ err: true, errorMessage: err ? err : DEFAULT_ERROR_MESSAGE });
  }
};
