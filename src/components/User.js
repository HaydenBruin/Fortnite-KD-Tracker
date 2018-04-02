import React from 'react';
import Displaystatistics from './DisplayStatistics.js';
import DefaultLayout from './DefaultLayout.js';
import { APIUrl } from './../helpers.js';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiurl: APIUrl,
            user: [],
            hasLoaded: false,
            email: ""
        };
        // LOAD PLATFORM DATA
        fetch(this.state.apiurl + "/api/loadUser.php?username=" + this.props.match.params.username)
            .then((resp) => resp.json())
            .then(data => {
                this.setState({ user: data, hasLoaded: true });
            }
        )
        
        // HANDLE SUBMIT
        this.handleSubmit = this.handleSubmit.bind(this);

        // HANDLE FIELDS
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    handleChangeEmail(event) { this.setState({email: event.target.value}); }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ errorMSG: "" });
        if(this.validateEmail(this.state.email))
        {
            this.setState({ errorMSG: "", loading: true });
            fetch(this.state.apiurl + "/api/createDailyEmail.php?username=" + this.state.username)
                .then((resp) => resp.json())
                .then(data => {

                    this.setState({ errorMSG: "", loading: false });
                }
            )
        }
        else
        {
            this.setState({ errorMSG: "Please include a valid email address" });
        }
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        return (
            <DefaultLayout>
                <div className="User">
                    <div className="section page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>Viewing statistics overview for {this.props.match.params.username}</h1>
                                    
                                    <Displaystatistics title="Daily Statistics" data={ this.state.hasLoaded ? this.state.user.playlists.daily : null }  />
                                    <Displaystatistics title="Weekly Statistics" data={ this.state.hasLoaded ? this.state.user.playlists.weekly : null } />

                                    <h1>Want daily emails of {this.props.match.params.username}'s KD?</h1>

                                    <div className={ this.state.errorMSG ? 'col-md-12' : 'hide'  }>
                                        <div className="alert alert-danger">{this.state.errorMSG}</div>
                                    </div>

                                    <form onSubmit={this.handleSubmit}>
                                        <div className={this.state.loading ? "loading search" : "search"}>
                                            <div className="row">
                                                <div className="col-md-10 column">
                                                    <input type="text" name="username" placeholder="Your Email Address..." value={this.state.email} onChange={this.handleChangeEmail} />
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
                </div>
            </DefaultLayout>
        );
    }
}

export default User;
