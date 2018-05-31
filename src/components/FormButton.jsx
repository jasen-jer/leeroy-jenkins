import React, { Component } from 'react'
import PropTypes from 'prop-types'


class FormButton extends Component {
    static PropTypes = {
        email: PropTypes.string.isRequired,
        formValues: PropTypes.shape({
            name: PropTypes.string.isRequired, 
            email: PropTypes.string.isRequired, 
            message: PropTypes.string.isRequired,
        }).isRequired
    }
    constructor(props){
    super(props)
    this.state = {
        isClicked: false,
    }
    this.logFormToConsole = this.logFormToConsole.bind(this)
}

    logFormToConsole(event){
        console.log(`Form Values are ${this.props.formValues}`)
        this.setState({isClicked: true})
    }

    
    render(){
        const html = `Name: ${this.props.formValues.name}
                        Email: ${this.props.formValues.email}
                        Message: ${this.props.formValues.message}`
    return(
        <a class="btn"
        href={`mailto:${this.props.email}?subject=More%20Information&body=${html}`}
        disabled={this.state.isClicked}
        onClick={this.logFormToConsole}
        >
        Contact Us
        </a>
    )
}

}



export default FormButton