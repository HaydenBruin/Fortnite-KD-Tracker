import React from 'react';
import DefaultLayout from './DefaultLayout.js';

class FortniteNews extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            news: [],
            newsLoaded: false,
            apiurl: 'https://fortnitekd.club'
        };

        
        // LOAD PLATFORM DATA
        fetch(this.state.apiurl + "/api/loadFortniteNews.php")
            .then((resp) => resp.json())
            .then(data => {
                this.setState({ news: data, newsLoaded: true });
            }
        )
    }
    render() {
        if(this.state.newsLoaded === true)
        {
            return (
                <DefaultLayout>
                    <div className="section page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 content">
                                    <h1>Fortnite News</h1>
                                    {
                                        //console.log(this.state.news.battleroyalenews.news.messages)
                                        this.state.news.battleroyalenews.news.messages.map(function(article, index) {
                                            return (
                                                <div className="news" key={index}>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <img src={article.image} alt={article.title} />
                                                        </div>
                                                        <div className="col-md-9">
                                                            <h2>{article.title}</h2>
                                                            <p>{article.body}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
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
                                    <h1>Fortnite News</h1>
                                    <p>Loading News...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DefaultLayout>
             );
        }
    }
}

export default FortniteNews;
