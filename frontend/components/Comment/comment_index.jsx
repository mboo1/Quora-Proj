import React from "react"
import { logoutCurrentUser } from "../../actions/session_actions";
import generateColor from "../../util/color_generator"
import CommentDetail from "./comment_detail"

const heightLimit = 200;

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            readyToRender: false,
            commentBody: ''
        }
        this.commentsArr = [];
        this.handleInput = this.handleInput.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    componentDidMount() {
        Object.values(this.props.comments).forEach((comment) => {
            if (comment.answer_id === this.props.answer.id) this.commentsArr.push(comment)
        })
        this.setState({
            readyToRender: true
        })
    }

    componentDidUpdate() {
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({
            commentBody: e.currentTarget.value
        })
        let textarea = document.getElementById(`add-comment-area-${this.props.answer.id}`);
        textarea.style.height = ""; 
        textarea.style.height = Math.min(textarea.scrollHeight-3, heightLimit) + "px";      
    }

    handleCommentSubmit() {        
        this.props.createComment({
            body: this.state.commentBody, 
            author_id: this.props.currentUser.id,
            answer_id: this.props.answer.id
        }).then(this.setState({
            commentBody: ''
        }))
    }

    render() {
        // console.log(this.props.authors[114])
        if (this.state.readyToRender) {
            this.commentsArr = [];
            Object.values(this.props.comments).forEach((comment) => {
                if (comment.answer_id === this.props.answer.id) this.commentsArr.push(comment)
            })
            let color = generateColor(this.props.currentUser.username);
            return (
                <div className="comment-index">
                    <div className="add-comment-row">
                        <div className="profile-icon-circle" style={{ background: color }} >{this.props.currentUser.username[0].toUpperCase()}</div>
                        <textarea  className="comment-field" value={this.state.commentBody} id={`add-comment-area-${this.props.answer.id}`} onChange={this.handleInput} placeholder="Add a comment..."></textarea>
                        <div className="add-comment-button" onClick={this.handleCommentSubmit}>Add Comment</div>
                    </div>
                    {this.commentsArr.map(comment => (
                        <CommentDetail key={comment.id} comment={comment} author={this.props.authors[comment.author_id]}/>
                    ))}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default CommentIndex