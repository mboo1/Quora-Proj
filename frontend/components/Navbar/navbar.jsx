import React from "react"
import { withRouter } from "react-router-dom"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        this.props.logout();
        if (this.props.history.location.pathname !== "/") {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <nav className="navbar-row">
                <p>Quora</p>
                <p onClick={this.props.openModal}>Add Question</p>
                <p onClick ={this.handleLogout}>Logout</p>
            </nav>
        )
    }
}

export default withRouter(Navbar)