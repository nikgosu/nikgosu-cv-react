import React from 'react'

const MyInput = ({placeholder, className, type, value}) => {
	return (
		<input className={className} value={value} placeholder={placeholder} type={type}/>
	)
}

export default MyInput