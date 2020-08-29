import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return (
    <div>
      <h1>
        Half Stack application development
      </h1>
    </div>
  )
}

const Content = (props)=> {
  return (
    <div>
      <Part part={props.exercise.part1} exercise={props.exercise.exercises1}/>
      <Part part={props.exercise.part2} exercise={props.exercise.exercises2}/>
      <Part part={props.exercise.part3} exercise={props.exercise.exercises3}/>
    </div>
  )
}

const Total= (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.sum}
      </p>
    </div>
  )
}

const Part =(props)=>{
  return(
    <p> {props.part} {props.exercise} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const [part1, part2, part3] = parts

  return (
    <div>
      <Header course={course} />
      <Content exercise = {{part1:part1.name, part2:part2.name, part3:part3.name, exercises1:part1.exercise, exercises2: part2.exercises, exercises3: part3.exercises}}/>
      <Total sum = {part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
