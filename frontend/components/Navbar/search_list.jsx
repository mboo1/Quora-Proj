import React from "react"
import { withRouter, Link } from "react-router-dom"


class SearchList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            renderAddQuestion: false
        }
        this.populateList = this.populateList.bind(this);
        this.questionButton = this.questionButton.bind(this);
        this.questionAction = this.questionAction.bind(this);
        this.searchHeader = this.searchHeader.bind(this);
        this.clickSearchLink = this.clickSearchLink.bind(this);
    }

    populateList() {
        let questions = Object.values(this.props.questions)
        let results = [];
        let searchString = this.props.searchQuery.toLowerCase()
        questions.forEach(question => {
            let title = question.title.toLowerCase()
            if (results.length < 6 && title.includes(searchString) && searchString !== ' ' && searchString !== '') {
                results.push(question)
            }
        })
        if (results.length > 0 || this.props.searchQuery.length > 1) {
            this.state.renderAddQuestion = true;
        } else {
            this.state.renderAddQuestion = false;
        }
        return results
    }

    questionAction() {
        this.props.closeSearch();
        this.props.openQuestion();
    }

    clickSearchLink() {
        this.props.closeModal();
        this.props.closeSearch()
    }

    questionButton() {
        if (this.state.renderAddQuestion) return (
            <div className="search-item-question" onClick={this.questionAction}>
                <p className="search-text">+ Add New Question</p>
            </div>
        )
        return null
    }

    searchHeader() {
        if (this.state.renderAddQuestion) return (
            <div className="search-item">
                <p className="search-text">
                    <i className="fa fa-search"></i>
                    Search:    
                    <b>{this.props.searchQuery}</b>
                </p>
            </div>
        )
        return null
    }

    render() {
        console.log(this.props)
        let rez = this.populateList();
        return (
            <div className="search-list">
                {this.searchHeader()}
                {rez.map(question => {
                    let briefTitle = question.title;
                    if (briefTitle.length > 30) briefTitle = briefTitle.slice(0, 20)
                    return (
                        // <div className="search-item" key={question.id}>
                        //     <Link className="search-text" to= {`/questions/${question.id}`} >{briefTitle}</Link>
                        //     <p>></p>
                        // </div>

                        <Link className="search-item" key={question.id} to= {`/questions/${question.id}`} onClick={this.clickSearchLink}>
                            <p className="search-text">{briefTitle}</p>
                            <p>></p>
                        </Link>
                    )
                })}
                {this.questionButton()}
            </div>
        )
    }
}

export default SearchList;