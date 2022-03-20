import React from 'react'
import FormGroup from "./FormGroup"

const MyForm = () => {
	return (
		<form action="">
			<div className='row'>
				<FormGroup htmlFor='name' text='Ваше имя:' type='text' id='name' placeholder='Введите ваше имя...'/>
				<FormGroup htmlFor='email' text='Ваш Email:' type='email' id='email' placeholder='Введите email...'/>
			</div>
		</form>
	)
}

export default MyForm