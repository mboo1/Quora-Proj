import React from "react"


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
                    <div key={topic.id}>{topic.title}</div>
                ))}
            </div>
        )
    }
}

export default TopicsColumn