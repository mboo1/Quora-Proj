import React from "react";
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"

class IndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authorName: 'xXx'
        }
    }

    render() {
        if (typeof this.props.author !== 'undefined') {
            this.state.authorName = this.props.author.username
        }
        return (
            <li className="index-item">
                <p >Answer · Recommended</p>
                <p>{this.state.authorName}</p>
                <Link to= {`/questions/${this.props.question.id}`}>{this.props.question.title}</Link>
            </li>
        )
    }
}

export default IndexItem