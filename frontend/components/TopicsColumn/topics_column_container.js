import {connect} from "react-redux"
import TopicsColumn from "./topics_column"
import { fetchTopics } from '../../actions/topic_actions'

const mapStateToProps = state => ({
    topics: Object.values(state.entities.topics)
})

const mapDispatchToProps = dispatch => ({
    fetchTopics: () => dispatch(fetchTopics())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicsColumn)