import React from "react"

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            readyToRender: false
        }
        this.commentsArr = [];
    }

    componentDidMount() {
        Object.values(this.props.comments).forEach((comment) => {
            if (comment.answer_id === this.props.answer.id) this.commentsArr.push(comment)
        })
        this.setState({
            readyToRender: true
        })
    }

    render() {
        if (this.state.readyToRender) {
            return (
                <div>
                    <p>Comment Index</p>
                    {this.commentsArr.map(comment => (
                        <div>{comment.body}</div>
                    ))}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default CommentIndex