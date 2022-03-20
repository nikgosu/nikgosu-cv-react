import React from 'react'

const MyOlList = ({itemArr}) => {
	return (
		<ol className='list'>
			{itemArr.map((hobbie, index )=> <li key={index}>{hobbie}</li>)}
		</ol>
	)
}

export default MyOlList