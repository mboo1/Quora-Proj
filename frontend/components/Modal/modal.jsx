import React from "react"
import QuestionFormContainer from "../QuestionForm/question_form_container"
import EditTopicsForm from "../EditTopicsForm/edit_topics_form"

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.component = this.component.bind(this);
    }

    component() {
        if (this.props.modalState === null) {
            return null
        } else if (this.props.modalState === 'questionForm') {
            return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <QuestionFormContainer />
                </div>
            </div>
            )
        } else if (this.props.modalState.name === 'topicForm') {
            return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <EditTopicsForm question={this.props.modalState.question} topics={this.props.modalState.topics} updateQuestion={this.props.modalState.updateQuestion} closeModal={this.props.closeModal} />
                </div>
            </div>
            )
        } else if (this.props.modalState === 'searchBar') {
            return (
            <div className="modal-background" onClick={this.props.closeModal}>
                {/* <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <EditTopicsForm question={this.props.modalState.question} topics={this.props.modalState.topics} updateQuestion={this.props.modalState.updateQuestion} />
                </div> */}
            </div>
            )
        } 
        else {
            return null
        }
    }

    render() {
        return (
            this.component()
        )
    }
}

export default Modal