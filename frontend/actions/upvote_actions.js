import * as ApiUpvoteUtil from "../util/upvotes_api_util";

export const RECEIVE_UPVOTE = "RECEIVE_UPVOTE";
export const REMOVE_UPVOTE = "REMOVE_UPVOTE";

const receiveUpvote = upvote => ({
    type: RECEIVE_UPVOTE,
    upvote: upvote
})

const removeUpvote = (upvoteId) => ({
    type: REMOVE_UPVOTE,
    upvoteId: upvoteId
})

export const createUpvote = upvote => dispatch => (
    ApiUpvoteUtil.createUpvote(upvote).then(upvote => dispatch(receiveUpvote(upvote)))
)

export const destroyUpvote = (upvoteId) => dispatch => (
    ApiUpvoteUtil.destroyUpvote(upvoteId).then(() => dispatch(removeUpvote(upvoteId)) )
)

// export const destroyQuestion = (questionId) => dispatch => (
//     ApiQuestionUtil.destroyQuestion(questionId).then(() => dispatch(removeQuestion(questionId)) )
// )