import React, { Component } from 'react';
import Field from './Field'
import FormButton from './FormButton'

// probably needs to be stateful instead of stateless
class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  updateField(field, value){
    this.setState({[field]: value})
  }
  render() {
    return (
      <div className="blue-see-thru">
        <h2>Contact Us</h2>
        <p>We would love to hear from you and about your project.</p>
        {/* <form method="POST">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" />

    <label htmlFor="email">Email</label>
    <input type="email" name="email" />

    <label htmlFor="message">Message</label>
    <textarea name="message" rows="3"></textarea>

    <input type="submit" />
  </form>
         */}
        {/* Name Field */}
        <Field 
        onChange={(event)=> this.updateField('name', event.target.value)} 
        value={this.state.name} 
        />
        {/* Email Field */}
        <Field 
        onChange={(event)=> this.updateField('email', event.target.value)} 
        value={this.state.email} 
        />
        {/* Message Field */}
        <Field 
        textarea 
        onChange={(event)=> this.updateField('message', event.target.value)} 
        value={this.state.message} 
        />
        {/* submit button */}
        <FormButton formValues={this.state} email="JasenABaker@gmail.com" />
      </div>
    );
  }
}

export default Contact;