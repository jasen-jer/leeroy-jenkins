import React, { Component } from 'react';
import styled from 'styled-components'
import Field from './Field'
import FormButton from './FormButton'



const ContactForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2{
    font-size: 2 em;
    font-family: 'Oswald', sans-serif;
  }
  p{
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.3em;
  }

  textarea {
    width: 50%;
    height: 20%;
  }

`

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
      <ContactForm>
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
        label="Name"
        onChange={(event)=> this.updateField('name', event.target.value)} 
        value={this.state.name} 
        />
        {/* Email Field */}
        <Field
        label="Email"
        onChange={(event)=> this.updateField('email', event.target.value)} 
        value={this.state.email} 
        />
        {/* Message Field */}
        <textarea
        rows="3"
        cols="3"
        placeholder="Message"
        onChange={(event)=> this.updateField('message', event.target.value)} 
        value={this.state.message} 
        ></textarea>
        {/* submit button */}
        <FormButton formValues={this.state} email="JasenABaker@gmail.com" />
        </ContactForm>
      </div>
    );
  }
}

export default Contact;