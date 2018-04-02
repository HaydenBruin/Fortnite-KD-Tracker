import React from 'react';
import DefaultLayout from './DefaultLayout.js';
import { APIUrl } from './../helpers.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            platform: '1',
            apiurl: APIUrl,
            errorMSG: '',
            loading: false,
            platforms: []
        };
        console.log(APIUrl);
        // HANDLE SUBMIT
        this.handleSubmit = this.handleSubmit.bind(this);

        // HANDLE FIELDS
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePlatform = this.handleChangePlatform.bind(this);
    }
    
    componentDidMount() {
        // LOAD PLATFORM DATA
        fetch(this.state.apiurl + "/api/loadPlatforms.php")
            .then((resp) => resp.json())
            .then(data => {
                this.setState({ platforms: data });
            }
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        var url = this.state.apiurl + "/api/createUser.php?platform=" + this.state.platform + "&username=" + this.state.username;
        this.setState({ errorMSG: "", loading: true });
        fetch(url)
            .then((resp) => resp.json())
            .then(data => {
                if(data['status'] === 1 || data['status'] === 3) // IF the account was created OR IF the account already exists, redirect them as well
                {
                    this.props.history.push("/user/" + this.state.username + "/");
                }
                else if(data['status'] === 2) // IF account didn't exist
                {
                    this.setState({ loading: false, errorMSG: "Sorry, we could not find a player with that username" });
                }
                else this.setState({ loading: false, errorMSG: "Please populate the required fields" });
            }
        )
    }
    handleChangeUsername(event) { this.setState({username: event.target.value}); }
    handleChangePlatform(event) { this.setState({platform: event.target.value}); }

    render() {
        return (
            <DefaultLayout>
                <div className="section hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Fortnite KD Tracker</h1>
                                <h2>Enter your Epic Games username below to start having your KD tracked</h2>
                            </div>
                            <div className={ this.state.errorMSG ? 'col-md-12' : 'hide'  }>
                                <div className="alert alert-danger">{this.state.errorMSG}</div>
                            </div>
                            <div className="col-md-12">
                                <form onSubmit={this.handleSubmit}>
                                    <div className={this.state.loading ? "loading search" : "search"}>
                                        <div className="row">
                                            <div className="col-md-7 column">
                                                <input type="text" name="username" placeholder="Your Epic Games Username..." value={this.state.username} onChange={this.handleChangeUsername} />
                                            </div>
                                            <div className="col-md-3 column">
                                                <select name="platform" value={this.state.platform} onChange={this.handleChangePlatform}>
                                                    {
                                                        this.state.platforms.map(function(platform, index) {
                                                            return <option value={platform.num} key={index}>{platform.title}</option>
                                                        })
                                                    }
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
            </DefaultLayout>
        );
    }
}

export default Home;
