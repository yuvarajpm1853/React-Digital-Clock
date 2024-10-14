import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const options = { weekday:"long",year:"numeric",month:"long",day:"numeric"} // any order
  const addZero = (time)=>{
    return time<10 ? `0${time}` : time
  }
  const handleHours = (hours)=>{
    return hours==0 ? 12:hours>12?hours-12:hours 
  }

  useEffect(()=>{
    const timer = setInterval(()=>setCurrentTime(new Date()), 1000)
    return ()=> clearInterval(timer)
  },[])
  return (
    <>
<div className="digital-clock">
  <h1>Digital Clock</h1>
{/* gives no zero for hours when single digit */}
  {/* <div className="time">{currentTime.toLocaleTimeString()}</div> */} 
  <div className="time">{addZero(handleHours(currentTime.getHours()))}:
      {addZero(currentTime.getMinutes())}:{addZero(currentTime.getSeconds())} 
      {currentTime.getHours()>12?" PM":" AM"}</div>
  <div className="date">{currentTime.toLocaleDateString(undefined,options)}</div>
</div>
    </>
  )
}

export default App
