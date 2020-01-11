import {connect} from "react-redux"
import Navbar from "./navbar"
import { createQuestion } from "../../actions/question_actions"
import { openModal } from "../../actions/modal_actions"
import { logout } from "../../actions/session_actions"

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
    createQuestion: (question) => dispatch(createQuestion(question)),
    openModal: () => dispatch(openModal('open')),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)