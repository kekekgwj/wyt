import React, { useState, useEffect } from "react";
import '../styles/LeftPage.css';
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
import { Chart, Line, Point, Tooltip, Legend } from 'bizcharts';
import  { getSampleNumb } from  '../backend/api';
import { pinyinConverter } from '../component/pingyinConverter';
import LineEcharts from '../component/lineChart/index';

// 数据源
const data = [
    {
        month: "1",
        organ: "大脑",
        score: 5
    },
    {
        month: "1",
        organ: "心脏",
        score: 100
    },
    {
        month: "1",
        organ: "脾",
        score: 50
    },
    {
        month: "1",
        organ: "肝",
        score: 50
    },
    {
        month: "1",
        organ: "胆",
        score: 50
    },
    {
        month: "1",
        organ: "胸乳",
        score: 50
    },
    {
        month: "1",
        organ: "肾",
        score: 50
    },
    {
        month: "1",
        organ: "肺",
        score: 50
    },
    {
        month: "1",
        organ: "胃",
        score: 50
    },
    {
        month: "1",
        organ: "大肠",
        score: 50
    },
    {
        month: "1",
        organ: "小肠",
        score: 50
    },
    {
        month: "1",
        organ: "生殖",
        score: 50
    },
    {
        month: "2",
        organ: "大脑",
        score: 10
    },
    {
        month: "3",
        organ: "大脑",
        score: 12
    },
    {
        month: "4",
        organ: "大脑",
        score: 44
    },
    {
        month: "5",
        organ: "大脑",
        score: 66
    },
    {
        month: "6",
        organ: "大脑",
        score: 22
    },
    {
        month: "7",
        organ: "大脑",
        score: 88
    },
    {
        month: "8",
        organ: "大脑",
        score: 99
    },
    {
        month: "9",
        organ: "大脑",
        score: 30
    },
    {
        month: "10",
        organ: "大脑",
        score: 22
    },
    {
        month: "11",
        organ: "大脑",
        score: 34
    },
    {
        month: "12",
        organ: "大脑",
        score: 80
    }
];

const scale = {
    score: { min: 0 },
    city: {
        formatter: v => {
            return {
                brain: '大脑',
            }[v]
        }
    }
}

function Demo() {
    return <Chart scale={scale} padding={[30, 20, 60, 40]} autoFit height={200} data={data} interactions={['element-active']}>
        <Point position="month*score" color="organ" shape='circle' />
        <Line shape="smooth" position="month*score" color="organ" label="score" />
        <Tooltip shared showCrosshairs />
        <Legend position="bottom-left" background={{
            padding:[5,240,5,36],
            style: {
                fill: '#ffffff',
                stroke: '#fff'
            }
        }} />
    </Chart>
}


const leftPage = (props) => {
    const { location } = props;
    const [ sample, setSample ] = useState(0);
    const loadSample = (location) => {
        getSampleNumb(pinyinConverter(location))
            .then(res => {
                setSample(res.total);
            })
    };

    useEffect(() => {
        loadSample(location);
    }, [location]);
    return (
        <div className="left-container">
            <div className="sample-container">
                <div className="sample-title left-title"><span>当前样本总数</span></div>
                <div className="sample-summary"><p>{sample}</p></div>
            </div>
            <div className="organ-container">
                <div className="organ-title left-title"><span>脏腑选择区</span></div>
                <div className="organ-wrapper">
                    <img src={organ1} alt="organ" className="organ-icon" id={"heart"}/>
                    <img src={organ2} alt="organ" className="organ-icon" id={"brain"}/>
                    <img src={organ3} alt="organ" className="organ-icon" id={"temper"}/>
                    <img src={organ4} alt="organ" className="organ-icon" id={"liver"}/>
                    <img src={organ5} alt="organ" className="organ-icon" id={"bravery"}/>
                    <img src={organ6} alt="organ" className="organ-icon" id={"breast"}/>
                    <img src={organ7} alt="organ" className="organ-icon" id={"kidney"}/>
                    <img src={organ9} alt="organ" className="organ-icon" id={"spleen"}/>
                    <img src={organ8} alt="organ" className="organ-icon" id={"stomach"}/>
                    <img src={organ10} alt="organ" className="organ-icon" id={"largeIntestine"}/>
                    <img src={organ11} alt="organ" className="organ-icon" id={"smallIntestine"}/>
                    <img src={organ12} alt="organ" className="organ-icon" id={"reproduction"}/>
                </div>
            </div>
            <div className="table-container">
                <div className="table-title left-title"><span>健康趋势图</span></div>
                <div className="table-wrapper">
                    <LineEcharts data={{
                        x: ['2019-11-21', '2019-11-22', '2019-11-23', '2019-11-24', '2019-11-25', '2019-11-26'],
                        y: [20, 50, 80, 70, 45, 85]
                    }} y yname="单位：件" />
                </div>
            </div>
        </div>
    );
};
export default leftPage;
