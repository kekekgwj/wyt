import React, {useState} from "react";
import { Row, Col } from 'antd';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import MainPage from './MainPage';
import '../styles/App.css'


function App() {
    const [location, setLocation] = useState('中国');
    const [organ, setOrgan] = useState('heart');
    return (
        <div className="content-container">
            <Row className="header">
                <span/>
            </Row>
            <Row className="content">
                <div className="left-page"><LeftPage location={location}/></div>
                <div className="main-page" ><MainPage setLocation={setLocation} location={location}/></div>
                <div className="right-page"><RightPage location={location}/></div>
            </Row>
        </div>
    );
}
export default App;

