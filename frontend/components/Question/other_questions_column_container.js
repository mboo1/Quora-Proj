import { connect } from "react-redux";
import {fetchQuestions} from "../../actions/question_actions";
import OtherQuestionsColumn from "./other_questions_column"


const mapStateToProps = state => ({
    questions: state.entities.questions
})

const mapDispatchToProps = dispatch => ({
    fetchQuestions: (topic) => dispatch(fetchQuestions(topic))
})

export default connect(mapStateToProps, mapDispatchToProps)(OtherQuestionsColumn)