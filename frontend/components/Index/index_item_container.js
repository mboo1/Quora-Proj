import { connect } from "react-redux";
import IndexItem from "./index_item";

const mapStateToProps = state => ({
    answers: state.entities.answers,
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(IndexItem)