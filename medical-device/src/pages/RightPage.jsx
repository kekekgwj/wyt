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
                    {/*<Table*/}
                    {/*    columns={columns}*/}
                    {/*    dataSource={dataSource}*/}
                    {/*    className="table"*/}
                    {/*    bordered={true}*/}
                    {/*    pagination={false}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    );
}
export default rightPage;
