import  {RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS, RECEIVE_USER } from "../actions/users_actions"
import { RECEIVE_QUESTION } from "../actions/question_actions"

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState
        case RECEIVE_USERS:
            newState = {...newState, ...action.users};
            return newState;
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_QUESTION:
            newState = {...newState, ...action.users};
            return newState;
        default:
            return state
    }
}

export default usersReducer