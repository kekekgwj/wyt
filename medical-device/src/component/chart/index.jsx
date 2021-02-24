import React, {useState, useEffect} from 'react';
import ReactECharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';

export const LineChart = (props) => {
    const {optionsData = [], id = 'default-id', width = 480, height = 300} = props;
    useEffect(() => {
        let chartSeries = [];
        for (let line of optionsData) {
            const lineConfig = {
                data: line.data ? line.data : [],
                type: line.type ? line.type : 'line',
                smooth: line.smooth ? line.smooth : true,
                color: line.color ? line.color : '#ffffff'
            };
            chartSeries.push(lineConfig);
        }
        const option = {
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : true,
                    axisLabel:{
                        color: '#397cbc',
                        interval: 0,
                        margin: 10
                    },
                    axisLine:{
                        lineStyle:{
                            type: 'dashed',
                            color:'#397cbc'
                        }
                    },
                    axisTick:{
                        show:true,
                        alignWithLabel: true,
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            type: 'dashed',
                            color:'#11366e'
                        }
                    },
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis: {
                type : 'value',
                min:0,
                max:100,
                axisLabel : {
                    formatter: '{value}',
                    textStyle:{
                        color:'#397cbc'
                    },
                    margin: 15
                },
                axisLine:{
                    lineStyle:{
                        type: 'dashed',
                        color:'#397cbc'
                    }
                },
                axisTick:{
                    show:false,
                    alignWithLabel: true,
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        type: 'dashed',
                        color:'#11366e'
                    }
                }
            },
        };
        option.series = chartSeries;
        const chart = echarts.init(document.getElementById(id));
        chart.clear();
        chart.setOption(option);
    }, [optionsData]);
    return (
        <div id={id} style={{width: width, height: height}}>222</div>
    );
};

