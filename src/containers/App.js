import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchKey: ""
            
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchCallback = (event) => {
        this.setState({ searchKey: event.target.value });
    }

    render() {

        const searchedList = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchKey.toLowerCase());
        })

       if(this.state.robots.length===0){
        return <h1 className='f1 tc'>Loading..</h1>
       }else{
        return (
            <React.Fragment>
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchCallback={this.onSearchCallback} />
                    <CardList robots={searchedList} />
                </div>
            </React.Fragment>
        );
    }
}

}

export default App;
