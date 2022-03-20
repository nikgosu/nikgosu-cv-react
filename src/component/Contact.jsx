import React from 'react'
import MyForm from "./MyForm"
import MyTextAreaGroup from "./UI/MyTextAreaGroup/MyTextAreaGroup"
import MyInput from "./UI/MyInput/MyInput"

const Contact = () => {
	return (
		<div className='contact'>
			<h2>Связаться со мной</h2>
			<MyForm/>
			<MyTextAreaGroup/>
			<MyInput type='submit' className='btn' value='Связаться!'/>
		</div>
	)
}

export default Contact