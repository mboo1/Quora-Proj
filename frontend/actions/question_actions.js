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

const removeQuestion = () => ({
    type: REMOVE_QUESTION
})