import React from "react"
// import IndexItem from "../Index/index_item"
import IndexItemContainer from "../Index/index_item_container"
import TopicsColumnContainer from "../TopicsColumn/topics_column_container"

class TopicIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topicQuestionIds: [],
            topicQuestions: [],
            prevName: '',
            readyToRender: false
        }
    }

    componentDidMount() {
        this.props.fetchTopics().then(() => this.props.fetchUsers().then(() => this.props.fetchQuestions(this.props.match.params.topicName)).then(
            () =>
            this.setState({readyToRender:true})
        ))
        this.state.prevName = this.props.match.params.topicName
    }

    componentDidUpdate() {
        this.state.topicQuestions = [];
    }



    render () {
        if (this.state.prevName !== '' && this.state.prevName !== this.props.match.params.topicName) {
            this.props.fetchUsers().then(this.props.fetchQuestions(this.props.match.params.topicName))
            this.state.prevName = this.props.match.params.topicName
        }
        if (Object.entries(this.props.topics).length > 0) {
            let tempObj = Object.values(this.props.topics)
            for (let i = 0; i < tempObj.length; i++) {
                if (tempObj[i].title === this.props.match.params.topicName) {
                    this.state.topicQuestionIds = tempObj[i].questionIds
                }
            }
            // console.log(this.state.topicQuestions)
            for (let i = 0; i < this.props.questions.length; i++) {
                if (this.state.topicQuestionIds.includes(this.props.questions[i].id)) {
                    this.state.topicQuestions.push(this.props.questions[i])
                }
            }
        }
        if (this.state.readyToRender) {
        return (
            <div className = "main-row">
                <TopicsColumnContainer />
                {/* <div className="test-topic-head">TopicIndex</div> */}
                <div className="index-box">
                    <div className="index-topic-title">Questions by Topic: {this.props.match.params.topicName}</div>
                    <ul>
                        {this.state.topicQuestions.map(question => (
                        <IndexItemContainer question={question} key={Math.random()} author={this.props.users[question.author_id]} />
                        ))}
                    </ul>
                </div>
            </div>
        )
                        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default TopicIndex