import React from "react"
import QuestionFormContainer from "../QuestionForm/question_form_container"

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
        } else if (this.props.modalState === 'topicForm') {
            return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div>Hi</div>
                </div>
            </div>
            )
        } else {
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