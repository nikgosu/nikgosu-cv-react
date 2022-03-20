import React from 'react'
import MyLabel from "../MyLabel/MyLabel"

const MyTextAreaGroup = () => {
	return (
		<div className='form-group'>
			<MyLabel htmlFor='text' text='Вашe сообщение:'/>
			<br/>
			<textarea name="" id="text" cols="15" rows="2"/>
		</div>
	)
}

export default MyTextAreaGroup