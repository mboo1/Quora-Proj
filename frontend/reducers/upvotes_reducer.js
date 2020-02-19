import { RECEIVE_QUESTION } from "../actions/question_actions";
import { REMOVE_UPVOTE, RECEIVE_UPVOTE } from "../actions/upvote_actions";

const upvotesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_QUESTION:
            newState = {...newState, ...action.upvotes};
            return newState;
        case RECEIVE_UPVOTE:
            newState[action.upvote.id] = action.upvote;
            return newState;
        case REMOVE_UPVOTE:
            delete newState[action.upvoteId];
            return newState;
        default:
            return state;
    }

}

export default upvotesReducer