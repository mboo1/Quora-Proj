import {connect} from "react-redux";
import Index from "./index"
import {fetchQuestions} from "../../actions/question_actions"
import {fetchUsers} from "../../actions/users_actions"

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    questions: Object.values(state.entities.questions),
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)