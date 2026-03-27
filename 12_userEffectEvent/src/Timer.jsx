import {useEffect, useState,useEffectEvent} from 'react'

export default function Timer() {
    const [time, settime] =useState(0)
    const myfun = useEffectEvent(()=>{
        console.log(time)
    })
    useEffect(()=>{
        const interval = setInterval(()=>{
            // console.log(time) //creat eproblem
            myfun()
            settime(prev=>prev+1)
        },1000)
        return () => {
            clearInterval(interval)
            console.log("Timer Cleared.")
        }
    },[])
  return (
    <p>Time is: {time}</p>
  )
}
