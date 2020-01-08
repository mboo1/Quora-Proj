import React from "react"

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.component = this.component.bind(this);
    }

    component() {
        if (this.props.modalState === null) {
            return null
        } else {
            return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    Modal Boy
                </div>
            </div>
            )
        }
    }

    render() {
        console.log(this.props)
        return (
            this.component()
        )
    }
}

export default Modal