import React from 'react'


const Box = (props) => {
  return (
    <div className='box'>
      <h1> {props.title} </h1>
      <img  className='item-img' src= "https://upload.wikimedia.org/wikipedia/commons/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg" />
      <h2> computer</h2>
    </div>
  )
}

export default Box