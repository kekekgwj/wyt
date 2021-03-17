import React, { useState, useEffect } from "react";
import './styles.css';
export const Timer = () => {

    const [ time, setTime ] = useState({});
    const weekday= ['日','一','二','三','四','五','六'];
    Date.prototype.format = function(fmt) {
        const o = {
            "M+" : this.getMonth()+1,                 //月份
            "d+" : this.getDate(),                    //日
            "h+" : this.getHours(),                   //小时
            "m+" : this.getMinutes(),                 //分
            "s+" : this.getSeconds(),                 //秒
            "q+" : Math.floor((this.getMonth()+3)/3), //季度
            "S"  : this.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        for(const k in o) {
            if(new RegExp("("+ k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            }
        }
        return fmt;
    };
    const displayTime = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const second = date.getSeconds();
        const week = date.getDay();
        const yearMonthDay = date.format("yyyy-MM-dd");
        const hourMinutesSecond = date.format("hh:mm:ss");
        const timeObj = {
            year,
            month,
            day,
            hour,
            minutes,
            second,
            yearMonthDay,
            hourMinutesSecond,
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
            <div className="first-row">{`${time.hourMinutesSecond}`}</div>
            <div className="second-row">{`${time.yearMonthDay} 周${time.week}`}</div>
        </div>);
};
