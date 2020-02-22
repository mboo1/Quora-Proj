import React from "react"

class EditTopicsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedTopics: [],
            initialState: true,
            originalTopics: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleClick(e) {
        let id = parseInt(e.currentTarget.id, 10)
        if (this.state.checkedTopics.includes(id)) {
            for( let i = 0; i < this.state.checkedTopics.length; i++){ 
                if ( this.state.checkedTopics[i] === id) {
                  this.state.checkedTopics.splice(i, 1); 
                }
             }
        } else {
            this.state.checkedTopics.push(id)
        }
        console.log(this.state.checkedTopics)
    }

    handleUpdate(e) {
        e.preventDefault()
        const question = {id: this.props.question.id, topic_ids: this.state.checkedTopics}
        this.props.updateQuestion(question).then(this.props.closeModal());
    }

    render() {
        let topicsArr = Object.values(this.props.topics)
        if (this.state.initialState) {
            topicsArr.forEach(topic => {
                if (this.props.question.topicNames.includes(topic.title)) {
                    this.state.checkedTopics.push(topic.id)
                    this.state.originalTopics.push(topic.id)
                }
            })
        this.state.initialState = false;
        }
        return (
            <div className="edit-topics-form">
                <div className="edit-question-title">{this.props.question.title}</div>
                <div className="topics-intro">Add topics that best describe your question</div>
                <div className="topics-list-message">
                    <p className="topic-number">1</p>Verify that these topics describe your question
                </div>
                <div className="topics-list">
                {topicsArr.map(topic => {
                    if (this.state.originalTopics.includes(topic.id)) { 
                    return (<label key={topic.id} className="topic-selector">
                                <input onChange={this.handleClick}type="checkbox" id={topic.id} defaultChecked={this.state.checkedTopics.includes(topic.id)}/>
                                {topic.title}
                            </label>
                        )
                    }
                }
                )}
                </div>
                <div className="topics-list-message">
                    <p className="topic-number">2</p>Select any topics that also describe your question
                </div>
                <div className="topics-list">
                {topicsArr.map(topic => {
                    if (!this.state.originalTopics.includes(topic.id)) { 
                    return (<label key={topic.id} className="topic-selector">
                                <input onChange={this.handleClick}type="checkbox" id={topic.id} defaultChecked={this.state.checkedTopics.includes(topic.id)}/>
                                {topic.title}
                            </label>
                            )
                        }
                    }
                )}
                </div>
                <div className="topics-update-row">
                    <p className="topic-cancel" onClick={this.props.closeModal}>Cancel</p>
                    <div className="update-topics-button" onClick={this.handleUpdate}>Confirm Topics</div>
                </div>
            </div>
        )
    }
}

export default EditTopicsForm