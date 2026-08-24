import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [lefttime,setLeftTime] = useState(10)
    const [displayTime,setdisplayTime]= useState(``)


    // to starttine counting 
     useEffect(()=>{
       let intervalid = setInterval(() => {
            setLeftTime(prev => {
                // to stop On 00:00
                if(prev <=0){
                    clearInterval(intervalid);
                    return 0
                }
                return prev -1
            })
        }, 1000);

        // return()=>{
        //     clearInterval(intervalid)
        // }
     },[])


     useEffect(() => {
        //  to make time 00:00 like this
         ${(lefttime % 60).toString().padStart(2, "0")}`;
  let formatedtime = `${Math.floor(lefttime / 60).toString().padStart(2, "0")}: 

  setdisplayTime(formatedtime);
}, [lefttime]);


  return (
    <div>⏰ Timer : {displayTime}</div>
  )
}

export default Timer
