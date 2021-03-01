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

const organList = ['heart', 'lung', 'brain', 'liver', 'gallbladder', 'breast',
    'kidney', 'spleen', 'stomach', 'largeIntestine', 'smallIntestine', 'reproduction'];
const organConverter = {
    heart: '心脏',
    lung: '肺',
    liver: '肝',
    brain: '大脑',
    breast: '胸乳',
    kidney: '肾',
    spleen: '脾',
    largeIntestine: '大肠',
    smallIntestine: '小肠',
    reproduction: '生殖',
    stomach: '胃',
    gallbladder: '胆'
}
const selectedOrgan =  {
    heart: false,
    lung: false,
    liver: false,
    brain: false,
    breast: false,
    kidney: false,
    spleen: false,
    largeIntestine: false,
    smallIntestine: false,
    reproduction: false,
    stomach: false,
    gallbladder: false
};
const chartDataSource = {
    heart: {
        data:[1, 2, 3, 4, 5, 10, 40, 50, 60, 30, 20 ,10],
        color:'#22cea6',
    },
    gallbladder: {
        data:[
            62, 43, 58, 67, 63,
            38,  9, 56, 87, 83,
            88, 84
        ],
        color:'#fec33d',
    },
    liver: {
        data:[
            67, 46, 14, 92, 60,
            57, 23, 39, 22, 63,
            18, 89
        ],
        color:'#da5d26',
    },
    brain: {
        data:[
            73, 14, 44, 90, 74,
            12, 78, 92, 59, 79,
            11, 17
        ],
        color:'#ff167c',
    },
    breast: {
        data:[
            5, 66, 38, 56, 51,
            34, 65, 89, 92, 49,
            88, 67
        ],
        color:'#a22460',
    },
    kidney: {
        data:[
            57, 31, 54, 64, 22,
            6, 49, 43, 46, 78,
            7, 60
        ],
        color:'#9817b1',
    },
    spleen: {
        data:[
            56, 68, 59, 66, 45,
            93,  6, 47, 16, 24,
            65, 38
        ],
        color:'#44b569',
    },
    largeIntestine: {
        data:[
            38, 36, 47, 53, 60,
            2, 21, 17, 39, 30,
            7, 77
        ],
        color:'#007ffe',
    },
    smallIntestine: {
        data:[
            5, 25, 58, 52, 81,
            35,  9, 57, 56, 59,
            7,  8
        ]
        ,
        color:'#03ffe8',
    },
    reproduction: {
        data:[
            32, 77, 57, 13, 81,
            61, 19, 30, 40, 71,
            96, 92
        ],
        color:'#1acd40',
    },
    stomach: {
        data:[
            6, 23, 39, 19, 59,
            60, 50, 93,  7, 47,
            36, 78
        ],
        color:'#c4fc00',
    },
    lung: {
        data:[
            37, 16, 22, 13, 29,
            36, 62, 79, 20,  7,
            80, 78
        ],
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
                <div className="organ-wrapper" onClick={(e => {handleOrganClick(e)})}>
                    <img src={organ1} alt="organ" className="organ-icon" id={"heart"}/>
                    <img src={organ2} alt="organ" className="organ-icon" id={"brain"}/>
                    <img src={organ3} alt="organ" className="organ-icon" id={"lung"}/>
                    <img src={organ4} alt="organ" className="organ-icon" id={"liver"}/>
                    <img src={organ5} alt="organ" className="organ-icon" id={"gallbladder"}/>
                    <img src={organ6} alt="organ" className="organ-icon" id={"breast"}/>
                    <img src={organ7} alt="organ" className="organ-icon" id={"kidney"}/>
                    <img src={organ8} alt="organ" className="organ-icon" id={"spleen"}/>
                    <img src={organ9} alt="organ" className="organ-icon" id={"stomach"}/>
                    <img src={organ10} alt="organ" className="organ-icon" id={"largeIntestine"}/>
                    <img src={organ11} alt="organ" className="organ-icon" id={"smallIntestine"}/>
                    <img src={organ12} alt="organ" className="organ-icon" id={"reproduction"}/>
                </div>
            </div>
            <div className="table-container">
                <div className="table-title left-title"><span>健康趋势图</span></div>
                <div className="table-wrapper">
                    <LineChart optionsData={organData}/>
                </div>
                <div className="table-note">
                    { selectedOrgan &&  Object.keys(selectedOrgan).map((item)=> {
                        if (selectedOrgan[item]) {
                            return (
                                <div className="table-note-item">
                                    <div className="table-note-icon" style={{backgroundColor: chartDataSource[item].color}}/>
                                    <p>{organConverter[item]}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    );
};
export default leftPage;
