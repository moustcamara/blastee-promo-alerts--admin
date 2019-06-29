import React from 'react';


function WidgetListSingle(props) {

	return (

		<li style={{marginBottom: '30px'}}>
			<p style={{marginBottom: '10px'}}><strong>{props.title}</strong></p>
			<ul>
				<li>{props.widgetType}</li>
				<li>{props.status}</li>
				<li>{props.creationDate}</li>
			</ul>
		</li>

	)


}

export default WidgetListSingle;