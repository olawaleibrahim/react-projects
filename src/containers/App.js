import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event_) => dispatch(setSearchField(event_.target.value))
    }
}

function App(store) {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
        fetch("https://jsonplaceholder.typicode.com/users").then(
            response => response.json()).then(
                users => setRobots(users))
    }, [count]); // use count

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <button onClick={() => setCount(count + 1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);