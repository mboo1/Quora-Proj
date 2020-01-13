import React from "react"
import IndexItem from "./index_item"
// import IndexItemContainer from "./index_item"

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers().then(this.props.fetchQuestions())
    }

    render () {
        return (
            <div className="index-box">
                <ul>
                    {this.props.questions.map(question => (
                        <IndexItem question={question} key={question.id} author={this.props.users[question.author_id]} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Index