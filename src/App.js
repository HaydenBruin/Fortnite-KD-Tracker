import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home.js';
import User from './components/User.js';
import Api from './components/Api.js';
import DailyKD from './components/DailyKD.js';
import WeeklyKD from './components/WeeklyKD.js';
import FortniteNews from './components/FortniteNews.js';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/user/:username/" component={User}/>
                    <Route exact path="/stream-elements/daily-kd/:username/" component={DailyKD}/>
                    <Route exact path="/stream-elements/weekly-kd/:username/" component={WeeklyKD}/>
                    <Route exact path="/api/" component={Api}/>
                    <Route exact path="/fortnite-news/" component={FortniteNews}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
