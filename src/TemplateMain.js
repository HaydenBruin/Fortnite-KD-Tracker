import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home.js';
import User from './components/User.js';
import Api from './components/Api.js';
import DailyKD from './components/DailyKD.js';
import WeeklyKD from './components/WeeklyKD.js';
import FortniteNews from './components/FortniteNews.js';

class TemplateMain extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">

                    <header>
                        <Link to="/">
                            <img src="/images/logo.png" alt="Fortnite Logo"/>
                        </Link>
                    </header>

                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/user/:username/" component={User}/>
                        <Route exact path="/stream-elements/daily-kd/:username/" component={DailyKD}/>
                        <Route exact path="/stream-elements/weekly-kd/:username/" component={WeeklyKD}/>
                        <Route exact path="/api/" component={Api}/>
                        <Route exact path="/fortnite-news/" component={FortniteNews}/>
                    </div>

                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>Website branded & powered by <a href="https://haydenbruin.com" target="_blank" rel="noopener noreferrer">Hayden Bruin</a> - <Link to="/api/">API Information</Link> - <Link to="/fortnite-news/">Fortnite News</Link></p>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </BrowserRouter>
        );
    }
}

export default TemplateMain;
