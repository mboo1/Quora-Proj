import React from "react";


class IndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className="Index-Item">
                <p>{this.props.question.title}</p>
                <p>{this.props.question.body}</p>
            </li>
        )
    }
}

export default IndexItem