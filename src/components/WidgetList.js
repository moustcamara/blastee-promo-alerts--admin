import React from 'react';
import WidgetListSingle from './WidgetListSingle';

function WidgetList(props) {

	return (
		<React.Fragment>
			<p><strong>User:</strong> {props.user}</p>
			<h3>{props.title}</h3>
			<ul>
			{props.dataSource.map(x => 
				<WidgetListSingle 
					title={x.title}
					status={x.status}
					widgetType={x.widgetType}
					creationDate={x.creationDate} 
				/>
			)}
			</ul>
		</React.Fragment>
	)

}

export default WidgetList;