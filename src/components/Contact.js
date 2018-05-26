import React, { Component } from 'react';

// probably needs to be stateful instead of stateless
class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
    }
  render() {
    return (
      <div className="blue-see-thru">
      <h2>Contact Us</h2>
      <p>We would love to hear from you and about your project.</p>
       <form method="POST">
       <label htmlFor="name">Name</label>
    <input type="text" name="name" />

    <label htmlFor="email">Email</label>
    <input type="email" name="email" />

    <label htmlFor="message">Message</label>
    <textarea name="message" rows="3"></textarea>

    <input type="submit" />
  </form>
        
      </div>
    );
  }
}

export default Contact;