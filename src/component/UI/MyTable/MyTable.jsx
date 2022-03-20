import React from 'react'

const MyTable = ({...props}) => {

	const keys = Object.keys(props.arr[0])

	return (
		<table className='table'>
			<tbody>
			{props.arr.map((item, index) =>
				<tr key={index}>
					<td key={index}>{item[keys[0]]}</td>
					<td key={index+1}>{item[keys[1]]}</td>
					<td key={index+2}>{item[keys[2]]}</td>
				</tr>
			)}
			</tbody>
		</table>
	)
}

export default MyTable