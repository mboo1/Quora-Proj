import { connect } from "react-redux";
import CommentIndex from "./comment_index";


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    comments: state.entities.comments
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)