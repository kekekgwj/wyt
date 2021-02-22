import React, { useState, useEffect } from "react";
import './styles.css';
export const Timer = () => {
    const [ time, setTime ] = useState({});
    const weekday= ['日','一','二','三','四','五','六'];
    const displayTime = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const second = date.getSeconds();
        const week = date.getDay();
        const timeObj = {
            year,
            month,
            day,
            hour,
            minutes,
            second,
            week: weekday[week]
        };
        setTime(timeObj);
    };
    const freshTime = () => {
        const interval = setInterval(displayTime, 1000);
        // return clearInterval(interval);
    };
    useEffect(freshTime, [], );
    return (
        <div className="timer-container">
            <div className="first-row">{`${time.hour}:${time.minutes}:${time.second}`}</div>
            <div className="second-row">{`${time.year}/${time.month}/${time.day} pm 周${time.week}`}</div>
        </div>);
};
