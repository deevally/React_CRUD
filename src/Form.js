import React, { Component } from 'react';


class Form extends Component {
   
   constructor(props){
       super(props)
       this.initialData = {
           name: "",
           job : ""
       }

       this.state = this.initialData
   }

   handleChange = event =>{
       const { name, value } = event.target 

       this.setState({
           [name] : value,
       })
   }

    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialData)
    }
render(){
      const { name, job } = this.state;

    return (
      <form action="">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
}
}
 
export default Form;