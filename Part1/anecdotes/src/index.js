import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function rand(maxLimit = anecdotes.length) {
 let random = Math.random() * maxLimit;
 return random;
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0])
  const [max,setMax] = useState([0,0])

  const nextanectode =()=> setSelected(Math.floor(rand(anecdotes.length)))

  const addvote = () =>{
    var voteCount = [...vote]
    voteCount[selected] +=1
    setVote(voteCount)
    if(voteCount[selected]>max[0]){
      let newMax = [voteCount[selected],selected]
      setMax(newMax)
    }
  }

  const maxVote=()=>{
    var maxCount = Math.max([...vote])
    setVote(maxCount)
  }

  return (
    <div>
      <h1> Anecdote of the day </h1>
      <p>{props.anecdotes[selected]}</p>
      <p> has {vote[selected]} vote </p>
      <button onClick ={addvote}>vote</button>
      <button onClick={nextanectode}>next anecdote</button>
      <h1> Anecdote with most votes</h1>
      <p>{props.anecdotes[max[1]]}</p>
      <p> has {max[0]} votes</p>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
