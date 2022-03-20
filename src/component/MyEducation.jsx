import React from 'react'
import MyTable from "./UI/MyTable/MyTable"

const MyEducation = (props) => {
	return (
		<div className='card bg-red'>
			<h2>Мое образование</h2>
			<MyTable arr={props.arr}/>
		</div>
	)
}

export default MyEducation