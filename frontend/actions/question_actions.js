import * as ApiQuestionUtil from "../util/questions_api_util";

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

const receiveQuestion = (question) => ({
    type: RECEIVE_QUESTION,
    question: question
})

const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions: questions
})

const removeQuestion = (questionId) => ({
    type: REMOVE_QUESTION,
    questionId: questionId
})

export const fetchQuestions = () => dispatch => (
    ApiQuestionUtil.fetchQuestions().then(questions => dispatch(receiveQuestions(questions)))
)

export const fetchQuestion = (questionId) => dispatch => (
    ApiQuestionUtil.fetchQuestion(questionId).then(question => dispatch(receiveQuestion(question)))
)

export const createQuestion = (question) => dispatch => (
    ApiQuestionUtil.createQuestion(question).then(question => dispatch(receiveQuestion(question)))
)

export const destroyQuestion = (questionId) => dispatch => (
    ApiQuestionUtil.destroyQuestion(questionId).then(() => dispatch(removeQuestion(questionId)) )
)