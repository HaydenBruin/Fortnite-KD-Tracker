import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiurl: 'http://fortnite.bruindev.com',
            user: []
        };
    }

    componentDidMount() {

        // LOAD PLATFORM DATA
        fetch(this.state.apiurl + "/api/loadUser.php?username=" + this.props.match.params.username)
            .then((resp) => resp.json())
            .then(data => {
                this.setState({ user: data });
            }
        )
    }

    render() {
        return (
            <div className="User">
                
                <div className="section page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Fortnite Skill Tracker</h1>
                                <h2>Viewing statistics overview for {this.props.match.params.username}</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default User;
