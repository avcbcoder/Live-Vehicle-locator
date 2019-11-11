import { getUserByEmail } from "./demo-db";
import { DEFAULT_ERROR_MESSAGE, ERROR_CODE } from "constants";

const { ALREADY_LOGGED_IN, UNREGISTERED_EMAIL, INC_PASSWORD } = ERROR_CODE;

export default async (req, res) => {
  console.log(`user -> check`);
  try {
    const { email } = req.query;
    const user = getUserByEmail(email);
    
    res.json({ err: false, exist: user ? true : false });
  } catch (err) {
    res.json({ err: true, errorMessage: DEFAULT_ERROR_MESSAGE });
  }
};
