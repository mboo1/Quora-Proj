import React from "react"
import { Link } from "react-router-dom"
import AnswerDetail from "./answer_detail"
import { selectAnswers, selectAuthors } from "../../reducers/selectors";


class QuestionShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleAnswer = this.handleAnswer.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    handleAnswer(e) {
        e.preventDefault();
        this.props.createAnswer({body: 'krak', author_id: 51, question_id: 31}).then(
        window.setTimeout(function() {window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })}.bind(this), 125)
        )
    }

    render() {
        let questionAnswers = Object.values(this.props.fullAnswers);
        questionAnswers = questionAnswers.filter(obj => obj.question_id === this.props.question.id);
        let tempTitle = '';
        if (typeof this.props.question !== 'undefined') tempTitle = this.props.question.title
        return(
            <div>
                <form>
                    <textarea>
                    </textarea>
                    <button onClick={this.handleAnswer}>Answer</button>
                </form>
                <h4>{tempTitle}</h4>
                <h5>{questionAnswers.length}</h5>
                {questionAnswers.map(answer => (
                    <AnswerDetail answer={answer} author={this.props.authors[answer.author_id]} key={answer.id}/>
                ))}
                <button onClick={this.handleDelete}></button>
                <Link to="/">To Index</Link>
            </div>
        )
    }
}

export default QuestionShow
