import React from 'react';
import './MainPage.css';
import { ChatBox } from './ChatBox';
//import { Button } from 'react-bootstrap';

class MainPage extends React.Component{
    render() {
        return (
            <div className="border">
                <h1 className="welcome">Congrads you have been selected</h1>
                <ChatBox></ChatBox>
            </div>                
        );
    }
}


export default MainPage;

