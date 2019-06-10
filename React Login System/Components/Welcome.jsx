import React from 'react'

const boxStyle = {
  width: "500px",
  height: "200px",
  background:"rgb(245,245,245)",
  textAlign:"center",
  position:"absolute",
  color:"#262626",
  top: 0,
  left: 0,
  lineHeight:"190px",
  borderRadius:"10px"
}

const Welcome = (props) => {
  return(
    <h2 style={boxStyle}>WELCOME {props.uName}</h2>
  )
}

export default Welcome;