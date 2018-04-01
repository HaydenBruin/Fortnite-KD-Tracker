import React from 'react';
import Displaystatistics from './DisplayStatistics.js';
import DefaultLayout from './DefaultLayout.js';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiurl: 'https://fortnitekd.club',
            user: [],
            hasLoaded: false
        };
        
        // LOAD PLATFORM DATA
        fetch(this.state.apiurl + "/api/loadUser.php?username=" + this.props.match.params.username)
            .then((resp) => resp.json())
            .then(data => {
                this.setState({ user: data, hasLoaded: true });
            }
        )
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
