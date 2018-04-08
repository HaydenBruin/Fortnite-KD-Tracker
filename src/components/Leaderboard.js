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
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default Leaderboard;
