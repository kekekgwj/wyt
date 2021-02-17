import React from "react";
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

// 数据源
const data = [
    {
        month: "Jan",
        city: "Tokyo",
        temperature: 7
    },
    {
        month: "Jan",
        city: "London",
        temperature: 3.9
    },
    {
        month: "Feb",
        city: "Tokyo",
        temperature: 6.9
    },
    {
        month: "Feb",
        city: "London",
        temperature: 4.2
    },
    {
        month: "Mar",
        city: "Tokyo",
        temperature: 9.5
    },
    {
        month: "Mar",
        city: "London",
        temperature: 5.7
    },
    {
        month: "Apr",
        city: "Tokyo",
        temperature: 14.5
    },
    {
        month: "Apr",
        city: "London",
        temperature: 8.5
    },
    {
        month: "May",
        city: "Tokyo",
        temperature: 18.4
    },
    {
        month: "May",
        city: "London",
        temperature: 11.9
    },
    {
        month: "Jun",
        city: "Tokyo",
        temperature: 21.5
    },
    {
        month: "Jun",
        city: "London",
        temperature: 15.2
    },
    {
        month: "Jul",
        city: "Tokyo",
        temperature: 25.2
    },
    {
        month: "Jul",
        city: "London",
        temperature: 17
    },
    {
        month: "Aug",
        city: "Tokyo",
        temperature: 26.5
    },
    {
        month: "Aug",
        city: "London",
        temperature: 16.6
    },
    {
        month: "Sep",
        city: "Tokyo",
        temperature: 23.3
    },
    {
        month: "Sep",
        city: "London",
        temperature: 14.2
    },
    {
        month: "Oct",
        city: "Tokyo",
        temperature: 18.3
    },
    {
        month: "Oct",
        city: "London",
        temperature: 10.3
    },
    {
        month: "Nov",
        city: "Tokyo",
        temperature: 13.9
    },
    {
        month: "Nov",
        city: "London",
        temperature: 6.6
    },
    {
        month: "Dec",
        city: "Tokyo",
        temperature: 9.6
    },
    {
        month: "Dec",
        city: "London",
        temperature: 4.8
    }
];

const scale = {
    temperature: { min: 0 },
    city: {
        formatter: v => {
            return {
                London: '伦敦',
                Tokyo: '东京'
            }[v]
        }
    }
}

function Demo() {
    return <Chart scale={scale} padding={[30, 20, 60, 40]} autoFit height={320} data={data} interactions={['element-active']}>
        <Point position="month*temperature" color="city" shape='circle' />
        <Line shape="smooth" position="month*temperature" color="city" label="temperature" />
        <Tooltip shared showCrosshairs />
        <Legend background={{
            padding:[5,100,5,36],
            style: {
                fill: '#eaeaea',
                stroke: '#fff'
            }
        }} />
    </Chart>
}


const leftPage = () => {
    return (
        <div className="left-container">
            <div className="sample-container">
                <div className="sample-title left-title"><span>当前样本总数</span></div>
                <div className="sample-summary"><p>130</p></div>
            </div>
            <div className="organ-container">
                <div className="organ-title left-title"><span>脏腑选择区</span></div>
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
            <div className="table-container">
                <div className="table-title left-title"><span>健康趋势图</span></div>
                <div className="table-wrapper">
                    {Demo()}
                </div>
            </div>
        </div>
    );
};
export default leftPage;
