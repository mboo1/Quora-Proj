import React from "react"
import IndexItem from "./index_item"
import IndexItemContainer from "./index_item_container"
import TopicsColumnContainer from "../TopicsColumn/topics_column_container"
import generateColor from "../../util/color_generator"

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
                    <div className="question-prompt" onClick={this.props.openModal}>
                        <div className="prompt-profile-row">
                            <p className="profile-icon-circle" style={{ background: generateColor(this.props.currentUser.username) }} >{this.props.currentUser.username[0].toUpperCase()}</p>
                            {this.props.currentUser.username}
                        </div>
                        <div className="prompt-text">
                            What is your question?
                        </div>
                    </div>
                    <ul>
                        {this.props.questions.map(question => (
                            <IndexItemContainer question={question} key={question.id} author={this.props.users[question.author_id]} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Index