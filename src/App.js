import React, { Component } from "react";
import './components/App.css';
import Title from "./components/title";
// import { tsPropertySignature } from '@babel/types';
import friends from "./friends.json";
import PresPics from "./components/body";
import Wrapper from "./components/wrapper.js";

const shuffle = require("shuffle-array");
let bestScore = 0;
let currScore = 0;

class App extends Component {
  state = {
    friends
  };

  handleClick = (e, president) => {
    if (president.beenClicked === "yes") {
      if (currScore > bestScore) {
        bestScore = currScore;
      }
      // friends.forEach(item =>{})
      currScore = 0;
      shuffle(friends);
      friends.map(item =>{return item.beenClicked = "no"});
      this.setState({ friends: friends })
      console.log(friends.map(item =>{return item.beenClicked}))
    }
    else {
      shuffle(friends);
      this.setState({ friends: friends });
      president.beenClicked = "yes";
      currScore++;
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    return (
      <Wrapper>
        <Title>Presidents Clicky Memory Game</Title>
        <h4 className="instructions">Click on a President to earn points, but don't click a president more than once!</h4>
        <h4 className="bestScore">{"Best Score: " + bestScore}</h4>
        <h4 className="currScore">{"Current Score: " + currScore}</h4>
        <ul className="gallery">
          {this.state.friends.map((friend, index) => (            
            <div key={friend.id} onClick={((e) => this.handleClick(e, friend))} className={this.state.selectedItem === friend.id ? "on" : "off"}>
              <PresPics
                id={friend.id}
                name={friend.name}
                image={friend.image}
                beenClicked={friend.beenClicked}
              />
            </div>
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default App;