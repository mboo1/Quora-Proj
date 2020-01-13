import { RECEIVE_QUESTION } from "../actions/question_actions"

const answersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_QUESTION:
            newState = {...newState, ...action.answers}
            return newState;
        default:
            return state;
    }

}

export default answersReducer