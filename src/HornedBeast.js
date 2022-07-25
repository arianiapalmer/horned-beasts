import React from 'react';
import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }
    }
    voteClick = () => this.setState({ favorites: this.state.favorites + 1 });
    render() {
        return (
            <Card style={{ width: '18rem' }} className="h-100">
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>👹: {this.state.favorites}</Card.Text>
                </Card.Body>
                <Card.Img
                    src={this.props.img}
                    alt={this.props.description}
                    onClick={this.voteClick}
                />
            </Card>
        )
    }
}

export default HornedBeast;

