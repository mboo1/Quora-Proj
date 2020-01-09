import React from "react"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <nav className="navbar-row">
                <p>Quora</p>
                <p onClick={this.props.openModal}>Add Question</p>
                <p onClick ={this.props.logout}>Logout</p>
            </nav>
        )
    }
}

export default Navbar