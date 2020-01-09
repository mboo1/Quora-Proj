import React from "react"

class QuestionShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId)
    }

    render() {
        
        return(
            <div>Question Show</div>
        )
    }
}

export default QuestionShow