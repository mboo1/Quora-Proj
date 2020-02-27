import React from "react";
import { withRouter, Link } from "react-router-dom";
import SearchList from "./search_list";
import generateColor from "../../util/color_generator";

let timer;

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: '',
            searchClicked: false,
            readyToRender: true
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.renderSearchList = this.renderSearchList.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
    }

    handleLogout() {
        this.props.logout();
        if (this.props.history.location.pathname !== "/") {
            this.props.history.push("/");
        }
    }

    handleInput(e) {
        clearTimeout(timer);
        this.setState({
            searchQuery: e.currentTarget.value
        })
        timer = setTimeout(() => {
            this.handleSearch();
        }, 100)
    }

    handleSearch(e) {
        this.props.searchQuestions(this.state.searchQuery);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }

    renderSearchList() {
        if (this.state.searchClicked && this.state.searchQuery.length > 0) {
            return (
                <SearchList questions={this.props.questions} searchQuery={this.state.searchQuery} openQuestion={this.props.openModal} closeModal={this.props.closeModal} closeSearch={this.closeSearch}/>
            )
        } else {
            return null
        }
    }

    handleClick() {
        this.setState({
            searchClicked: true
        })
        this.props.openSearchModal();
    }

    closeSearch() {
        // console.log(this.state.searchClicked)
        this.setState({
            searchClicked: false
        })
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                searchClicked: false
            })
        }
    }

    render() {
        return (
            <nav className="navbar-row">
                <Link to="/"><img className="navbar-item" src = {logo} alt = "logo"></img></Link>
                <Link style={{ textDecoration: 'none' }} to="/"><div className="navbar-item"><i className="fas fa-book fa-2x"></i>Home</div></Link>
                <Link style={{ textDecoration: 'none' }} to="/"><div className="navbar-item"><i className="far fa-edit fa-2x"></i>Answer</div></Link>
                <Link style={{ textDecoration: 'none' }} to="/"><div className="navbar-item"><i className="fas fa-users fa-2x"></i>Spaces</div></Link>
                <Link style={{ textDecoration: 'none' }} to="/"><div className="navbar-item"><i className="far fa-bell fa-2x"></i>Notifications</div></Link>
                <div ref={this.setWrapperRef} className="search-container">
                    <i className="fa fa-search"></i>
                    {/* <form onSubmit={this.handleSearch}> */}
                    <div className="search-bar">
                        <input className="nav-search" placeholder="Search Quora" type="text" value={this.state.searchQuery} onChange={this.handleInput} onClick = {this.handleClick}/>

                    </div>
                    {/* </form> */}
                    {this.renderSearchList()}

                </div>
                <div className="profile-display">
                    <p className="navbar-icon-circle" style={{ background: generateColor(this.props.currentUser.username) }} onClick={this.handleLogout}>{this.props.currentUser.username[0].toUpperCase()}</p>
                </div>
                {/* <img className="profile-icon" src={userImg} onClick={this.handleLogout} /> */}
                <p className="question-button" onClick={this.props.openModal}>Add Question</p>

            </nav>
        )
    }
}

export default withRouter(Navbar)