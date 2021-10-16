import { useState, useEffect } from "react"
import {useSelector} from 'react-redux'
import axios from 'axios'

export default function Trivia({data, setStop, questionNumber, setQuestionNumber}) {

    const [question, setQuestion] = useState(null)
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer")
    const [questionAttempted, setQuestionAttempted] = useState(0)

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration)
    }

    const handleClick = (a) => {
        setSelectedAnswer(a)
        setClassName("answer active");
        delay(1000, () => setClassName(a.correct ? "answer correct" : "answer wrong"));
        delay(3000, () => {
            if(a.correct) {
                setQuestionNumber((prev) => prev + 1)
                setSelectedAnswer(null)
            } else {
                setStop(true)
            }
        });
        setQuestionAttempted(questionAttempted + 1)

        axios.post("https://615c398bc298130017735ff0.mockapi.io/quiz", {
            name: user.name,
            Ques : questionNumber,
        })
        .then(
            (response) => {
                console.log(response)
            },
            (error) => {
                console.log(error)
            }
        )
    };

    return (
        <div className="trivia">
            <div className="questions">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
                ))} 
            </div>            
        </div>
    )
}