import React from "react"
import { Link } from "react-router-dom"
import AnswerDetail from "./answer_detail"
import { selectAnswers, selectAuthors } from "../../reducers/selectors";


class QuestionShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            answerClicked: false
        }
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.openAnswerForm = this.openAnswerForm.bind(this);
        this.renderAnswerForm = this.renderAnswerForm.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId)
    }

    handleAnswer(e) {
        e.preventDefault();
        this.props.createAnswer({body: this.state.body, author_id: this.props.currentUser.id, question_id: this.props.question.id}).then(
        window.setTimeout(function() {window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })}.bind(this), 125)
        ).then(this.setState({body: ''}))
    }

    handleInput(e) {
        this.setState({body: e.currentTarget.value})
    }

    openAnswerForm(e) {
        this.setState({answerClicked: true})
    }

    renderAnswerForm(e) {
        if (this.state.answerClicked) {
        return (
            <form className="answer-form">
                <div className="answer-username">
                    <img className="profile-icon" src={userImg}/>
                    {this.props.currentUser.username}
                </div>
                <div>
                    <textarea className="answer-textarea" placeholder={'Write your answer'} value={this.state.body} onChange={this.handleInput}/>
                </div>
                <button onClick={this.handleAnswer}>Answer</button>
            </form>
            )
        } else {
            return <div></div>
        }
    }

    render() {
        let questionAnswers = Object.values(this.props.fullAnswers);
        questionAnswers = questionAnswers.filter(obj => obj.question_id === this.props.question.id);
        let tempTitle = '';
        if (typeof this.props.question !== 'undefined') tempTitle = this.props.question.title
        return(
            <div className="question-show-page">
                <div className="question-column">
                    <div className="question-title">{tempTitle}</div>
                    <div className="question-answer-button" onClick={this.openAnswerForm}>
                        <i className="far fa-edit fa-sm"></i>
                        Answer
                    </div>
                    {this.renderAnswerForm()}
                    <h5>{questionAnswers.length}</h5>
                    {questionAnswers.map(answer => (
                        <AnswerDetail answer={answer} author={this.props.authors[answer.author_id]} key={answer.id}/>
                    ))}
                    <button onClick={this.handleDelete}></button>
                    <Link to="/">To Index</Link>
                </div>
            </div>
        )
    }
}

export default QuestionShow
