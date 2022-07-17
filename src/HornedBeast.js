import React from "react";

class HornedBeast extends React.Component {
    render() {
        return (
            <>
               <h2>{this.props.title}</h2>
               <img>alt={this.props.alt},src={this.props.src}</img> 
               <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast;
