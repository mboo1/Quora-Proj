import React from "react"
import { Link } from "react-router-dom"

class QuestionShow extends React.Component {
    constructor(props) {
        super(props)
        this.checkState = this.checkState.bind(this)
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId)
    }

    checkState() {
        if (typeof this.props.question !== 'undefined') {
            return this.props.question.title
        } else {
            return 'ok'
        }
    }

    render() {
        return(
            <div>
                <h4>{this.checkState()}</h4>
                <button onClick={this.handleDelete}></button>
                <Link to="/">To Index</Link>
            </div>
        )
    }
}

export default QuestionShow