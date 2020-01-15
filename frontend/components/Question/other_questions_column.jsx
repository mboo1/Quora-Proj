import React from "react";
import { Link } from "react-router-dom"


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
            while (count < 5 && questionArr.length > 1) {
                let sample = questionArr[Math.floor(Math.random() * questionArr.length)]
                if (!listArr.includes(sample)) listArr.push(sample)
                count ++;
            }
            
            return (
                <div className="other-questions-col">
                    <div>More Questions</div>
                    <ul>
                    {listArr.map(question => (
                        <li><Link to= {`/questions/${question.id}`}>{question.title}</Link></li>
                    ))}
                    </ul>
                </div>
            )
        } else {
        return (
            null
        )}
    }
}

export default OtherQuestionsColumn