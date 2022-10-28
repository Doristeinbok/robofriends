import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";


//App is a smart component (it has state)
//SearchBox and CardList are just pure functins (dumb functions)
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfiled: ''
        };
    }

    componentDidMount() {
        //fetch is an http request mehod. it comes with the browser, and it's part of the window object
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            this.setState({robots: users})})
    }

    onSearchChange = (e) => {
        this.setState({ searchfiled: e.target.value })
    } 
    
    render() {
        const { robots, searchfiled } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfiled.toLocaleLowerCase());
        })
        return !robots.length ? 
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}

export default App;