import React from 'react';

class HornedBeast extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            favorites: 0
        }
    }
    voteClick = () => this.setState({favorites: this.state.favorites + 1});
    render() {
        return (
            <div className="beast">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <p>👹: {this.state.favorites}</p>
                <img
                    src={this.props.img}
                    alt={this.props.description}
                    onClick={this.voteClick}
                />
            </div>
        )
    }
}

export default HornedBeast;
