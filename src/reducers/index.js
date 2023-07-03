import { combineReducers } from "redux";
import shop from "./shop";
import user from "./user";
import admin from "./admin";
import userData from "./user-data";

export default combineReducers({
    shop,
    userData,
    user,
    admin
});