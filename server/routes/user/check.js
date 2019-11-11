import { getUserByEmail } from "./demo-db";
import { DEFAULT_ERROR_MESSAGE, ERROR_CODE } from "constants";

const { INVALID_INPUT } = ERROR_CODE;

export default async (req, res) => {
  console.log(`user -> check`);
  try {
    const { email } = req.query;
    if (!email) throw INVALID_INPUT;
    const user = getUserByEmail(email);

    res.json({ err: false, exist: user ? true : false });
  } catch (err) {
    res.json({ err: true, errorMessage: err ? err : DEFAULT_ERROR_MESSAGE });
  }
};
