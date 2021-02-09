import React from "react";
import '../styles/LeftPage.css';
import { Table } from 'antd';
import organ1 from '../assets/organ1.png';
import organ2 from '../assets/organ2.png';
import organ3 from '../assets/organ3.png';
import organ4 from '../assets/organ4.png';
import organ5 from '../assets/organ5.png';
import organ6 from '../assets/organ6.png';
import organ7 from '../assets/organ7.png';
import organ8 from '../assets/organ8.png';
import organ9 from '../assets/organ9.png';
import organ10 from '../assets/organ10.png';
import organ11 from '../assets/organ11.png';
import organ12 from '../assets/organ12.png';
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

const leftPage = () => {
    return (
        <div className="left-container">
            <div className="sample-container">
                <div className="sample-title"><p>当前样本总数</p></div>
                <div className="sample-summary"><p>130</p></div>
            </div>
            <div className="organ-container">
                <div className="organ-wrapper">
                    <img src={organ1} alt="organ" className="organ-icon"/>
                    <img src={organ2} alt="organ" className="organ-icon"/>
                    <img src={organ3} alt="organ" className="organ-icon"/>
                    <img src={organ4} alt="organ" className="organ-icon"/>
                    <img src={organ5} alt="organ" className="organ-icon"/>
                    <img src={organ6} alt="organ" className="organ-icon"/>
                    <img src={organ7} alt="organ" className="organ-icon"/>
                    <img src={organ9} alt="organ" className="organ-icon"/>
                    <img src={organ8} alt="organ" className="organ-icon"/>
                    <img src={organ10} alt="organ" className="organ-icon"/>
                    <img src={organ11} alt="organ" className="organ-icon"/>
                    <img src={organ12} alt="organ" className="organ-icon"/>
                </div>
            </div>
            <div className="organ-charts-container">

            </div>
            <div className="table-container">
                <div className="table-header">
                    <p>健康预警</p>
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
            <p>left page</p>
        </div>
    );
};
export default leftPage;
