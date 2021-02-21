import React, { useState, useEffect }from "react";

import '../styles/rightPage.css';
import { getDeviceNumbByLocation, getReportListData } from '../backend/api';
import  {pinyinConverter} from "../component/pingyinConverter";

// const reportListData = [
//     {
//         location: '浙江杭州',
//         order: 'A122172',
//         date: '2021-3-1',
//     },
//     {
//         location: '北京海淀',
//         order: 'A122170',
//         date: '2021-2-25',
//     },
//     {
//         location: '广东深圳',
//         order: 'A193721',
//         date: '2021-2-25',
//     },
//     {
//         location: '四川成都',
//         order: 'A186472',
//         date: '2021-2-25',
//     },
//     {
//         location: '浙江宁波',
//         order: 'A122822',
//         date: '2021-2-25',
//     },
//     {
//         location: '湖南长沙',
//         order: 'A122170',
//         date: '2021-2-25',
//     },
//     {
//         location: '广东广州',
//         order: 'A133521',
//         date: '2021-2-15',
//     },
//     {
//         location: '吉林长春',
//         order: 'A123720',
//         date: '2021-2-15',
//     },
// ];
const tableData = [
    {
        order: '1122',
        location: '浙江杭州',
        today: '123',
        sevenDays: '322',
        recent: '1-20 14:30'
    },
    {
        order: '1221',
        location: '浙江杭州',
        today: '123',
        sevenDays: '322',
        recent: '1-20 14:30'
    },
    {
        order: '1341',
        location: '浙江杭州',
        today: '123',
        sevenDays: '322',
        recent: '1-20 14:30'
    },
    {
        order: '2734',
        location: '浙江杭州',
        today: '123',
        sevenDays: '322',
        recent: '1-20 14:30'
    },
    {
        order: '2734',
        location: '浙江杭州',
        today: '123',
        sevenDays: '322',
        recent: '1-20 14:30'
    },
    {
        order: '2734',
        location: '浙江杭州',
        today: '123',
        sevenDays: '322',
        recent: '1-20 14:30'
    },
    {
        order: '2734',
        location: '浙江杭州',
        today: '123',
        sevenDays: '322',
        recent: '1-20 14:30'
    }
];


const rightPage = (props) => {
    const { location } = props;
    const [ globalDevice, setGlobalDevice ] = useState(0);
    const [ districtDevice, setDistrictDevice ] = useState(0);
    const [ onlineDevice, setOnlineDevice] = useState(0);
    const [ reportData, setReportData ] = useState([]);
    useEffect(()=> {
        loadDeviceSummary();
    },[]);
    useEffect(() => {
        loadDistrictDevice(location);
        loadReportList(location);
    },[location])
    const loadDeviceSummary = () => {
        loadGlobalDevice();
        loadOnlineDevice();
    };
    const loadDistrictDevice = (location) => {
        getDeviceNumbByLocation(pinyinConverter(location || 'zhongguo'))
            .then((res) => {
                setDistrictDevice(res.total);
            })
    };
    const loadGlobalDevice = () => {
        getDeviceNumbByLocation('zhongguo')
            .then((res) => {
                setGlobalDevice(res.total);
            })
    };
    const loadOnlineDevice = () => {
        getDeviceNumbByLocation('online')
            .then((res) => {
                setOnlineDevice(res.total);
            })
    };
    const loadReportList =  (location) => {
        let lc = pinyinConverter(location);
        console.log(lc);
        if (lc !== 'zhongguo' && lc !== 'zhejiangsheng' && lc !== 'hangzhoushi') {
            lc = 'zhongguo';
        }
        getReportListData(lc)
            .then((res) => {
                setReportData(res);
            })
    };
    return (
        <div className="right-container">
            <div className="device-summary-container">
                <div className="device-global-wrapper device-display-wrapper">
                    <p className="display-title">全国设备总数</p>
                    <p className="display-numb">{globalDevice}</p>
                </div>
                <div className="device-district-wrapper device-display-wrapper">
                    <p className="display-title">区域设备数</p>
                    <p className="display-numb">{districtDevice}</p>
                </div>
                <div className="device-online-wrapper device-display-wrapper">
                    <p className="display-title">在线设备数</p>
                    <p className="display-numb">{onlineDevice}</p>
                </div>
            </div>
            <div className="report-list-container">
                <div className="left-title"><span>用户报告列表</span></div>
                <ul>
                {  reportData.map((item, index) => {
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
                        <div className="table-title-order">设备编号</div>
                        <div className="table-title-location">地点</div>
                        <div className="table-title-today">当日检测数</div>
                        <div className="table-title-sevendays">近七日检测数</div>
                        <div className="table-title-recent">最近检测时间</div>
                    </div>
                    <ul className="table-ul">
                        {tableData.map((item, index) => {
                            return (<li className="table-item" key={index}>
                                    <div className="table-item-order">{item.order}</div>
                                    <div className="table-item-location">{item.location}</div>
                                    <div className="table-item-today">{item.today}</div>
                                    <div className="table-item-sevendays">{item.sevenDays}</div>
                                    <div className="table-item-recent">{item.recent}</div>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default rightPage;
