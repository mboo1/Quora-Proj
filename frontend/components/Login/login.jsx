import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUsername: '',
            newEmail: '',
            newPassword: '',
            oldUsername: '',
            oldPassword: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.checkErrors = this.checkErrors.bind(this);
    }

    handleChange(kind) {
        return (e=>
            this.setState({[kind]: e.currentTarget.value})
        )
    }

    handleSignUp() {
        let user = {username: this.state.newUsername, email: this.state.newEmail, password: this.state.newPassword}
        this.props.signup(user)
    }

    handleSignIn() {
        let user = {username: this.state.oldUsername, password: this.state.oldPassword}
        this.props.login(user)
    }

    handleGuest() {
        let user
        // this.props.login({username: 'guestt', password: 'password'})
        this.setState({oldUsername: 'guest', oldPassword: 'password'}, () => {
            user = {username: this.state.oldUsername, password: this.state.oldPassword}
            this.props.login(user)
        })
    }

    checkErrors() {
        if (this.props.errors.length === 0) {
            return <h6 className="login-error-bar"></h6>
        } else {
            return (
                <h6 className="login-error-bar">{this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}</h6>
            )
        }
    }

    render() {
        
        return (
            <div>
                <div className="login-form-container">
                    <div className="greeting-box">
                        <div className="greeting-logo">
                            <img className="greeting" src = {logo} alt = "logo"></img>
                        </div>
                        <div className="intro-row">A place to share knowledge and better understand the world</div>
                        {this.checkErrors()}
                        <div className = "session-row">
                            {/* <form onSubmit={this.handleSignUp} className="session-form">Sign Up */}
                            <form className="signup-form">
                                <div className="login-div">Sign Up</div>
                                <label>
                                    <input placeholder={" Name"} className="session-input" type="text" value={this.state.newUsername} onChange={this.handleChange('newUsername')}/>
                                </label>
                                <label>
                                    <input placeholder={" Email"} className="session-input" type="text" value={this.state.newEmail} onChange={this.handleChange('newEmail')}/>
                                </label>
                                <label>
                                    <input placeholder={" Password"} className="session-input" type="password" value={this.state.newPassword} onChange={this.handleChange('newPassword')}/>
                                </label>
                                <button onClick={this.handleSignUp} className="submit-button">Sign Up</button>
                            </form>
                            {/* <form onSubmit= {this.handleSignIn} className="session-form">Login */}
                            <form className="login-form">
                                <div className="login-div">Login</div>
                                <input placeholder={" Name"}className="session-input" type="text" value={this.state.oldUsername} onChange={this.handleChange('oldUsername')}/>
                                <input placeholder={" Password"}className= "session-input" type="password" value={this.state.oldPassword} onChange={this.handleChange('oldPassword')}/>
                                <button onClick={this.handleSignIn} className="submit-button">Login</button>
                                <button onClick={this.handleGuest} className="submit-button">Guest Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login