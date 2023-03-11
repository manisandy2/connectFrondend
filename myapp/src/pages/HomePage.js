import React, { useState } from 'react'

function HomePage() {
  const [but,setBut] = useState(0)

  const buttonClick = () => {
    setBut(but+1)
  }
  // The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
  return (
    <div>
        <p>You are logged to home page!</p>
        {/* <p>{but}</p>
        <button >Submit</button>
         */}
    </div>
  )
}

export default HomePage

