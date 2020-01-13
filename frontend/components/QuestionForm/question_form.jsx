import React, { useImperativeHandle } from "react"

class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            author_id: this.props.currentUser.id
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createQuestion(this.state).then(this.props.closeModal());
    }

    handleInput(kind) {
        return (e) => {
            this.setState({[kind]: e.currentTarget.value})
        }
    }

    render() {
        return (
            <div className="question-form">
                <nav className="question-form-header">
                    Add Question
                    <p className="question-form-x" onClick={this.props.closeModal}>X</p>
                </nav>
                <ul className="hint-box"><p>Tips on getting good answers quickly</p>
                    <li><i className="far fa-check-circle"></i><p>Make sure your question hasn't been asked already</p></li>
                    <li><i className="far fa-check-circle"></i><p>Keep your question short and to the point</p></li>
                    <li><i className="far fa-check-circle"></i><p>Double-check grammar and spelling</p></li>
                </ul>
                <p className="question-form-profile-row"><img className="profile-icon" src={userImg}/>{this.props.currentUser.username} asked</p>
                <input placeholder={'Start your question with "What", "How", "Why", etc.'} className="question-form-input" type="text" onChange={this.handleInput('title')} value={this.state.title}/>
                <input placeholder={'Include a link that gives context'} className="question-form-body"type="text" onChange={this.handleInput('body')} value={this.state.body}/>
                <div className="question-form-submit-row">
                    <div className="question-form-cancel" onClick={this.props.closeModal}>Cancel</div>
                    <div className="question-form-submit"onClick={this.handleSubmit}>Add Question</div>
                </div>
            </div>
        )
    }
}

export default QuestionForm