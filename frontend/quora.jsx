import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"

import * as SessionApiUtil from "./util/session_api_util"
import {login, logout, signup, logoutCurrentUser} from "./actions/session_actions"


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {
                id: window.currentUser.id
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    // window.signup = SessionApiUtil.signup;
    // window.login = SessionApiUtil.login;
    // window.logout = SessionApiUtil.logout;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.dispatch = store.dispatch;
    window.logoutCurrentUser = logoutCurrentUser;

    
    

    const rootEl = document.getElementById("root");
    ReactDOM.render(<Root store = {store}/>, rootEl);
})