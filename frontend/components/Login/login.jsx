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

    render() {
        // console.log(this.props)
        return (
            <div>
                <h3>{this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}</h3>
                <form onSubmit={this.handleSignUp}>Sign Up!
                    <label>Username:
                        <input type="text" value={this.state.newUsername} onChange={this.handleChange('newUsername')}/>
                    </label>
                    <label>Email:
                        <input type="text" value={this.state.newEmail} onChange={this.handleChange('newEmail')}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.newPassword} onChange={this.handleChange('newPassword')}/>
                    </label>
                    <button onClick={this.handleSignUp}>Sign Up</button>
                </form>
                <form onSubmit= {this.handleSignIn}>Log In!
                    <label>Username:
                        <input type="text" value={this.state.oldUsername} onChange={this.handleChange('oldUsername')}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.oldPassword} onChange={this.handleChange('oldPassword')}/>
                    </label>
                    <button onClick={this.handleSignIn}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login