import React from 'react'
import Main from "./Main/main"
import LoginContainer from "./Login/login_container"
import {Route, Switch, Redirect, Link} from "react-router-dom";


class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.findPage = this.findPage.bind(this)
    }

    findPage() {
        if (typeof this.props.currentUser !== 'undefined') {
            return <Main />
        } else {
            return (
                <Switch>
                    <Route exact path="/" component={LoginContainer}/>
                    <Redirect from="*" to="/"/>
                </Switch>
            )
        }
    }



    render() {
        return (
            <div>
                {this.findPage()}
            </div>
        )
    }
}

export default Greeting