import React from "react";
import ReactChinaMap from 'react-echarts-chinamap'
const mainPage = () => {
    const mapStyle = {
        width: '100%',
        top: '500px',
        display: 'flex',
        justifyContent: 'center'

    }
    const option = {
        backgroundColor: "#336699",
        geo: {
            zoom: 1,
            // selectedMode:true,  //多选地图区域
            label: {
                normal: {
                    //地图名字
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 10,
                    },
                },
                emphasis: {
                    //选中后颜色
                    textStyle: {
                        color: "#fff",
                    },
                },
            },
            itemStyle: {
                //地图颜色配置
                normal: {
                    borderColor: "rgba(147, 235, 248, 1)",
                    borderWidth: 1,
                    areaColor: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                        },
                            {
                                offset: 1,
                                color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: "rgba(128, 217, 248, 1)",
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
                },
                emphasis: {
                    areaColor: "#389BB7", //选中地图颜色
                    borderWidth: 0,
                },
            },
        },
    };
    return (
        <div className="main-container">
            <p>main page</p>

                <ReactChinaMap
                    wrapperClassName="xxx"
                    echartsClassName="map-chart"
                    onChange = {((data) => {console.log(data)})}
                    extraOption={option}
                    style={mapStyle}/>
        </div>
    );
}
export default mainPage;
