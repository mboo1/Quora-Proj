import React from "react";
import { Link } from "react-router-dom"

class IndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className="Index-Item">
                <Link to= {`/questions/${this.props.question.id}`}>{this.props.question.title}</Link>
                <p>{this.props.question.body}</p>
            </li>
        )
    }
}

export default IndexItem