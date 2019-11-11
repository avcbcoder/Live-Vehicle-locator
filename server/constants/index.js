const DEFAULT_ERROR_MESSAGE = "Verma ki galti";

// migrate these to config file later on
const PROCESS_ENV = {
  DEFAULT_PORT: 3000,
  SESS_SECRET: "verma ka unique hash 007",
  SESS_NAME: "avcb",
  SESS_TIME_LIMIT: 2 * 60 * 60 * 1000,
  NODE_ENV: "development" // set this to 'production' for secure session
};

const ERROR_CODE = {
  ALREADY_LOGGED_IN: "already logged in, logout then login again",
  UNREGISTERED_EMAIL: "email is not registered",
  INC_PASSWORD: "incorrect password",
  UNAUTHORIZED_ACCESS: "login to view profile",
  ALREADY_REGISTERED: "An account with this email is already registered",
  INVALID_INPUT: "Data provided is not of the correct format"
};

export { DEFAULT_ERROR_MESSAGE, PROCESS_ENV, ERROR_CODE };
