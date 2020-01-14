import * as ApiAnswerUtil from "../util/answers_api_util"

export const RECEIVE_ANSWER = "RECEIVE_ANSWER"

const receiveAnswer = answer => ({
    type: RECEIVE_ANSWER,
    answer: answer
})

export const createAnswer = answer => dispatch => (
    ApiAnswerUtil.createAnswer(answer).then(answer => dispatch(receiveAnswer(answer)))
)