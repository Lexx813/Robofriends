import React, { Component } from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
   state = {
      robots: [],
      searchField: '',
   };
   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(users => this.setState({ robots: users }));
   }

   onSearchChange = e => {
      // Assigning to the state the value we get from the input
      this.setState({ searchField: e.target.value });
   };
   render() {
      const { robots, searchField } = this.state;
      // This filters through the array to include what is typed in the input
      const filteredRobots = robots.filter(robot => {
         return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });
      return !robots.length ? (
         <h1>LOADING</h1>
      ) : (
         <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            {
               // now we only show the filtered result
            }
            <Scroll>
               <CardList robots={filteredRobots} />
            </Scroll>
         </div>
      );
   }
}

export default App;
