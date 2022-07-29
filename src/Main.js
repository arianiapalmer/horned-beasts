import React from 'react';
import HornedBeast from './HornedBeast';
import beasts from './data.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



class Main extends React.Component {
    render() {
        return (
            <Container>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {beasts.map((index, i) =>
                        <Col>
                            <HornedBeast
                                title={beasts[i].title}
                                img={beasts[i].image_url}
                                description={beasts[i].description}
                            />
                        </Col>
                    )}
                </Row>
            </Container>

        )
    }
}

export default Main;

