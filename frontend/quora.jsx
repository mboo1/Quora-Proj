import React from "react";
import ReactDOM from "react-dom";
import * as SessionApiUtil from "./util/session_api_util"
import configureStore from "./store/store"
import Root from "./components/root"


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.getState = store.getState;
    window.signup = SessionApiUtil.signup;
    window.login = SessionApiUtil.login;
    window.logout = SessionApiUtil.logout;

    const rootEl = document.getElementById("root");
    ReactDOM.render(<Root store = {store}/>, rootEl);
})