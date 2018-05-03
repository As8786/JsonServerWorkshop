import React from 'react'

class SingleContact extends React.Component{
    render(){
        return <div className="single-contact">

           <h1> Name :  {this.props.el.name} </h1>
           <h5> Telephone : {this.props.el.telephone} </h5>
           <h5> Email : {this.props.el.email} </h5>
           <h5> Adress : {this.props.el.adress} </h5>
           <input type="button" value="access to contact" onClick={()=>this.props.indexOfSelectedContact(this.props.el.id)} />
        </div>
    }
}

export default SingleContact