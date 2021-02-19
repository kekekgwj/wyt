import React from "react";

import '../styles/rightPage.css';
import {List, Table} from 'antd';

const reportListData = [
    {
        key: '1',
        location: '杭州',
        order: 32,
        date: '2021-2-3',
    },
    {
        key: '2',
        location: 'hangzhou',
        order: 11,
        date: '2021-2-3',
    },
];
const tableData = [
    {
        key: '1',
        order: '1',
        location: '浙江杭州',
        today: '123',
        sevenDays: '322',
        recent: '1-20 14:30'
    },
    {
        key: '2',
        order: '1',
        location: '浙江杭州',
        today: '123',
        sevenDays: '322',
        recent: '1-20 14:30'
    },
    {
        key: '3',
        order: '1',
        location: '浙江杭州',
        today: '123',
        sevenDays: '322',
        recent: '1-20 14:30'
    },
];
const columns = [
    {
        title: '城市',
        dataIndex: 'city',
        key: 'city',
        width: 150,
        align: 'center'
    },
    {
        title: '预警人数',
        dataIndex: 'person',
        key: 'person',
        width: 150,
        align: 'center'
    },
    {
        title: '预警时间',
        dataIndex: 'date',
        key: 'date',
        align: 'center'
    },
];

const rightPage = () => {
    return (
        <div className="right-container">
            <div className="device-summary-container">
                <div className="device-global-wrapper device-display-wrapper">
                    <p className="display-title">全国设备总数</p>
                    <p className="display-numb">2</p>
                </div>
                <div className="device-district-wrapper device-display-wrapper">
                    <p className="display-title">区域设备数</p>
                    <p className="display-numb">2</p>
                </div>
                <div className="device-online-wrapper device-display-wrapper">
                    <p className="display-title">在线设备数</p>
                    <p className="display-numb">2</p>
                </div>
            </div>
            <div className="report-list-container">
                <div className="left-title"><span>用户报告列表</span></div>
                <ul>
                {reportListData.map((item, index) => {
                    return (<li className="report-item" key={index}>
                        <div className="li-wrapper">
                            <span className="report-item-order">{item.order}</span>
                            <span className="report-item-location">{item.location}</span>
                            <span className="report-item-date">{item.date}</span>
                        </div>
                    </li>)
                })}
                </ul>
            </div>
            <div className="device-list-container">
                <div className="left-title"><span>设备情况列表</span></div>
                <div className="table-wrapper">
                    <div className="table-title">
                        <span className="table-title-order">设备编号</span>
                        <span className="table-title-location">地点</span>
                        <span className="table-title-today">当日检测数</span>
                        <span className="table-title-sevendays">近七日检测数</span>
                        <span className="table-title-recent">最近检测时间</span>
                    </div>
                    <ul>
                        {tableData.map((item, index) => {
                            return (<li className="table-item" key={index}>
                                <div className="table-li-wrapper">
                                    <span className="table-item-order">{item.order}</span>
                                    <span className="table-item-location">{item.location}</span>
                                    <span className="table-item-today">{item.today}</span>
                                    <span className="table-item-sevendays">{item.sevenDays}</span>
                                    <span className="table-item-recent">{item.recent}</span>
                                </div>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default rightPage;
