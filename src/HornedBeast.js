import React from 'react';

class HornedBeast extends React.Component {
    // constructor (props){
    //     super(props);
    //     this.state = {

    //     }
    // }
    render() {
        return (
            <div className="beast">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <img
                    src={this.props.img}
                    alt={this.props.description}
                />
            </div>
        )
    }
}

export default HornedBeast;
