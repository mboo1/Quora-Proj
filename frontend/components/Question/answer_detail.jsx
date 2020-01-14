import React from "react";

class AnswerDetail extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        let tempName;
        (typeof this.props.author === 'undefined') ? tempName = '' : tempName = this.props.author.username;
        let createdAt = new Date(this.props.answer.created_at).toString();
        createdAt = createdAt.split(' ').slice(1,4).join(' ')
        return (
            <div className="answer-detail">
                <div className="answer-profile-row"><img className="profile-icon" src={userImg}/>{tempName}</div>
                <div className="answer-date">Answered {createdAt}</div>
                <div className="answer-body">{this.props.answer.body}</div>
            </div>
        )
    }
}

export default AnswerDetail;