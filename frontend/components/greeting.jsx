import React from 'react'
import Main from "./Main/main"
import LoginContainer from "./Login/login_container"

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.findPage = this.findPage.bind(this)
    }

    findPage() {
        if (this.props.currentUser !== undefined) {
            return <Main />
        } else {
            return <LoginContainer />
        }
    }



    render() {
        console.log(this.props.currentUser)
        return (
            <div>
                {this.findPage()}
            </div>
        )
    }
}

export default Greeting