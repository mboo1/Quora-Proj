import React from "react"

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        console.log(this.props.currentUser.username)
        return (
            <div>
                Index
            </div>
        )
    }
}

export default Index