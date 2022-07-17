import React from "react";
import HornedBeast from './HornedBeast'


class Main extends React.Component {
    render() {
        return (
            <>
               <h2>This is my main</h2> 
               <HornedBeast title={"Ram"} img={""} description={"Big and fierce"} />
               <HornedBeast title={"Bull"} img={""} description={"Likes the color red alot"} />

            </>
        )
    }
}

export default Main;

// title imageURL description