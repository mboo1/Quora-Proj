import { connect } from "react-redux";
import QuestionForm from "./question_form";
import { createQuestion } from "../../actions/question_actions"
import { closeModal } from "../../actions/modal_actions"

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    createQuestion: (question) => dispatch(createQuestion(question)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm)