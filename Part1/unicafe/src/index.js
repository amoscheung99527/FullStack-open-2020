import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const average = (good*1 + neutral*0 + bad*-1)/(good+neutral+bad)
  const positive = (good/(good+neutral+bad)*100)

  const Statistic = (props) =>{
    if (props.text=="positive"){
      return(
        <tr>
          <td>{props.text}</td>
          <td>{props.value} %</td>
        </tr>
      )
    }
    else{
      return(
        <tr>
          <td width="75px">{props.text}</td>
          <td>{props.value}</td>
        </tr>
      )

    }
  }

  const Statistics = (props) => {
    if ((good+neutral+bad)== 0){
      return(
        <div>
          <h1>statistics</h1>
          <table>
            <tr>
              <td>No Feedback Given</td>
            </tr>
          </table>
        </div>
      )
    }
    else
      return(
        <div>
          <h1>statistics</h1>
          <Statistic text="good" value ={props.good} />
          <Statistic text="neutral" value ={props.neutral} />
          <Statistic text="bad" value ={props.bad} />
          <Statistic text="average" value ={props.average} />
          <Statistic text="positive" value ={props.positive} />
        </div>
      )
  }

  const setGoodValue = (goodValue) => () =>{
    setGood(goodValue)
  }

  const setNeturalValue = (neturalValue) => () =>{
    setNeutral(neturalValue)
  }

  const setBadValue = (badValue) => () =>{
    setBad(badValue)
  }

  return (
    <div>
      <h1> give feedback</h1>
      <button onClick={setGoodValue(good + 1)}>good</button>
      <button onClick={setNeturalValue(neutral + 1)}>neutral</button>
      <button onClick={setBadValue(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
