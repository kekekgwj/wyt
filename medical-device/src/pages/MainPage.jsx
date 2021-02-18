import React from "react";
import ChinaMap from "../component/map";
import ReactChinaMap from 'react-echarts-chinamap';
import "../styles/MainPage.css";
const mainPage = () => {
    const rankData = [
        {
            key: '1',
            location: '杭州',
            sample: 1
        },
        {
            key: '2',
            location: '天津',
            sample: 2,
        },
    ];
    return (
        <div className="main-container">
            <div className="main-wrapper">
                <div className="map-wrapper">
                    <ChinaMap
                        onChange = {((data) => {console.log(data)})}
                    />
                </div>
                <div className="rank-list">
                    <div className="rank-title">
                        <span className="rank-title-city">城市</span>
                        <span className="rank-title-sample">样本</span>
                    </div>
                    <div className="rank-ul">
                        <ul>
                            {rankData.map((item) => {
                                return (
                                    <li >
                                        <div className="li-item">
                                            <div className="item-city">{item.location}</div>
                                            <div className="item-sample">{item.sample}</div>
                                        </div>
                                    </li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div className="title"><span>中国地图</span></div>
            </div>
        </div>
    );
}
export default mainPage;
