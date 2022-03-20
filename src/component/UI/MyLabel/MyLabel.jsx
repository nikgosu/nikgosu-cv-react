import React from 'react'

const MyLabel = ({htmlFor, text}) => {
	return (
		<label htmlFor={htmlFor}>{text}</label>
	)
}

export default MyLabel