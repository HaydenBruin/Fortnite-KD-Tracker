import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            platform: 'pc',
            apikey: '41c2a2e1-936f-4a54-85a0-8ebba5f73832'
        };

        // HANDLE SUBMIT
        this.handleSubmit = this.handleSubmit.bind(this);

        // HANDLE FIELDS
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePlatform = this.handleChangePlatform.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var url = "http://fortnite.bruindev.com/api/trackUser.php?platform=" + this.state.platform + "&username=" + this.state.username;
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            }).then(function(response) {
                //response.status     //=> number 100–599
                //response.statusText //=> String
                //response.headers    //=> Headers
                //response.url        //=> String

                alert(response.text());
            }, function(error) {
                //error.message //=> String
                alert(error.message);
        })
        
    }
    handleChangeUsername(event) { this.setState({username: event.target.value}); }
    handleChangePlatform(event) { this.setState({platform: event.target.value}); }

    render() {
        return (
            <div className="App">
                <div className="section hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Fortnite Skill Tracker</h1>
                                <h2>Enter your Epic Games username below to start having your KD tracked</h2>
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
                                                <input type="text" name="username" placeholder="Your Epic Games Username..." value={this.state.username} onChange={this.handleChangeUsername} />
                                            </div>
                                            <div className="col-md-3 column">
                                                <select name="platform" value={this.state.platform} onChange={this.handleChangePlatform}>
                                                    <option value="pc">PC</option>
                                                    <option value="ps4">PS4</option>
                                                    <option value="xbox">XBOX</option>
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
                                <p>Website branded & powered by <a href="https://haydenbruin.com" target="_blank" rel="noopener noreferrer">Bruin Development</a></p>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default App;
