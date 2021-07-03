import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

const CountDown = () => {
    const [time, setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    })

    const renderTime = (time, value) => {
        return (
            <div className="countdown_item">
                <div className="countdown_time">{time}</div>
                <div className="countdown_tag">{value}</div>
            </div> 
        )
    }
    
    const getEventCountdown = useCallback((deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            console.log('Date Passed')
        } else {
            const seconds = Math.floor((time / 1000) % 60)
            const minutes = Math.floor((time / 1000 / 60) % 60)
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
            const days = Math.floor((time / (1000 * 60 * 60 * 24)))
            
            setTime({
                days,
                hours,
                minutes,
                seconds
            })
        }
        
    },[])
        
      
    useEffect(() => {
        setInterval(() => getEventCountdown('aug, 20, 2021, 01:25:00'), 1000)
    }, [getEventCountdown])

    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">Event Starts in</div>
                <div className="countdown_bottom ">
                    {renderTime(time.days, 'Days')}
                    {renderTime(time.hours, 'HS')}
                    {renderTime(time.minutes, 'Min')}
                    {renderTime(time.seconds, 'Sec')}

                </div>
            </div>
            
        </Slide>
    )
}

export default CountDown
