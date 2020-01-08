import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import IndexContainer from "../Index/index_container"
import NavbarContainer from "../Navbar/navbar_container"
import ModalContainer from "../Modal/modal_container"

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className= "quora-page">
                <ModalContainer />
                <NavbarContainer />
                    <div className="main-row">
                        <Switch>
                            <Route path = "/" component={IndexContainer} />
                        </Switch>
                    </div>
            </div>

        )
    }
}

export default Main