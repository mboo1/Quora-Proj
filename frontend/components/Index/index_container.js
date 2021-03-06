import {connect} from "react-redux";
import Index from "./index"
import {fetchQuestions} from "../../actions/question_actions"
import {fetchUsers} from "../../actions/users_actions"
import { openModal } from "../../actions/modal_actions"

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    questions: Object.values(state.entities.questions),
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    fetchQuestions: (topic) => dispatch(fetchQuestions(topic)),
    fetchUsers: () => dispatch(fetchUsers()),
    openModal: () => dispatch(openModal('questionForm'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)