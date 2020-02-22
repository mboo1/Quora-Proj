import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import { createComment } from "../../actions/comment_actions"


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    comments: state.entities.comments,
    authors: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)