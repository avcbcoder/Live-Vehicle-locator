import login from "./login";
import profile from "./profile";
import check from "./check";
import newUser from "./newUser";

const route = require("express").Router();

route.get("/check", check);
route.get("/profile", profile);
route.get("/new-user", newUser);
route.get("/login", login);

export default route;
