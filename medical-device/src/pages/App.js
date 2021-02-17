import React from "react";
import { Row, Col } from 'antd';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import MainPage from './MainPage';
import '../styles/App.css'


function App() {
    return (
        <div className="content-container">
            <Row className="header">
                <span/>
            </Row>
            <Row className="content">
                <div className="left-page"><LeftPage/></div>
                <div className="main-page"><MainPage/></div>
                <div className="right-page"><RightPage/></div>
            </Row>
        </div>
    );
}
export default App;

