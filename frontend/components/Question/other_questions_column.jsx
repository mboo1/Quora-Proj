import React from "react";
import { Link } from "react-router-dom"


class OtherQuestionsColumn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listArr: [],
            questionsFetched: false,
            prevId: ''
        }
        this.populateRandom = this.populateRandom.bind(this);
    }

    componentDidMount() {
        this.state.prevId = this.props.currId;
        this.props.fetchQuestions(6)
        .then(() => {
            // let questionArr = Object.values(this.props.questions);
            // for (let i = 0; i < 4; i++) {
            //     this.state.listArr.push(questionArr[i]);
            // }
            this.populateRandom();
            this.setState({
                questionsFetched: true
            })
        })
    }

    componentDidUpdate() {
        if (this.state.prevId !== this.props.currId) {
            this.setState({
                questionsFetched: false,
                prevId: this.props.currId,
                listArr: []
            })
            this.props.fetchQuestions(6)
            .then(() => {
                this.populateRandom();
                this.setState({
                    questionsFetched: true
                })
            })
        }
    }

    populateRandom() {
        let questionArr = Object.values(this.props.questions);
        let intsSeen = [];
        while (this.state.listArr.length < 5) {
            let randInt = Math.floor(Math.random() * 20)
            if (!intsSeen.includes(randInt) && randInt < questionArr.length) this.state.listArr.push(questionArr[randInt])
            intsSeen.push(randInt)
        }
    }

    render () {
        if (this.state.questionsFetched) {
            // let questionArr = Object.values(this.props.questions);
            // // let listArr = [];
            // let count = 0
            // while (count < 5 && questionArr.length > 1) {
            //     let sample = questionArr[Math.floor(Math.random() * questionArr.length)]
            //     if (!this.state.listArr.includes(sample) && this.state.listArr.length < 3) this.state.listArr.push(sample)
            //     count ++;
            // }
            
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