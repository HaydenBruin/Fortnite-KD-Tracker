import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home.js';
import User from './components/User.js';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/user/:username/" component={User}/>
                    </div>

                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>Website branded & powered by <a href="https://haydenbruin.com" target="_blank" rel="noopener noreferrer">Bruin Development</a></p>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
