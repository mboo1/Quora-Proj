import React from "react"

class EditTopicsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedTopics: [],
            initialState: true
        }
        this.handleClick = this.handleClick.bind(this)
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

    render() {
        let topicsArr = Object.values(this.props.topics)
        if (this.state.initialState) {
            topicsArr.forEach(topic => {
                if (this.props.question.topicNames.includes(topic.title)) {
                    this.state.checkedTopics.push(topic.id)
                }
            })
        this.state.initialState = false;
        }
        return (
            <div className="edit-topics-form">
                <h6>Edit Topics</h6>
                {topicsArr.map(topic => (
                    <label key={topic.id}>{topic.title}
                        <input onChange={this.handleClick}type="checkbox" id={topic.id} defaultChecked={this.state.checkedTopics.includes(topic.id)}/>
                    </label>
                ))}
            </div>
        )
    }
}

export default EditTopicsForm