import { useState } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  return (
    <>
<div className="digital-clock">
  <h1>Digital Clock</h1>
  <div className="time">06:15:59 PM</div>
  <div className="date">Tuesday, February 6, 2024</div>
</div>
    </>
  )
}

export default App
