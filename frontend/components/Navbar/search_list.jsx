import React from "react"
import { withRouter, Link } from "react-router-dom"


class SearchList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // results: []
        }
        this.populateList = this.populateList.bind(this);
    }

    populateList() {
        let questions = Object.values(this.props.questions)
        let results = [];
        let searchString = this.props.searchQuery.toLowerCase()
        questions.forEach(question => {
            let title = question.title.toLowerCase()
            if (results.length < 6 && title.includes(searchString) && searchString !== ' ') {
                results.push(questions)
            }
        })
        return results
    }

    render() {
        console.log(this.populateList());
        return (
            <div className="search-list">
                
            </div>
        )
    }
}

export default SearchList;