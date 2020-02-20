import { connect } from "react-redux";
import { destroyUpvote, createUpvote } from "../../actions/upvote_actions";
import AnswerDetail from "./answer_detail";


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    comments: state.entities.comments
})

const mapDispatchToProps = dispatch => ({
    createUpvote: (upvote) => dispatch(createUpvote(upvote)),
    destroyUpvote: (upvoteId) => dispatch(destroyUpvote(upvoteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerDetail)