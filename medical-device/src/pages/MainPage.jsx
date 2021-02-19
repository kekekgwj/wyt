import React, {useState} from "react";
import ChinaMap from "../component/map";
import "../styles/MainPage.css";
const mainPage = (props) => {

    const { location, setLocation } = props;
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
    const handleLocation = (location) => {
        if (!location || location.length === 0) {
            return '中国';
        }
        return location[location.length - 1];
    };
    return (
        <div className="main-container">
            <div className="main-wrapper">
                <div className="map-wrapper">
                    <ChinaMap
                        onChange = {((data) => {setLocation(handleLocation(data))})}
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
