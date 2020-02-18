import * as ApiQuestionUtil from "../util/questions_api_util";

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

const receiveQuestion = ({question, answers, users}) => ({
    type: RECEIVE_QUESTION,
    question: question,
    answers: answers,
    users: users
})

const receiveQuestions = ({questions, answers}) => ({
    type: RECEIVE_QUESTIONS,
    questions: questions,
    answers: answers
})

const removeQuestion = (questionId) => ({
    type: REMOVE_QUESTION,
    questionId: questionId
})

export const fetchQuestions = (topic) => dispatch => (
    ApiQuestionUtil.fetchQuestions(topic).then(questions => dispatch(receiveQuestions(questions)))
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

export const updateQuestion = (question) => dispatch => (
    ApiQuestionUtil.updateQuestion(question).then(question => dispatch(receiveQuestion(question)))
)

export const searchQuestions = (searchQuery) => dispatch => (
    ApiQuestionUtil.searchQuestions(searchQuery).then(questions => dispatch(receiveQuestions(questions)))
)