import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>{props.text}</h1>
}

const Button = (props) => (
    <button onClick={()=> props.onClick(props.value + 1)}>
        {props.text}
    </button>
)



const Statistics = (props) => {
    if (props.all === 0) {
        return <div>No feedback given</div>
    }
    return (
        <table>
            <tbody>
                <Statistic text='good' value={props.good} />
                <Statistic text='neutral' value={props.neutral} />
                <Statistic text='bad' value={props.bad} />
                <Statistic text='all' value={props.all} />
                <Statistic text='average' value={(props.good - props.bad) / props.all} />
                <Statistic text='positive' value={100 * (props.good / props.all) + '%'} />
            </tbody>
        </table>
    )
}

const Statistic = (props) => {
    return (<tr>
        <td>{props.text} </td>
        <td>{props.value}</td>
    </tr>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <div>
                <Header text='give feedback' />
                <Button onClick={setGood} value={good} text='good' />
                <Button onClick={setNeutral} value={neutral} text='neutral' />
                <Button onClick={setBad} value={bad} text='bad' />
                <Header text='statistics' />
                <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)