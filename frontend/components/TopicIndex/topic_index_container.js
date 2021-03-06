import {connect} from "react-redux";
import TopicIndex from "./topic_index";
import {fetchQuestions} from "../../actions/question_actions";
import {fetchUsers} from "../../actions/users_actions";
import { fetchTopics } from '../../actions/topic_actions'


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    questions: Object.values(state.entities.questions),
    topics: state.entities.topics,
    answers: state.entities.answers

})

const mapDispatchToProps = dispatch => ({
    fetchQuestions: (topic) => dispatch(fetchQuestions(topic)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTopics: () => dispatch(fetchTopics())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicIndex)