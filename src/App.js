import React, { Component } from 'react';

import "./App.css"
import AddContact from './AddContact'
import ContactList from './ContactList'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isContactListDisplayed : true,
      isAddContactDisplayed : false,
    }
  }

  toggleIsContactListDisplayed = () => {
    this.setState({
      isContactListDisplayed : !this.state.isContactListDisplayed,
      isAddContactDisplayed : !this.state.isAddContactDisplayed
    })
  }

  toggleIsAddContactDisplayed = () => {
    this.setState({
      isAddContactDisplayed : !this.state.isAddContactDisplayed,
      isContactListDisplayed : !this.state.isContactListDisplayed
    })
  }

  render() {
    return (
      <div className="App">
        <div className="menu">
           <button onClick={this.state.isContactListDisplayed ? '' : this.toggleIsContactListDisplayed}> Contact List </button>
           <button onClick={this.state.isAddContactDisplayed ? '' : this.toggleIsAddContactDisplayed}> Add contact</button>
        </div>
        <div className="app-container">
           {this.state.isAddContactDisplayed && <AddContact />}
           {this.state.isContactListDisplayed && <ContactList />} 

        </div>
      </div>
    );
  }
}

export default App;
