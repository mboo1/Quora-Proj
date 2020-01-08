import React from "react"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <nav className="navbar-row">
                <p>Quora</p>
                <p onClick={this.props.openModal}>Dogs</p>
            </nav>
        )
    }
}

export default Navbar