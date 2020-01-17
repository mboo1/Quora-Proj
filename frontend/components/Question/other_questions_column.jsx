import React from "react";
import { Link } from "react-router-dom"


class OtherQuestionsColumn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listArr: []
        }
    }

    componentDidMount() {
        this.props.fetchQuestions()
    }

    render () {
        if (this.props.questions) {
            let questionArr = Object.values(this.props.questions);
            // let listArr = [];
            let count = 0
            while (count < 5 && questionArr.length > 1) {
                let sample = questionArr[Math.floor(Math.random() * questionArr.length)]
                if (!this.state.listArr.includes(sample) && this.state.listArr.length < 3) this.state.listArr.push(sample)
                count ++;
            }
            
            return (
                <div className="other-questions-col">
                    <div>More Questions</div>
                    <ul>
                    {this.state.listArr.map(question => (
                        <li key={question.id}><Link to= {`/questions/${question.id}`}>{question.title}</Link></li>
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