import React from "react";
import district from '../assets/district.png';
import global from '../assets/global.png';
import online from '../assets/online.png';
import '../styles/rightPage.css';
import {List, Table} from 'antd';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
const dataSource = [
    {
        key: '1',
        city: '杭州',
        person: 32,
        date: '2021-2-3',
    },
    {
        key: '2',
        city: '福建',
        person: 123,
        date: '2021-1-2',
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
                <div className="global-device device-display-wrapper">
                    <div className="title global-device-title">
                        <div className="icon-wrapper">
                            <img src={global}/>
                        </div>
                        <p className="device-title">
                            总设备数
                        </p>
                    </div>
                    <div className="display-number">
                        1
                    </div>
                </div>
                <div className="area-device device-display-wrapper">
                    <div className="title area-device-title">
                        <div className="icon-wrapper">
                            <img src={district}/>
                        </div>
                        <p className="device-title">
                            地图设备数
                        </p>
                    </div>
                    <div className="display-number">
                        1
                    </div>
                </div>
                <div className="online-device device-display-wrapper">
                    <div className="title online-device-title">
                        <div className="icon-wrapper">
                            <img src={online}/>
                        </div>
                        <p className="device-title">
                            在线设备数
                        </p>
                    </div>
                    <div className="display-number">
                        1
                    </div>
                </div>
            </div>
            <div className="report-list-container">
                <div className="report-title">
                    <p>用户报告列表</p>
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />,
            </div>
            <div className="device-list-container">
                <div className="device-list-title">
                    <p>设备列表</p>
                </div>
                <div className="table-wrapper">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        className="table"
                        bordered={true}
                        pagination={false}
                    />
                </div>
            </div>
        </div>
    );
}
export default rightPage;
