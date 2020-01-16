import React from "react"
import IndexItem from "../Index/index_item"
// import IndexItemContainer from "./index_item"
import TopicsColumnContainer from "../TopicsColumn/topics_column_container"

class TopicIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topicQuestionIds: [],
            topicQuestions: [],
            loaded: false
        }
    }

    componentDidMount() {
        this.props.fetchUsers().then(this.props.fetchQuestions(this.props.match.params.topicName))
    }

    componentDidUpdate() {
        this.state.topicQuestions = []
    }


    render () {
        if (Object.entries(this.props.topics).length > 0) {
            let tempObj = Object.values(this.props.topics)
            for (let i = 0; i < tempObj.length; i++) {
                if (tempObj[i].title === this.props.match.params.topicName) {
                    this.state.topicQuestionIds = tempObj[i].questionIds
                }
            }
            for (let i = 0; i < this.props.questions.length; i++) {
                if (this.state.topicQuestionIds.includes(this.props.questions[i].id)) {
                    this.state.topicQuestions.push(this.props.questions[i])
                }
            }
            console.log(this.state.topicQuestions)
        }
        return (
            <div className = "main-row">
                <div>
                    <TopicsColumnContainer />
                </div>
                <div className="test-topic-head">TopicIndex</div>
                <div className="index-box">
                    <ul>
                        {this.state.topicQuestions.map(question => (
                        <IndexItem question={question} key={question.id} author={this.props.users[question.author_id]} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopicIndex