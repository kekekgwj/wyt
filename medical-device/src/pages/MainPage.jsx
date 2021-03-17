import React, { useState, useEffect } from "react";
import ChinaMap from "../component/map";
import LinesMap from "../component/mapLines/index";
import  {Timer} from "../component/timer"
import "../styles/MainPage.css";
import  { getCityRank } from '../backend/api';
import {pinyinConverter} from "../component/pingyinConverter";
const mainPage = (props) => {
    const [ cityRankData, setCityRankData ] = useState([]);
    const { location, setLocation } = props;
    useEffect(() => {
        loadData();
    }, [location]);
    const handleLocation = (location) => {
        if (!location || location.length === 0) {
            return '中国';
        }
        return location[location.length - 1];
    };
    const loadData = () => {
        let lc = pinyinConverter(location);
        if (lc !== 'zhongguo' && lc !== 'zhejiangsheng' && lc !== 'hangzhoushi') {
            lc = 'zhongguo';
        }
        getCityRank(lc)
            .then (res => {
                return handleData(res);
            })
    };
    const handleData  = (data) => {
        if (!data) {
            return;
        }
        setCityRankData(data);
    };
    return (
        <div className="main-container">
            <div className="main-wrapper">
                <div className="map-wrapper">
                    <ChinaMap
                        onChange = {((data) => {setLocation(handleLocation(data))})}
                    />
                </div>
                <a className="lines-wrapper">
                    {location ==="中国" && <LinesMap/>}
                </a>
                <div className="timer">
                    <Timer/>
                </div>
                <div className="rank-list">
                    <div className="rank-title">
                        <span className="rank-title-city">城市</span>
                        <span className="rank-title-sample">样本</span>
                    </div>
                    <div className="rank-ul">
                        <ul>
                            {cityRankData && cityRankData.map((item,index) => {
                                return (
                                    <li key={index}>
                                        <div className="li-item">
                                            <div className="item-city">{item.city}</div>
                                            <div className="item-sample">{item.sample}</div>
                                        </div>
                                    </li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div className="title">
                    <span>中国地图</span>
                </div>
                <div className="location-container">
                    <div className="location-title">当前位置</div>
                    <div className="location-current">
                        {location}
                    </div>

                </div>
        </div>
        </div>
    );
}
export default mainPage;
