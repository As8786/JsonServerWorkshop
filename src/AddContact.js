import React from 'react'
import axios from 'axios'

class AddContact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            telephone:"",
            email:"",
            adress:""
        }
    }

    addNewUser = (e) => {
        let newUser = this.state
        e.preventDefault()
        axios.post('/contacts', {...newUser}).then(
            res=>this.initialiseState()
        )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    initialiseState = (e) => {
        this.setState({
            name:"",
            telephone:"",
            email:"",
            adress:""
        })
    }
    
    render(){
        return <div className="addContact-container">
                <h1>This is the Add Contact Page</h1>
             <form>
                
                <label> Name </label>
                <input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                
                <label> Telephone Number </label>
                <input placeholder="Telephone Number" name="telephone" value={this.state.telephone} onChange={this.handleChange}/>
                
                <label> Email </label>
                <input placeholder="Email" name="email"  value={this.state.email} onChange={this.handleChange} />
                
                <label> Adress </label>
                <input placeholder="Adress" name="adress"  value={this.state.adress} onChange={this.handleChange}/>
                
                <input type="submit" value="add contact" className="btn" onClick={this.addNewUser} />  

             </form>    

        </div>
    }
}


export default AddContact