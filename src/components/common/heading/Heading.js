import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h1>{subtitle} </h1>
        <h1>{title} </h1>
      </div>
    </>
  )
}

export default Heading
