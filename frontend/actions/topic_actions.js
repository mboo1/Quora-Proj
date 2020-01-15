import * as topicApiUtil from "../util/topics_api_util"

export const RECEIVE_TOPICS = "RECEIVE_TOPICS"

const receiveTopics = (topics) => ({
    type: RECEIVE_TOPICS,
    topics: topics
})

export const fetchTopics = () => dispatch => (
    topicApiUtil.fetchTopics().then(topics => dispatch(receiveTopics(topics)))
)