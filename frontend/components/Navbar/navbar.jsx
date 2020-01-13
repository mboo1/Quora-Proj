import React from "react"
import { withRouter, Link } from "react-router-dom"

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
                <Link to="/"><img className="navbar-item" src = {logo} alt = "logo"></img></Link>
                <Link style={{ textDecoration: 'none' }} to="/"><div className="navbar-item"><i className="fas fa-book fa-2x"></i>Home</div></Link>
                <Link style={{ textDecoration: 'none' }} to="/"><div className="navbar-item"><i className="far fa-edit fa-2x"></i>Answer</div></Link>
                <Link style={{ textDecoration: 'none' }} to="/"><div className="navbar-item"><i className="fas fa-users fa-2x"></i>Spaces</div></Link>
                <Link style={{ textDecoration: 'none' }} to="/"><div className="navbar-item"><i className="far fa-bell fa-2x"></i>Notifications</div></Link>
                <div className="search-container">
                    <i className="fa fa-search"></i>
                    <input className="nav-search" placeholder="Search Quora" type="text"/>
                </div>
                <img className="profile-icon" src={userImg} onClick={this.handleLogout} />
                <p className="question-button" onClick={this.props.openModal}>Add Question</p>
            </nav>
        )
    }
}

export default withRouter(Navbar)