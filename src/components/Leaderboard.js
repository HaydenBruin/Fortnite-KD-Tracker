import React from 'react';
import DefaultLayout from './DefaultLayout.js';

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiurl: "http://fortnite.bruindev.com",
            leaderboard: [],
            hasLoaded: false
        };
        // LOAD PLATFORM DATA
        fetch(this.state.apiurl + "/api/loadLeaderboard.php?leaderboard=" + this.props.match.params.leaderboard)
            .then((resp) => resp.json())
            .then(data => {
                this.setState({ leaderboard: data, hasLoaded: true });
            }
        )
    }

    render() {
        if(this.state.hasLoaded)
        {
            return (
                <DefaultLayout>
                    <div className="section page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 content">
                                    <h1>{this.state.leaderboard.leaderboard.title}</h1>
                                    <p>{this.state.leaderboard.leaderboard.description}</p>

                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Player</th>
                                                <th>Solo K/D</th>
                                                <th>Duo K/D</th>
                                                <th>Squad K/D</th>
                                                <th>Overall K/D</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.leaderboard.players.map((field, i) => {
                                                return <tr key={i}> 
                                                        <td>{i + 1}</td>
                                                        <td>Mr Haydz</td>
                                                        <td>{field['solo_kd']}</td>
                                                        <td>{field['duo_kd']}</td>
                                                        <td>{field['squad_kd']}</td>
                                                        <td>{field['overall_kd']}</td>
                                                    </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </DefaultLayout>
            );
        }
        else
        {
            return (
                <DefaultLayout>
                    <div className="section page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 content">
                                    <h1>Loading...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </DefaultLayout>
            );
        }
    }
}

export default Leaderboard;
