import React from "react";
import HornedBeast from './HornedBeast'


class Main extends React.Component {
    render() {
        return (
            <>
               <h2>This is my main</h2> 
               <HornedBeast title={'Ram'} imgLink={'https://images.unsplash.com/photo-1490739043913-239b6cdf4084?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1839&q=80'} description={'Big and fierce'} />
               <HornedBeast title={'Bull'} imgLink={'https://images.unsplash.com/photo-1558172475-f02feeed9c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80'} description={'Likes the color red alot'} />

            </>
        )
    }
}

export default Main;

