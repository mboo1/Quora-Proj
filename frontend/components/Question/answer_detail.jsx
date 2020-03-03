import React from "react";
import CommentIndexContainer from "../Comment/comment_index_container";
import generateColor from "../../util/color_generator";

class AnswerDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upvotes: [],
            alreadyVoted: false,
            voteId: '',
            readyToRender: false
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
                    this.state.alreadyVoted = true;
                    console.log('found upvote')
                    this.setState({
                        alreadyVoted: true,
                        voteId: upvote.id
                    })
                }
            }
        })
        this.setState({
            upvotes: upvoteArr,
        })
    }

    handleDestroyUpvote() {
        this.props.destroyUpvote(this.state.voteId);
        this.setState({
            alreadyVoted: false,
            voteId: ''
        })
    }

    handleCreateUpvote() {
        this.props.createUpvote({author_id: this.props.currentUser.id, answer_id: this.props.answer.id}).then(
            (upvote) => {
                this.setState({
                    alreadyVoted: true,
                    voteId: upvote.upvote.id
                })
            }
        );
    }

    upVoteCounter() {
        if (this.props.upVoteCount.length > 0) {
        let count = 0;
        this.props.upVoteCount.forEach(vote => { if (vote.answer_id === this.props.answer.id) count += 1; })
        return count;
    }
        else { return 0 }
    }

    renderVoteButton() {
        this.state.alreadyVoted = false;
        Object.values(this.props.upvotes).forEach(upvote => {
            if (upvote.author_id === this.props.currentUser.id && upvote.answer_id === this.props.answer.id) {
                this.state.alreadyVoted = true;
            }
        })
        if (this.state.alreadyVoted) {
            this.state.upvotes
            return (<div>
                        {/* <div>You already voted!</div> */}
                        <div className="upvoted-button" onClick={this.handleDestroyUpvote}>
                            {/* <img src="https://i.imgur.com/SYOBXMd.png" height="18px" width="20px" alt="upvoted"/> */}
                            <img className="arrow-img" src="https://i.imgur.com/DkJAg3S.png" height="18px" width="20px" alt="upvoted"/>
                            Upvote • {this.upVoteCounter()}
                        </div>
                    </div>
            )
        } else {
            return (<div className="upvoted-button" onClick={this.handleCreateUpvote}>
                        <img src="https://i.imgur.com/SqBaIR4.png" height="18px" width="20px" alt="upvote"/>
                        <p>Upvote • {this.upVoteCounter()}</p>
                    </div>
            )
        }
    }

    render() {
        let tempName;
        (typeof this.props.author === 'undefined') ? tempName = this.props.currentUser.username : tempName = this.props.author.username;
        let createdAt = new Date(this.props.answer.created_at).toString();
        createdAt = createdAt.split(' ').slice(1,4).join(' ')
        let color = generateColor(tempName);
        return (
            <div className="answer-detail">
                {/* <div className="answer-profile-row"><img className="profile-icon" src={userImg}/>{tempName}</div> */}
                <div className="answer-profile-row">
                    <div className="profile-icon-circle" style={{ background: color }} >{tempName[0].toUpperCase()}</div>{tempName}
                </div>
                <div className="answer-date">Answered {createdAt}</div>
                <div className="answer-body" dangerouslySetInnerHTML={{__html: this.props.answer.body}}></div>
                {/* <div className="answer-body" dangerouslySetInnerHTML={{__html: this.renderBody(this.props.answer.body)}}></div> */}
                {this.renderVoteButton()}
                <CommentIndexContainer key={this.props.answer.id} answer={this.props.answer}/>
            </div>
        )
    }
}

export default AnswerDetail;