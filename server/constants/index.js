const DEFAULT_ERROR_MESSAGE = "Verma ki galti";

// migrate these to config file later on
const PROCESS_ENV = {
  DEFAULT_PORT: 3000,
  SESS_SECRET: "verma ka unique hash 007",
  SESS_NAME: "avcb",
  SESS_TIME_LIMIT: 2 * 60 * 60 * 1000,
  NODE_ENV: "development" // set this to 'production' for secure session
};

// user -> 1,
const ERROR_CODE = {
  E_101: { error: true, message: "already logged in, logout then login again" },
  E_102: { error: true, message: "email is not registered" },
  E_103: { error: true, message: "incorrect password" }
};

export { DEFAULT_ERROR_MESSAGE, PROCESS_ENV };
