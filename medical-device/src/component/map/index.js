import React, { Component } from 'react'
import classnames from 'classnames'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts'
require('echarts/lib/component/geo')
import  'echarts/lib/component/geo';

import PropTypes from 'prop-types'

const requestPrefix = 'https://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/children';

export default class ChinaMap extends Component {
    static propTypes = {
        onChange: PropTypes.func, // 点击地图区域时的回调函数
        extraOption: PropTypes.object,
        style: PropTypes.object,
        defaultSelectedAreaName: PropTypes.string,
        wrapperClassName: PropTypes.string,
        echartsClassName: PropTypes.string,
        showCallbackBtn: PropTypes.bool,
        showTips: PropTypes.bool,
        isShowIsland: PropTypes.bool
    }
    static defaultProps = {
        defaultSelectedAreaName: '',
        onChange: () => {},
        extraOption: {},
        style: {},
        wrapperClassName: '',
        echartsClassName: '',
        showCallbackBtn: true,
        showTips: true,
        isShowIsland: true
    }
    constructor(props) {
        super(props)
        this.state = {
            toastVisible: false,
            mapData: {},
            mapObject: {},
            clickItemName: [],
            clickId: '1',
            clickItemArray: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    createMapOption = (data, clickMapId) => {
        const defaultMapObject = {
            geo: {
                map: 'china',
                show:false,
                aspectScale: 1,			//echarts地图的长宽比（就是胖瘦）
                center: [102.29, 25.8], //设置可见中心坐标，以此坐标来放大和缩小
                zoom: 1.00, //放大级别
                label: {
                    emphasis: {
                        show: true,
                        color:'#fff'
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: [
                {
                type: 'map',
                map: clickMapId,
                layoutCenter: ['50%', '50%'],
                zoom: 1.1,
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#007ffe'
                            }
                        }
                    },
                    itemStyle: {
                    //地图颜色配置
                    normal: {
                        areaColor: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#073684' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#061E3D' // 100% 处的颜色
                            }],
                        },
                        borderColor: '#00ccff',
                        borderWidth: 1,
                    },
                    emphasis: {
                        areaColor: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#007ffe' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#00ccff' // 100% 处的颜色
                            }],
                        },
                    }
                },
                data: data.features.map((item) => {
                    return {
                        selected: item.properties.name === this.props.defaultSelectedAreaName,
                        name: item.properties.name,
                        id: item.properties.id || item.properties.adcode,
                        lastLevel: item.properties.childrenNum === 0
                    }
                })
            },
                {
                    name: 'lines',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 3, //箭头指向速度，值越小速度越快
                        trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 5, //图标大小
                    },
                    lineStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(255,67,67,0.1)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(255,67,67,1)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },

                            width: 2, //线条宽度
                            opacity: 0.1, //尾迹线条透明度
                            curveness: .3 //尾迹线条曲直度
                        },
                        emphasis: {
                            width: 3,
                            opacity: 0.5,
                        }
                    },
                    data: [{
                        fromName: '合肥',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [118.8062, 31.9208],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '拉萨',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [127.9688, 45.368],
                            [119.4543, 25.9222]
                        ]

                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [110.3467, 41.4899],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [125.8154, 44.2584],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [116.4551, 40.2539],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [123.1238, 42.1216],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [114.4995, 38.1006],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [117.4219, 39.4189],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [112.3352, 37.9413],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [109.1162, 34.2004],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [103.5901, 36.3043],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [106.3586, 38.1775],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '吉林',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [101.4038, 36.8207],
                            [119.4543, 25.9222]
                        ]
                    }, {
                        fromName: '成都',
                        toName: '上海',
                        count: '1',
                        amount: '89999',
                        coords: [
                            [80.4038, 30.8207],
                            [119.4543, 25.9222]
                        ]
                    }]
                },
            ],
        };
        const mapObject = Object.assign(defaultMapObject, this.props.extraOption);
        echarts.registerMap(clickMapId, data);
        this.state.clickItemArray.push(mapObject)
        this.setState({mapData: data, clickId: clickMapId, mapObject});
    }
    getData = (id) => {
        // 没id，说明是初始化中国地图
        if (!id) {
            if (this.props.isShowIsland) {
                window.fetch(`${requestPrefix}/100000.json`).then((data) => {
                    return data.text();
                }).then((res) => {
                    const data = JSON.parse(res);
                    // 显示南海岛屿及轮廓线
                    this.createMapOption(data, 'china');
                });
            } else {
                window.fetch('./noIslandJson.json').then((data) => {
                    return data.json();
                }).then((res) => {
                    // 不显示南海岛屿及轮廓线
                    console.log(res)
                    this.createMapOption(res, '1');
                });
            }
        } else {
            window.fetch(`${requestPrefix}/${id}.json`).then((data) => {
                return data.text();
            }).then((res) => {
                const data = JSON.parse(res);
                this.createMapOption(data, id);
            });
        }
    };
    clickMap = (params) => {
        // lastLevel 为true 说明是最后一级了
        if (params && params.data) {
            const {data: {name, id, lastLevel}} = params;
            if (!lastLevel) {
                this.getData(id);
                const len = this.state.clickItemName.length;
                if (len < 2) {
                    this.state.clickItemName.push(name);
                } else {
                    this.state.clickItemName[1] = name;
                }
                this.props.onChange(this.state.clickItemName);
            } else {
                this.setState({toastVisible: true}, () => {
                    setTimeout(() => {
                        this.setState({toastVisible: false});
                    }, 1000);
                });
            }
        }
    };
    goBack = () => {
        this.state.clickItemArray.pop();
        this.state.clickItemName.pop();
        const mapObject = this.state.clickItemArray[this.state.clickItemArray.length - 1];
        this.setState({mapObject});
        this.props.onChange(this.state.clickItemName);
    }
    render() {
        const {
            clickItemArray,
            toastVisible,
            mapObject
        } = this.state;
        const {
            style,
            wrapperClassName,
            echartsClassName,
            showCallbackBtn,
            showTips
        } = this.props;
        const echartsMapWrapper = {
            position: 'relative',
            width: '400px',
            height: '335px',
        };
        const echartsWrapper = {
            width: '400px',
            height: '300px'
        }
        const echartsMapWrapperCls = classnames(this.echartsMapWrapper, wrapperClassName);
        const echartsCls = classnames(this.echartsWrapper, echartsClassName);
        const onEvents = {
            click: this.clickMap,
        };
        const mapStyle = {
            height: '850px',
        };
        const goback = {
            display: 'inline-block',
            marginBottom: '0',
            marginLeft:'20px',
            textAlign: 'center',
            touchAction: 'manipulation',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            lineHeight: '35px',
            fontSize: '12px',
            transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
            position: 'relative',
            left:  '630px',
            top: '-750px',
            color: 'rgba(0, 0, 0, 0.65)',
            backgroundColor: '#fff',
            height: '35px',
            backgroundImage: 'linear-gradient(-225deg, #00d3f1 0, #12b3ff 100%)',
            border: 'none',
            borderRadius: 0,
            padding: '0 30px',
            fontWeight: 'normal'
        };
        const toast = {
            width: '124px',
            borderRadius: '3px',
            color: '#fff',
            backgroundColor: 'rgba(58, 58, 58, 0.9)',
            lineHeight: 1.5,
            padding: '9px 15px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
        return (
            <div className={echartsMapWrapperCls} style={style}>
                <ReactEcharts className={echartsCls} onEvents={onEvents} option={this.state.mapObject} style={mapStyle}/>
                {showTips && toastVisible ? <div style={toast}>暂无下一级数据</div> : null}
                {showCallbackBtn && clickItemArray.length !== 1 ? (
                    <div onClick={this.goBack} style={goback}>返回</div>
                ) : null}
            </div>
        );
    }
}

