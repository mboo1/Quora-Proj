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
                <nav>Add Question</nav>
                <ul className="hint-box">Tips on getting good answers quickly
                    <li>Make sure your doggone question hasn't been asked already</li>
                    <li>Woof!  Watch your spelling and grammar!  Dogs are very particular.</li>
                    <li>Question must be by or about dogs, wolves, foxes, or other canids!</li>
                </ul>
                <p>{this.props.currentUser.username} is asking...</p>
                Title<input type="text" onChange={this.handleInput('title')} value={this.state.title}/>
                Body<input placeholder={'rooo'}type="text" onChange={this.handleInput('body')} value={this.state.body}/>
                <nav>
                    <button>Cancel</button>
                    <button onClick={this.handleSubmit}>Add Question</button>
                </nav>
            </div>
        )
    }
}

export default QuestionForm