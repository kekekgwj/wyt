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
    const [ showBlock, setShowBlock ] = useState(false);
    useEffect(() => {
        loadData();
    }, [location]);
    const ifShowBlockSet = new Set(["上城区", "下城区", "江干区", "拱墅区", "西湖区", "滨江区", "萧山区", "余杭区", "富阳区", "临安区", "杭州市"]);
    const handleLocation = (location) => {
        let curLocation = '';
        if (!location || location.length === 0) {
            curLocation = '中国';
            setLocation(curLocation);
            return;
        }
        curLocation =  location[location.length - 1];
        if (ifShowBlockSet.has(curLocation)) {
            setShowBlock(true);
        }
        else {
            setShowBlock(false);
        }
        setLocation(curLocation);
    };
    const loadData = () => {
        // let lc = pinyinConverter(location);
        // if (lc !== 'zhongguo' && lc !== 'zhejiangsheng' && lc !== 'hangzhoushi') {
        //     lc = 'zhongguo';
        // }
        getCityRank(location)
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
    const setLocationWithBlock = (e) => {
        if (!e.target.id) {
            return;
        }
        const block = e.target.id;
        handleLocation([block]);
    }
    return (
        <div className="main-container">
            <div className="main-wrapper">
                <div className="map-wrapper">
                    <ChinaMap
                        onChange = {location => handleLocation(location)}
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
                        <span>{location}</span>
                    </div>
                </div>
                {showBlock &&  <div className="block-box-container">
                    <p className="block-box-title">选择区域</p>
                    <div className="block-box-wrapper" onClick={(e) => setLocationWithBlock(e)}>
                        <p id="上城区">上城区</p>
                        <p id="下城区">下城区</p>
                        <p id="江干区">江干区</p>
                        <p id="拱墅区">拱墅区</p>
                        <p id="西湖区">西湖区</p>
                        <p id="滨江区">滨江区</p>
                        <p id="萧山区">萧山区</p>
                        <p id="余杭区">余杭区</p>
                        <p id="富阳区">富阳区</p>
                        <p id="临安区">临安区</p>
                    </div>
                </div> }
            </div>
        </div>
    );
}
export default mainPage;
