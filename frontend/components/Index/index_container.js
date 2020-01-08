import {connect} from "react-redux";
import Index from "./index"
import {fetchQuestions} from "../../actions/question_actions"

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    questions: Object.values(state.entities.questions)
})

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)