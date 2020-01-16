import {connect} from "react-redux";
import TopicIndex from "./topic_index";
import {fetchQuestions} from "../../actions/question_actions";
import {fetchUsers} from "../../actions/users_actions";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    questions: Object.values(state.entities.questions),
    topics: state.entities.topics

})

const mapDispatchToProps = dispatch => ({
    fetchQuestions: (topic) => dispatch(fetchQuestions(topic)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicIndex)