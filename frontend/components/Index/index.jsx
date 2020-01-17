import React from "react"
import IndexItem from "./index_item"
// import IndexItemContainer from "./index_item"
import TopicsColumnContainer from "../TopicsColumn/topics_column_container"

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers().then(this.props.fetchQuestions(''))
    }

    render () {
        return (
            <div className="main-row">
                    <TopicsColumnContainer />
                <div className="index-box">
                    <ul>
                        {this.props.questions.map(question => (
                            <IndexItem question={question} key={question.id} author={this.props.users[question.author_id]} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Index