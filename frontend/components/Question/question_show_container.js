import {connect} from "react-redux"
import QuestionShow from "./question_show"
import { destroyQuestion, fetchQuestion } from "../../actions/question_actions"

const mapStateToProps = (state, ownProps) => ({
    question: state.entities.questions[ownProps.match.params.questionId]
})

const mapDispatchToProps = dispatch => ({
    destroyQuestion: (questionId) => dispatch(destroyQuestion(questionId)),
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow)