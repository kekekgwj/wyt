import React, {useState, useEffect} from 'react';
import ReactECharts from 'echarts-for-react';


export const LineChart = (props) => {
    const { data = [] } = props;
    const [ option, setOption ] = useState({});
    const defaultOption = {
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                axisLabel:{
                    color: '#00ccff',
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
                    color:'#00ccff'
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
        }
    };
    const handleOption = () => {
        if (!data || data.length  === 0) {
            return;
        }
        const myOption = {
            series: []
        };
        for (let line of data) {
            const lineConfig = {
                data: line.data ? line.data : [],
                type: line.type ? line.type : 'line',
                smooth: line.smooth ? line.smooth : true,
                color: line.color ? line.color : '#ffffff'
            }
            myOption.series.push(lineConfig);
        }
        // setOption(Object.assign(defaultOption, myOption));
        setOption(defaultOption);
    };
    useEffect(()=>{
        handleOption();
    },[])
    return <ReactECharts option={option}/>
};

