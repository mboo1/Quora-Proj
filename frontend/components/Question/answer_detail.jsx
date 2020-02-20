import React from "react";

class AnswerDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upvotes: [],
            alreadyVoted: false,
            voteId: ''
        }
        this.renderVoteButton = this.renderVoteButton.bind(this);
        this.handleDestroyUpvote = this.handleDestroyUpvote.bind(this);
        this.handleCreateUpvote = this.handleCreateUpvote.bind(this);
    }

    componentDidMount() {
        let upvoteArr = [];
        Object.values(this.props.upvotes).forEach(upvote => {
            if (upvote.answer_id === this.props.answer.id) {
                upvoteArr.push(upvote);
                if (upvote.author_id === this.props.currentUser.id) {
                    this.setState({
                        alreadyVoted: true,
                        voteId: upvote.id
                    })
                }
            }
        })
        this.setState({
            upvotes: upvoteArr
        })
    }

    handleDestroyUpvote() {
        this.props.destroyUpvote(this.state.voteId)
    }

    handleCreateUpvote() {
        this.props.createUpvote({author_id: this.props.currentUser.id, answer_id: this.props.answer.id})
    }

    renderVoteButton() {
        if (this.state.alreadyVoted) {
            this.state.upvotes
            return (<div>
                        <div>You already voted!</div>
                        <div className="upvoted-button" onClick={this.handleDestroyUpvote}>
                            {/* <img src="https://i.imgur.com/SYOBXMd.png" height="18px" width="20px" alt="upvoted"/> */}
                            <img className="arrow-img" src="https://i.imgur.com/DkJAg3S.png" height="18px" width="20px" alt="upvoted"/>
                            Upvote • {this.state.upvotes.length}
                        </div>
                    </div>
            )
        } else {
            return (<div className="upvoted-button" onClick={this.handleCreateUpvote}>
                        <img src="https://i.imgur.com/SqBaIR4.png" height="18px" width="20px" alt="upvote"/>
                        <p>Upvote • {this.state.upvotes.length}</p>
                    </div>
            )
        }
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
                {/* <div className="answer-body">{this.props.answer.body}</div> */}
                {/* <div className="answer-body">{renderHTML(this.props.answer.body)}</div> */}
                <div className="answer-body" dangerouslySetInnerHTML={{__html: this.props.answer.body}}></div>
                {this.renderVoteButton()}
            </div>
        )
    }
}

export default AnswerDetail;