import React from "react"
import generateColor from "../../util/color_generator"

class CommentDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    createdAt() {
        let createdAt = new Date(this.props.comment.created_at).toString();
        createdAt = createdAt.split(' ').slice(1,4).join(' ')
        return createdAt
    }

    render() {
        let color = generateColor(this.props.author.username);

        return (
            <div className="comment-item">
                <div className="answer-profile-row">
                    <div className="profile-icon-circle" style={{ background: color }} >{this.props.author.username[0].toUpperCase()}</div>{this.props.author.username}
                </div>
                <div className="answer-date">Answered {this.createdAt()}</div>
                <div className="comment-body">{this.props.comment.body}</div>
            </div>
        )
    }
}

export default CommentDetail