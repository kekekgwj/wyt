import React, { Component } from 'react'
import echarts from 'echarts'

class LineEcharts extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    // 挂载完成之后，因为React初始化echarts时长宽可能会获取到顶层，所以延迟200去生成，不影响视觉效果
    componentDidMount() {
        setTimeout(() => {
            this.initEchart(this.props.data)
        }, 200)
    }

    // 更新props以后调用
    componentWillReceiveProps(newProps) {
        this.initEchart(newProps.data)
    }

    initEchart = (data) => {
        let myEcharts = echarts.init(this.echartsBox)
        const option = {
            xAxis: {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A989E',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#00ccff',// x轴颜色
                        fontWeight: 'normal',
                        fontSize: '14',
                        lineHeight: 12
                    }
                },
                axisTick : {
                    interval: 0,
                }

            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A989E',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#00ccff',// x轴颜色
                        fontWeight: 'normal',
                        fontSize: '14',
                        lineHeight: 22
                    }

                },
            },
            series: [
                {
                data: [820, 932, 901, 934, 129, 133, 120, 901, 934, 129, 133, 120],
                type: 'line',
                smooth: true,
                color: 'blue'
                },
                {
                    data: [810, 92, 91, 94, 190, 330, 130],
                    type: 'line',
                    smooth: true,
                    color: 'red'
                }
                ]

        };
        myEcharts.setOption(option)
        myEcharts.on('finished', () => {
            myEcharts.resize()
        })
    }

    render() {
        return (
            <div ref={(c) => { this.echartsBox = c }} style={{ width: '100%', height: '100%' }} />
        )
    }
}

export default LineEcharts
