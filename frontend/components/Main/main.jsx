import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import IndexContainer from "../Index/index_container"

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path = "/" component={IndexContainer} />
                </Switch>
            </div>

        )
    }
}

export default Main