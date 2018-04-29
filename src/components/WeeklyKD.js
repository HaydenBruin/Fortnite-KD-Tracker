import React from 'react';
import Displaystatistics from './DisplayStatistics.js';

class WeeklyKD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiurl: "http://fortnite.bruindev.com",
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
            <div className="User">
                
                <div className="section page stream-element">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Displaystatistics title="Weekly Statistics" data={ this.state.hasLoaded ? this.state.user.playlists.daily : null }  />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default WeeklyKD;
