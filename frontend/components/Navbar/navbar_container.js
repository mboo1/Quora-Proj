import {connect} from "react-redux"
import Navbar from "./navbar"
import { createQuestion, searchQuestions} from "../../actions/question_actions"
import { openModal, closeModal } from "../../actions/modal_actions"
import { logout } from "../../actions/session_actions"

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps)
    return ({
    currentUser: state.entities.users[state.session.id],
    questions: state.entities.questions
})}

const mapDispatchToProps = dispatch => ({
    createQuestion: (question) => dispatch(createQuestion(question)),
    openModal: () => dispatch(openModal('questionForm')),
    openSearchModal: () => dispatch(openModal('searchBar')),
    searchQuestions: (searchQuery) => dispatch(searchQuestions(searchQuery)),
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)