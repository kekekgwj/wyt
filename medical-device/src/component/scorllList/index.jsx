import React from "react";
import  './styles.css';
import {pinyinConverter} from "../pingyinConverter";
import {getReportListData} from "../../backend/api";
let scrollInterval='';
class scrollList extends React.Component {

    state = {
        data:[
            {
                "location": "浙江杭州",
                "order": "A122172",
                "date": "2021-3-1"
            },
            {
                "location": "北京海淀",
                "order": "A122170",
                "date": "2021-2-25"
            },
            {
                "location": "广东深圳",
                "order": "A193721",
                "date": "2021-2-25"
            },
            {
                "location": "四川成都",
                "order": "A186472",
                "date": "2021-2-25"
            },
            {
                "location": "浙江宁波",
                "order": "A122822",
                "date": "2021-2-25"
            }
        ],
        listMarginTop:"0",
        animate:false,
    };

    scrollUp= e =>{
        this.state.data.push(this.state.data[0]);
        let height=document.getElementById("scrollList");
        this.setState({
            animate: true,
            listMarginTop: "-"+height+"px",
        });
        setTimeout(() => {
            this.state.data.shift();
            this.setState({
                animate: false,
                listMarginTop: "0",
            });
            this.forceUpdate();
        }, 2000)
    }

    scrollDown= e =>{
        let ulNode=document.getElementById("scrollList");
        ulNode.firstChild.classList.remove("opacityAnimation");
        this.setState({
            animate: true ,
            listMarginTop: ulNode.lastChild.scrollHeight+"px"
        });
        setTimeout(() => {
            this.state.data.unshift(this.state.data[this.state.data.length-1]);
            ulNode.firstChild.classList.add("opacityAnimation");
            this.state.data.pop();
            this.setState({
                animate: false,
                listMarginTop: "0",
            });
            this.forceUpdate();
        }, 1000)
    }

    startScrollUp= e =>{
        this.endScroll();
        this.scrollUp();
        scrollInterval=setInterval(this.scrollUp, 3000);
    }

    startScrollDown= e =>{
        this.endScroll();
        this.scrollDown();
        scrollInterval=setInterval(this.scrollDown, 3000);
    }

    endScroll= e =>{
        clearInterval(scrollInterval);
    };
    loadReportList =  (location) => {
        let lc = pinyinConverter(location);
        if (lc !== 'zhongguo' && lc !== 'zhejiangsheng' && lc !== 'hangzhoushi') {
            lc = 'zhongguo';
        }
        getReportListData(lc)
            .then((res) => {
                this.state.data= res;
            })
            .catch((err) => {
                console.log(err);
            })
    };
    componentWillMount() {
        this.loadReportList(this.props.location);
    }
    componentDidMount() {
        this.startScrollDown();
    }
    componentWillReceiveProps(nextProps) {
        const newLocation = nextProps.location;
        this.loadReportList(newLocation);
    }
    render () {
        return (
                <ul className={`${this.state.animate ? "animate" : ''}  report-ul-wrapper`} id="scrollList"  >
                    {  this.state.data  && this.state.data.map((item, index) => {
                        return (<li className="report-item" key={index}>
                            <div className="li-wrapper">
                                <span className="report-item-order">{item.order}</span>
                                <span className="report-item-location">{item.location}</span>
                                <span className="report-item-date">{item.date}</span>
                            </div>
                        </li>)
                    })}
                </ul>
        )
    }
}
export default scrollList;
