import { getUserById } from "./demo-db";
import { DEFAULT_ERROR_MESSAGE, ERROR_CODE } from "constants";

const { UNAUTHORIZED_ACCESS } = ERROR_CODE;

export default async (req, res) => {
  console.log(`user -> profile`);
  try {
    if (req.session && req.session.userId) {
      const { userId } = req.session.userId;
      const user = getUserById(userId);
      if (user) res.json(user);
      else throw UNAUTHORIZED_ACCESS;
    } else {
      throw UNAUTHORIZED_ACCESS;
    }
  } catch (err) {
    res.json({ err: true, errorMessage: err ? err : DEFAULT_ERROR_MESSAGE });
  }
};
