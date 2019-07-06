import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import WidgetListSingle from './WidgetListSingle';


function WidgetList(props) {

	const useStyles = makeStyles(theme => ({
		  control: {
		    padding: theme.spacing(2),
		  },
	}));

 	const [spacing, setSpacing] = React.useState(2);
 	const classes = useStyles();

	return (
		<React.Fragment>
			<p><strong>User:</strong> {props.user}</p>
			<h3>{props.title}</h3>

			<Grid xs={12}>
				<Grid container justify="center" spacing={spacing}>
					{props.dataSource.map((x,i) => 
						<WidgetListSingle 
							key={'_' + i}
							title={x.title}
							status={x.status}
							widgetType={x.widgetType}
							creationDate={x.creationDate} 
						/>
					)}
				</Grid>
			</Grid>

		</React.Fragment>
	)

}

export default WidgetList;