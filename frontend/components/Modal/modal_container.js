import {connect} from "react-redux"
import { closeModal } from "../../actions/modal_actions"
import Modal from "./modal"

const mapStateToProps = state => ({
    modalState: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)