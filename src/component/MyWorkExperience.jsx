import React from 'react'
import MyTable from "./UI/MyTable/MyTable"

const MyWorkExperience = (props) => {

	return (
		<div className='card bg-green'>
			<h2>Опыт работы</h2>
			<MyTable arr={props.arr}/>
		</div>
	)
}

export default MyWorkExperience