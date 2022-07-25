import React from 'react';
import HornedBeast from './HornedBeast';
import beasts from './data.json';


class Main extends React.Component {
    render() {
        return (
            <>
                {beasts.map((index,i) =>
                    <HornedBeast
                        title={beasts[i].title}
                        img={beasts[i].image_url}
                        description={beasts[i].description}
                    />
                )}
            </>

        )
    }
}

export default Main;