import React from 'react'
import PropTypes from 'prop-types'


const Field = (props)=>{
    return(
        <div>
    <label>{props.label}</label>
    <input 
    type={props.textarea ? 'textarea' : 'text'}
    rows="10"
    cols="30"
    onChange={props.onChange}
    value={props.value}/>
    </div>
    )
}


Field.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    textarea: PropTypes.bool.isRequired,
}

Field.defaultProps ={
    textarea: false,

}
export default Field