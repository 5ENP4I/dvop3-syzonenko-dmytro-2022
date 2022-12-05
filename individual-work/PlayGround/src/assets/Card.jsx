import React from 'react'

export function Card(props) {
  console.log("Card Props: ", props)
  return (
    <div>Data from App.jsx: {props.props}</div>
  ) 
}

export function CardBlue(props2) {
  console.log("Card Props: ", props2)
  const { text } = props2
  return (
    <div>Data from App.jsx: {text}</div>
  )
}

export default Card