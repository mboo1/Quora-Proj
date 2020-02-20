import React from "react";
import { Link } from "react-router-dom";
import AnswerDetail from "./answer_detail";
import AnswerDetailContainer from "./answer_detail_container";
import { selectAnswers, selectAuthors } from "../../reducers/selectors";
import OtherQuestionsColumnContainer from "./other_questions_column_container";
import ReactQuill from 'react-quill';



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
        this.handleEdit = this.handleEdit.bind(this);
        this.modules = {
            toolbar: [
                [{ font: [] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['clean'], [], [],
                ['link', 'image', 'video']
            ]
        };
        this.formats = [
            'font',
            'bold', 'italic', 'underline', 'strike',
            'list', 'bullet', 'indent',
            'link', 'image', 'video'
        ];
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
        // this.setState({body: e.currentTarget.value})
        this.setState({body: e});
    }

    openAnswerForm(e) {
        this.setState({answerClicked: true})
    }

    handleEdit(e) {
        e.preventDefault()
        this.props.openModal({name: 'topicForm', question: this.props.question, topics: this.props.topics, updateQuestion: this.props.updateQuestion})
    }

    renderAnswerForm(e) {
        if (this.state.answerClicked) {
        return (
            <form className="answer-form" >
                    <div className="answer-input-container">
                        <ReactQuill
                            height='500'
                            theme={'snow'}
                            value={this.state.body}
                            bounds={'.app'}
                            modules={this.modules}
                            formats={this.formats}
                            placeholder="Write your answer"
                            onChange={this.handleInput}>
                        </ReactQuill>
                        <button onClick={this.handleAnswer}>ceeeee</button>
                    </div>
                {/* <div className="answer-username">
                    <img className="profile-icon" src={userImg}/>
                    {this.props.currentUser.username}
                </div>
                <textarea className="answer-textarea" placeholder={'Write your answer'} value={this.state.body} onChange={this.handleInput}/>
                <div className="answer-submit-row">
                    <button className="answer-submit-button" onClick={this.handleAnswer}>Submit</button>
                </div> */}
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
                    <button onClick={this.handleEdit}>Edit</button>
                    {this.renderTopics()}
                    <div className="question-title">{tempTitle}</div>
                    <p>Hiii</p>

                    <div className="question-answer-button" onClick={this.openAnswerForm}>
                        <i className="far fa-edit fa-sm"></i>
                        Answer
                    </div>
                    {this.renderAnswerForm()}
                    <div className="answer-count">{questionAnswers.length} Answers</div>
                    {questionAnswers.map(answer => (
                        <AnswerDetailContainer upvotes={this.props.upvotes} answer={answer} author={this.props.authors[answer.author_id]} key={Math.random()}/>
                    ))}
                </div>
                {/* <OtherQuestionsColumnContainer currId={this.props.match.params.questionId}/> */}
            </div>
        )
    }
}

export default QuestionShow
