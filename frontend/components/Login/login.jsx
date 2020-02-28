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

    handleSignUp(e) {
        e.preventDefault();
        let user = {username: this.state.newUsername, email: this.state.newEmail, password: this.state.newPassword}
        this.props.signup(user)
    }

    handleSignIn(e) {
        e.preventDefault();
        let user = {username: this.state.oldUsername, password: this.state.oldPassword}
        this.props.login(user)
    }

    handleGuest(e) {
        e.preventDefault();
        let user;
        // this.props.login({username: 'guestt', password: 'password'})

        // this.setState({oldUsername: 'guest', oldPassword: 'password'}, () => {
        //     user = {username: this.state.oldUsername, password: this.state.oldPassword}
        //     this.props.login(user)
        // })

        let i = 0;
        let n = 0;
        let nameEnt = setInterval(() => {
            if (i <= 'Guest'.length) {
                this.setState({ oldUsername: 'Guest'.slice(0,i) })
                i += 1
            } else if (n <= 'password'.length) {
                this.setState({ oldPassword: 'password'.slice(0,n) })
                n += 1
            } else {
                clearInterval(nameEnt)
                user = {username: this.state.oldUsername, password: this.state.oldPassword}
                this.props.login(user)
            }
        }, 100)
    }

    checkErrors() {
        if (this.props.errors.length === 0) {
            return <h6 className="login-error-bar"></h6>
        } else {
            return (
                <h6 className="login-error-bar">
                    <div className="login-error-display">
                        {this.props.errors.map((error, idx) => <div key={idx}>{error}</div>)}
                    </div>
                </h6>
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
                                <input placeholder={" Name"} className="session-input" type="text" value={this.state.newUsername} onChange={this.handleChange('newUsername')}/>
                                <input placeholder={" Email"} className="session-input" type="text" value={this.state.newEmail} onChange={this.handleChange('newEmail')}/>
                                <input placeholder={" Password"} className="session-input" type="password" value={this.state.newPassword} onChange={this.handleChange('newPassword')}/>
                                <div className="button-row">
                                    <button onClick={this.handleSignUp} className="submit-button">Signup</button>
                                </div>
                            </form>
                            {/* <form onSubmit= {this.handleSignIn} className="session-form">Login */}
                            <form className="login-form">
                                <div className="login-div">Login</div>
                                <input placeholder={" Name"}className="session-input" type="text" value={this.state.oldUsername} onChange={this.handleChange('oldUsername')}/>
                                <input placeholder={" Password"}className= "session-input" type="password" value={this.state.oldPassword} onChange={this.handleChange('oldPassword')}/>
                                <div className="button-row">
                                    <button onClick={this.handleSignIn} className="submit-button">Login</button>
                                </div>
                                <div className="submit-button-row">
                                    <button onClick={this.handleGuest} className="submit-button">Demo</button>
                                </div>
                            </form>
                        </div>
                        <div className="language-row">
                            Not available in: Dutch, Danish, Finnish, Norwegian, Swedish, Marathi, Bengali, or Tamil
                        </div>
                        <div className="links-row">
                            <a>About</a><a>Languages</a><a>Careers</a><a>Businesses</a>
                            <a>Privacy</a><a>Terms</a><a>Contact</a><a>@AppAcademy</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login