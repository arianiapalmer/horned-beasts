import React from "react";

class HornedBeast extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <img src={this.props.imgLink} alt={this.props.description} />
            </>
        )
    }
}

export default HornedBeast;
