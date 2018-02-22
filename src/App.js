import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <div className="section hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Fortnite Skill Tracker</h1>
                                <h2></h2>
                            </div>
                            <div className="row hide">
                                <div className="col-md-12">
                                    <div className="alert alert-danger">Account not valid</div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="search">
                                        <div className="row">
                                            <div className="col-md-7 column">
                                                <input type="text" name="username" value={this.state.value} onChange={this.handleChange} placeholder="Your Epic Games Username..." />
                                            </div>
                                            <div className="col-md-3 column">
                                                <select name="platform">
                                                    <option>PC</option>
                                                    <option>PS4</option>
                                                    <option>XBOX</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2 column">
                                                <button>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>Website branded & powered by <a href="https://haydenbruin.com">Bruin Development</a></p>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default App;
