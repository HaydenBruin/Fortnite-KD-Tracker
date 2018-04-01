import React from 'react';
import { Link } from 'react-router-dom';

class DefaultLayout extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/">
                        <img src="/images/logo.png" alt="Fortnite Logo"/>
                    </Link>
                </header>

                { this.props.children }
                
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>Website branded & powered by <a href="https://haydenbruin.com" target="_blank" rel="noopener noreferrer">Hayden Bruin</a> - <Link to="/api/">API Information</Link> - <Link to="/fortnite-news/">Fortnite News</Link></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default DefaultLayout;
