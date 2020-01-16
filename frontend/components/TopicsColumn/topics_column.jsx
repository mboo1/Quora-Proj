import React from "react"
import { Link } from "react-router-dom";


class TopicsColumn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.props.fetchTopics().then(this.setState({loaded: true}))
    }

    render() {
        return (
            <div>
                {this.props.topics.map(topic => (
                    // <Link to= {`/questions/${this.props.question.id}`}>{this.props.question.title}</Link>
                    <Link key={topic.id} to= {`/topics/${topic.title}`}>{topic.title}</Link>
                    // <div key={topic.id}>{topic.title}</div>
                ))}
            </div>
        )
    }
}

export default TopicsColumn