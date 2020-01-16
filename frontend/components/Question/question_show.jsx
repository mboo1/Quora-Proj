import React from "react"
import { Link } from "react-router-dom"
import AnswerDetail from "./answer_detail"
import { selectAnswers, selectAuthors } from "../../reducers/selectors";
import OtherQuestionsColumnContainer from "./other_questions_column_container"


class QuestionShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            answerClicked: false,
            tempTopics: []
        }
        this.keyCount = 0;

        this.getKey = this.getKey.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.openAnswerForm = this.openAnswerForm.bind(this);
        this.renderAnswerForm = this.renderAnswerForm.bind(this);
        this.renderTopics = this.renderTopics.bind(this);
    }

    getKey(){
        return this.keyCount++;
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId).then(this.props.fetchTopics())
    }

    componentDidUpdate() {
        if (!this.props.question || !this.props.question.authorIds) {
            this.props.fetchQuestion(this.props.match.params.questionId)
        }
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
                <textarea className="answer-textarea" placeholder={'Write your answer'} value={this.state.body} onChange={this.handleInput}/>
                <div className="answer-submit-row">
                    <button className="answer-submit-button" onClick={this.handleAnswer}>Submit</button>
                </div>
            </form>
            )
        } else {
            return <div></div>
        }
    }

    renderTopics() {
        if (typeof this.state.tempTopics === 'undefined') {
            return <div></div>
        } else {
            return (
                this.state.tempTopics.map((topicName, idx) => 
                    <div key={Math.random()} ><Link to= {`/topics/${topicName}`}>{topicName}</Link></div>
                )
            )
        }
    }

    render() {
        let questionAnswers = Object.values(this.props.fullAnswers);
        questionAnswers = questionAnswers.filter(obj => obj.question_id === this.props.question.id);
        let tempTitle = '';
        if (typeof this.props.question !== 'undefined') tempTitle = this.props.question.title
        if (typeof this.props.question !== 'undefined') this.state.tempTopics = this.props.question.topicNames
        return(
            <div className="question-show-page">
                <div className="question-column">
                    <div>Topics Row</div>
                    {this.renderTopics()}
                    <div className="question-title">{tempTitle}</div>
                    <div className="question-answer-button" onClick={this.openAnswerForm}>
                        <i className="far fa-edit fa-sm"></i>
                        Answer
                    </div>
                    {this.renderAnswerForm()}
                    <div className="answer-count">{questionAnswers.length} Answers</div>
                    {questionAnswers.map(answer => (
                        <AnswerDetail answer={answer} author={this.props.authors[answer.author_id]} key={Math.random()}/>
                    ))}
                </div>
                <OtherQuestionsColumnContainer />
            </div>
        )
    }
}

export default QuestionShow
