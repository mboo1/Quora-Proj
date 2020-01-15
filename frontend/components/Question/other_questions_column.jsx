import React from "react";


class OtherQuestionsColumn extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchQuestions()
    }

    render () {
        if (this.props.questions) {
            let questionArr = Object.values(this.props.questions);
            let listArr = [];
            let count = 0
            while (count < 5) {
                let sample = questionArr[Math.floor(Math.random() * questionArr.length)]
                if (!listArr.includes(sample)) listArr.push(sample)
                count ++;
            }
            return (
                <div>
                    <div>Other Questions</div>
                </div>
            )
        } else {
        return (
            null
        )}
    }
}

export default OtherQuestionsColumn