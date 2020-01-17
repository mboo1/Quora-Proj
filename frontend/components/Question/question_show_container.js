import {connect} from "react-redux";
import QuestionShow from "./question_show";
import { destroyQuestion, fetchQuestion, updateQuestion } from "../../actions/question_actions";
import { selectAnswers, selectAuthors } from "../../reducers/selectors";
import { createAnswer } from "../../actions/answer_actions";
import { fetchTopics } from "../../actions/topic_actions";
import { openModal } from "../../actions/modal_actions" 

const mapStateToProps = (state, ownProps) => {
    const question = state.entities.questions[ownProps.match.params.questionId];
    let authorIds;
    (typeof question === "undefined" || typeof question.authorIds === "undefined") ? authorIds = [] : authorIds = question.authorIds;
    const authors = selectAuthors(state.entities.users, authorIds)
    return {
        question: question,
        authors: authors,
        fullAnswers: state.entities.answers,
        currentUser: state.entities.users[state.session.id],
        topics: state.entities.topics
    }
}

const mapDispatchToProps = dispatch => ({
    destroyQuestion: (questionId) => dispatch(destroyQuestion(questionId)),
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    createAnswer: (answer) => dispatch(createAnswer(answer)),
    fetchTopics: () => dispatch(fetchTopics()),
    openModal: (modal) => dispatch(openModal(modal)),
    updateQuestion: (questionId) => dispatch(updateQuestion(questionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow)