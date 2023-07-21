import React from 'react'
// align div to center style
const style = {
  "display": "flex",
  "justify-content": "center",
  "align-items": "center",
  "height": "100vh"
}
const Home = () => {
  return (
    <div  style={style}>
      <h1 className = "mt-5">Welcome to Utkarsh Rozgar</h1>
    </div>
  )
}

export default Home
