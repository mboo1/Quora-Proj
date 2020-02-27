import React from "react";
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import generateColor from "../../util/color_generator";

class IndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authorName: 'xXx',
            topAnswer: 'No Answers Yet!',
            topAnswerAuthor: "none",
            profileColor: 'black',
            readyToRender: false,
            answerDate: 'nil'
        }
        this.sortQuestions = this.sortQuestions.bind(this);
        this.renderTopAnswer = this.renderTopAnswer.bind(this);
    }

    sortQuestions(answers) {
        if (typeof answers !== 'undefined' && answers.length > 1) {
            answers.sort((a, b) => (a.upvotes.length < b.upvotes.length) ? 1 : -1)
        }
    }

    componentDidMount() {
        let answers = Object.values(this.props.answers);
        answers = answers.filter(obj => obj.question_id === this.props.question.id);
        this.sortQuestions(answers);
        if (typeof answers[0] !== 'undefined') {
            let createdAt = new Date(answers[0].created_at).toString();
            createdAt = createdAt.split(' ').slice(1,4).join(' ')    
            this.setState({
                topAnswer: answers[0],
                topAnswerAuthor: this.props.users[answers[0].author_id],
                profileColor: generateColor(this.props.users[answers[0].author_id].username),
                answerDate: createdAt
            });
        }
        this.setState({
            readyToRender: true
        })
    }

    renderTopAnswer() {
        if (typeof this.state.topAnswer === 'string') {
            return (
                <div>{this.state.topAnswer}</div>
            )
        } else {
            return (
                <div className="answer-detail-i">
                <div className="answer-profile-row-i">
                    <div className="profile-icon-circle" style={{ background: this.state.profileColor }} >{this.state.topAnswerAuthor.username[0].toUpperCase()}</div>{this.state.topAnswerAuthor.username}
                </div>
                <div className="answer-date-i">Answered {this.state.answerDate}</div>
                <div className="answer-body-i" dangerouslySetInnerHTML={{__html: this.state.topAnswer.body}}></div>
            </div>
            )
        }
    }

    render() {
        if (typeof this.props.author !== 'undefined') {
            this.state.authorName = this.props.author.username
        }
        if (this.state.readyToRender) {
            return (
                <li className="index-item">
                    <p className="index-item-note">Answer · Recommended</p>
                    {/* <p>{this.state.authorName}</p> */}
                    <Link className="index-item-title"style={{ textDecoration: 'none' }} to= {`/questions/${this.props.question.id}`}>{this.props.question.title}</Link>
                    {this.renderTopAnswer()}
                </li>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default IndexItem