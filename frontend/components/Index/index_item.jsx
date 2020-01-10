import React from "react";
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"

class IndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className="index-item">
                <p >Answer · Recommended</p>
                <Link to= {`/questions/${this.props.question.id}`}>{this.props.question.title}</Link>
                <p>{this.props.question.body}</p>
            </li>
        )
    }
}

export default IndexItem