import { combineReducers } from "redux";
import shop from "./shop";
import user from "./user";
import admin from "./admin";

export default combineReducers({
    shop,
    user,
    admin
});