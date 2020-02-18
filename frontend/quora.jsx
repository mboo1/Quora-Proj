import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"

import * as SessionApiUtil from "./util/session_api_util"
import * as QuestionsApiUtil from "./util/questions_api_util"
import * as UsersApiUtil from "./util/users_api_util"
import * as AnswersApiUtil from "./util/answers_api_util"
import {login, logout, signup, logoutCurrentUser} from "./actions/session_actions"
import { fetchQuestions, fetchQuestion, createQuestion, destroyQuestion } from "./actions/question_actions"
import { fetchUsers, fetchUser } from "./actions/users_actions"
import { createAnswer } from "./actions/answer_actions"
import * as TopicsApiUtil from "./util/topics_api_util"
import { fetchTopics } from "./actions/topic_actions"


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
    window.fetchQuestions = QuestionsApiUtil.fetchQuestions;
    window.fetchQuestion = QuestionsApiUtil.fetchQuestion;
    window.updateQuestion = QuestionsApiUtil.updateQuestion;
    // window.createQuestion = QuestionsApiUtil.createQuestion;
    // window.destroyQuestion = QuestionsApiUtil.destroyQuestion;
    window.searchQuestions = QuestionsApiUtil.searchQuestions;
    // window.fetchUsers = UsersApiUtil.fetchUsers;
    // window.fetchQuestions = fetchQuestions;
    window.fetchUsers = fetchUsers;
    window.fetchUser = fetchUser;
    window.createAnswer = createAnswer
    // window.createAnswer = AnswersApiUtil.createAnswer;
    // window.fetchQuestion = fetchQuestion;
    window.createQuestion = createQuestion;
    window.destroyQuestion = destroyQuestion;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.dispatch = store.dispatch;
    window.fetchTopics = fetchTopics

    const rootEl = document.getElementById("root");
    ReactDOM.render(<Root store = {store}/>, rootEl);
})