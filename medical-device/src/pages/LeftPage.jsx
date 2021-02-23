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
import  { getSampleNumb } from  '../backend/api';
import { pinyinConverter } from '../component/pingyinConverter';
import {LineChart} from '../component/chart/index';

const organList = ['heart', 'temper', 'brain', 'liver', 'bravery', 'breast',
    'kidney', 'spleen', 'stomach', 'largeIntestine', 'smallIntestine', 'reproduction'];
const selectedOrgan =  {
    heart: false,
    temper: false,
    liver: false,
    brain: false,
    breast: false,
    kidney: false,
    spleen: false,
    largeIntestine: false,
    smallIntestine: false,
    reproduction: false,
    stomach: false,
    bravery: false
};
const chartDataSource = {
    heart: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#22cea6',
    },
    temper: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#fec33d',
    },
    liver: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#da5d26',
    },
    brain: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#ff167c',
    },
    breast: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#a22460',
    },
    kidney: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#9817b1',
    },
    spleen: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#44b569',
    },
    largeIntestine: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#007ffe',
    },
    smallIntestine: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#03ffe8',
    },
    reproduction: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#1acd40',
    },
    stomach: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#c4fc00',
    },
    bravery: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#ffa900',
    },

};

const leftPage = (props) => {
    const { location } = props;
    const [ sample, setSample ] = useState(0);
    const loadSample = (location) => {
        getSampleNumb(pinyinConverter(location))
            .then(res => {
                setSample(res.total);
            })
    };
    const [ organData, setOrganData ] = useState([]);
    const handleOrganClick = (e) => {
        const curOrgan = e.target.id;
        selectedOrgan[curOrgan] = !selectedOrgan[curOrgan];

        const displayData = [];
        for (let organ in selectedOrgan) {
            if (selectedOrgan[organ]) {
                displayData.push(chartDataSource[organ])
            }
        };
        setOrganData(displayData);
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
                <div className="organ-wrapper" onClick={(event => {console.log(event.target.id)})}>
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
                    <LineChart/>
                </div>
            </div>
        </div>
    );
};
export default leftPage;
