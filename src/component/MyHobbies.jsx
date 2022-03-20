import React from 'react'
import MyOlList from "./UI/MyOlList/MyOlList"

const MyHobbies = (props) => {

	return (
		<div className='card bg-yellow'>
			<h2>Мои хобби</h2>
			<MyOlList itemArr={props.hobbies}/>
		</div>
	)
}

export default MyHobbies