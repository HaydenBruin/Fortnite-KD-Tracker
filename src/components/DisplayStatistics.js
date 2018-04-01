import React from 'react';

class Displaystatistics extends React.Component {
    render() {
        if(this.props.data)
        {
            return (
                <div className="row gap">
                    <div className="col-md-12">
                        <h3>- {this.props.title} -</h3>
                    </div>
                    <div className="col-md-4">
                        <h4>{this.props.data['solo']['title']}</h4>
                        <p className="large">{this.props.data['solo']['kd']}</p>
                        <p className={this.props.data['solo']['kd'] === "N/A" ? "hide" : "matches"}>{this.props.data['solo']['kills']} Kills - {this.props.data['solo']['matches']} Matches - {this.props.data['solo']['wins']} Wins</p>
                    </div>
                    
                    <div className="col-md-4">
                        <h4>{this.props.data['duo']['title']}</h4>
                        <p className="large">{this.props.data['duo']['kd']}</p>
                        <p className={this.props.data['duo']['kd'] === "N/A" ? "hide" : "matches"}>{this.props.data['duo']['kills']} Kills - {this.props.data['duo']['matches']} Matches - {this.props.data['duo']['wins']} Wins</p>
                    </div>
                    
                    <div className="col-md-4">
                        <h4>{this.props.data['squad']['title']}</h4>
                        <p className="large">{this.props.data['squad']['kd']}</p>
                        <p className={this.props.data['squad']['kd'] === "N/A" ? "hide" : "matches"}>{this.props.data['squad']['kills']} Kills - {this.props.data['squad']['matches']} Matches - {this.props.data['squad']['wins']} Wins</p>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div className="row gap">
                    <div className="col-md-12 text-center">
                        <h1>Loading {this.props.title}...</h1>
                    </div>  
                </div>
            );
        }
    }
}

export default Displaystatistics;
