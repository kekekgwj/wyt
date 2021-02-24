import React, { useState, useEffect, useReducer }from "react";

import '../styles/rightPage.css';
import { getDeviceNumbByLocation, getReportListData } from '../backend/api';
import  {pinyinConverter} from "../component/pingyinConverter";
import ScrollList from "../component/scorllList/index";
import ScrollTable from '../component/srollTable';
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
        if (lc !== 'zhongguo' && lc !== 'zhejiangsheng' && lc !== 'hangzhoushi') {
            lc = 'zhongguo';
        }
        getReportListData(lc)
            .then((res) => {
                setReportData(res.splice(0,5));
            })
    };


    return (
        <div className="right-container">
            <div className="device-summary-container">
                <div className="device-summary-wrapper">
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
            </div>
            <div className="report-list-container">
                <div className="left-title"><span>用户报告列表</span></div>
                <ScrollList location={location}/>
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
                    <ScrollTable />
                    {/*<ul className="table-ul">*/}
                    {/*    {tableData.map((item, index) => {*/}
                    {/*        return (<li className="table-item" key={index}>*/}
                    {/*                <div className="table-item-icon"></div>*/}
                    {/*                <div className="table-item-order">{item.order}</div>*/}
                    {/*                <div className="table-item-location">{item.location}</div>*/}
                    {/*                <div className="table-item-today">{item.today}</div>*/}
                    {/*                <div className="table-item-sevendays">{item.sevenDays}</div>*/}
                    {/*                <div className="table-item-recent">{item.recent}</div>*/}
                    {/*        </li>)*/}
                    {/*    })}*/}
                    {/*</ul>*/}
                </div>
            </div>
        </div>
    );
}
export default rightPage;
