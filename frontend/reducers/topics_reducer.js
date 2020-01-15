import { RECEIVE_TOPICS } from "../actions/topic_actions"

const topicsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_TOPICS:
            newState = {...action.topics, ...newState}
            return newState    
        default:
            return state
    }
}

export default topicsReducer