import React from "react"
import IndexItem from "./index_item"

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchQuestions()
    }

    render () {
        return (
            <div className="index-box">
                <ul>
                    {this.props.questions.map(question => (
                        <IndexItem question={question} key={question.id} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Index