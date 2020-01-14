import {connect} from "react-redux";
import QuestionShow from "./question_show";
import { destroyQuestion, fetchQuestion } from "../../actions/question_actions";
import { selectAnswers, selectAuthors } from "../../reducers/selectors";
import { createAnswer } from "../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => {
    const question = state.entities.questions[ownProps.match.params.questionId];
    let authorIds;
    (typeof question === "undefined" || typeof question.authorIds === "undefined") ? authorIds = [] : authorIds = question.authorIds;
    const authors = selectAuthors(state.entities.users, authorIds)
    return {
        question: question,
        authors: authors,
        fullAnswers: state.entities.answers,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => ({
    destroyQuestion: (questionId) => dispatch(destroyQuestion(questionId)),
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    createAnswer: (answer) => dispatch(createAnswer(answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow)