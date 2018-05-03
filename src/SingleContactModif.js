import React from 'react'
import axios from 'axios'


class SingleContactModif extends React.Component{
    
    constructor(props){
        super(props)
        this.state={}
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidMount = () => {
        this.setState({
            ...this.props.el[0]
        })
    }

    modifyContact = () => {
        let modifyUser = this.state
        axios.put('/contacts/'+this.state.id ,{...modifyUser}).then(
            this.props.modifyDisplay()
        )
    }

    deleteContact = () => {
        axios.delete('/contacts/'+this.state.id).then(
            this.props.modifyDisplay()
        )
    }

    render(){
        console.log(this.state.id)
        return <div className="single-contact">
             <form>
                
                <label> Name </label>
                <input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                
                <label> Telephone Number </label>
                <input placeholder="Telephone Number" name="telephone" value={this.state.telephone} onChange={this.handleChange}/>
                
                <label> Email </label>
                <input placeholder="Email" name="email"  value={this.state.email} onChange={this.handleChange} />
                
                <label> Adress </label>
                <input placeholder="Adress" name="adress"  value={this.state.adress} onChange={this.handleChange}/>
                
                <input type="submit" value="Modify contact" className="btn" onClick={this.modifyContact} />
                <input type="submit" value="Delete contact" className="btn" onClick={this.deleteContact} />
                 

             </form>   

        </div>
    }
}

export default SingleContactModif