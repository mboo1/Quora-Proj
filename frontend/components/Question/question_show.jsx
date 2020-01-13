import React from "react"
import { Link } from "react-router-dom"

class QuestionShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question : {
                title: ''
            }
        }
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId)
    }

    render() {
        if (typeof this.props.question !== 'undefined') this.state.question = this.props.question
        return(
            <div>
                <h4>{this.state.question.title}</h4>
                <button onClick={this.handleDelete}></button>
                <Link to="/">To Index</Link>
            </div>
        )
    }
}

export default QuestionShow

    // checkState() {
    //     if (typeof this.props.question !== 'undefined') {
    //         return this.props.question.title
    //     } else {
    //         return 'ok'
    //     }
    // }