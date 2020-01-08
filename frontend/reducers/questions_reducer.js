import { RECEIVE_QUESTION, RECEIVE_QUESTIONS, REMOVE_QUESTION } from "../actions/question_actions"

const questionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_QUESTION:
            newState[action.question.id] = action.question;
            return newState;
        case RECEIVE_QUESTIONS:
            return action.questions;
        case REMOVE_QUESTION:
            delete newState[action.questionId];
            return newState;
        default:
            return state;
    }
}


export default questionsReducer