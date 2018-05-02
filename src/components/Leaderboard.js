import React from 'react';
import DefaultLayout from './DefaultLayout.js';

class Leaderboard extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="section page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 content">
                                <h1>Your Group Title</h1>
                                <p>A group of mighty warriors battling to be the best</p>

                                <table width="100%">
                                    <thead>
                                        <th>#</th>
                                        <th>Player</th>
                                        <th>Solo K/D</th>
                                        <th>Duo K/D</th>
                                        <th>Squad K/D</th>
                                        <th>Overall K/D</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mr Haydz</td>
                                            <td>1.00</td>
                                            <td>1.00</td>
                                            <td>1.00</td>
                                            <td>1.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default Leaderboard;
