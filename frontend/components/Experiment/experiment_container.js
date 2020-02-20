import { connect } from "react-redux";
// import Experiment from "./experiment";
import QuillEditor from "./experiment";


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
    createAnswer: (answer) => dispatch(createAnswer(answer)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuillEditor)


