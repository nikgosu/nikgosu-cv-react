import React from 'react'
import MyLabel from "./UI/MyLabel/MyLabel"
import MyInput from "./UI/MyInput/MyInput"

const FormGroup = ({htmlFor, text, type, id, placeholder}) => {
	return (
		<div className='form-group'>
			<MyLabel htmlFor={htmlFor} text={text}/>
			<MyInput type={type} id={id} placeholder={placeholder}/>
		</div>
	)
}

export default FormGroup