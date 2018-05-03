import React from 'react'
import axios from 'axios'

import  SingleContact from './SingleContact'
import SingleContactModif from './SingleContactModif'

class ContactList extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            isSingleContactDisplayed : false,
            contact_list : [],
            selectedContact : ""
        }
    }

    componentDidMount = () => {
        axios.get('contacts').then(
            res=> this.populateContactList(res.data)
        )
    }     

    
    populateContactList = (value) => {
        this.setState({
            contact_list : this.state.contact_list.concat(value)
        })
    }
    

    toggleIsSingleContactDisplayed = () => {
        this.setState({
            isSingleContactDisplayed : !this.state.isSingleContactDisplayed
        })
    }

    handleSelectedContact = (value) => {
        this.setState({
            selectedContact : value
        })
    }

    render(){

        return( 
              <div>  
        {this.state.isSingleContactDisplayed || <div className="contact-list-container">
            
            <h1>This is the Contact List Page</h1>
            <div className="contact-list">
                  {this.state.contact_list.map((el,i)=><SingleContact el={el} indexOfSelectedContact={(value)=>{this.handleSelectedContact(value)
                                                                                                                this.toggleIsSingleContactDisplayed()}}/>)}  
            </div>
            </div>}

        {this.state.isSingleContactDisplayed && <div className="single-contact-display">
                <h1>This is the Contact Display</h1>   
                <SingleContactModif el={this.state.contact_list.filter(el => el.id === this.state.selectedContact)} modifyDisplay={this.toggleIsSingleContactDisplayed}/>
            </div>}
        
    </div>
        
    )    
    }

}


export default ContactList