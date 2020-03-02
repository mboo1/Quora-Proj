import React from "react";
import {Route, Switch, Link, Redirect } from "react-router-dom";
import IndexContainer from "../Index/index_container"
import NavbarContainer from "../Navbar/navbar_container"
import ModalContainer from "../Modal/modal_container"
import QuestionShowContainer from "../Question/question_show_container"
import TopicIndexContainer from "../TopicIndex/topic_index_container"
// import QuillEditor from "../Experiment/experiment"
import ExperimentContainer from "../Experiment/experiment_container"

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className= "quora-page">
                <ModalContainer />
                <NavbarContainer />
                    <div>
                        <Switch>
                            <Route exact path = "/questions/:questionId" component={QuestionShowContainer} />
                            <Route exact path = "/topics/:topicName" component={TopicIndexContainer} />
                            <Route exact path = "/" component={IndexContainer} />
                            {/* <Route exact path = "/quill" component = {ExperimentContainer} /> */}
                            <Redirect from="*" to="/"/>
                        </Switch>
                    </div>
            </div>

        )
    }
}

export default Main