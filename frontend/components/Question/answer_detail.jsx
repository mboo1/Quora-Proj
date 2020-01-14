import React from "react";

class AnswerDetail extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        let tempName;
        (typeof this.props.author === 'undefined') ? tempName = '' : tempName = this.props.author.username;
        return (
            <div>
                <h6>{tempName}</h6>
                <h6>{this.props.answer.created_at}</h6>
                <h6>{this.props.answer.body}</h6>
            </div>
        )
    }
}

export default AnswerDetail;