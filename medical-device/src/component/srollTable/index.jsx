import React from "react";
import  './styles.css';
import {pinyinConverter} from "../pingyinConverter";
import {getReportListData} from "../../backend/api";
let scrollInterval='';

class scrollTable extends React.Component {

    state = {
        data:[
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
        ],
        listMarginTop:"0",
        animate:false,
    };

    scrollUp= e =>{
        this.state.data.push(this.state.data[0]);
        let height=document.getElementById("scrollTable");
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
        let ulNode=document.getElementById("scrollTable");
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

    componentDidMount() {
        this.startScrollDown();
    }
    render () {
        return (
            <ul className={`${this.state.animate ? "animate" : ''}  table-ul`} id="scrollTable" >
                {this.state.data && this.state.data.map((item, index) => {
                    return (<li className="table-item" key={index}>
                        <div className="table-item-icon"></div>
                        <div className="table-item-order">{item.order}</div>
                        <div className="table-item-location">{item.location}</div>
                        <div className="table-item-today">{item.today}</div>
                        <div className="table-item-sevendays">{item.sevenDays}</div>
                        <div className="table-item-recent">{item.recent}</div>
                    </li>)
                })}
            </ul>
        )
    }
}
export default scrollTable;
