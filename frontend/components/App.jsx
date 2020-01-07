import React from 'react'
import GreetingContainer from "./greeting_container"

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <GreetingContainer />
            </div>
        )
    }
}


export default App