import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Switch from '@material-ui/core/Switch';

import { green } from '@material-ui/core/colors';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import Icon from '@material-ui/core/Icon';




function WidgetListSingle(props) {

	const useStyles = makeStyles(theme => ({
		  root: {
		    flexGrow: 1,
		  },
		  paper: {
		    height: 'auto',
		    width: 'auto',
		    padding: theme.spacing(3)
		  },
		  control: {
		    padding: theme.spacing(2),
		  },
	}));

 const [spacing, setSpacing] = React.useState(2);
 const classes = useStyles();


 const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

	return (
		<Grid key={props.key} item>
		    <Paper className={classes.paper}>
		    	<Box>
		    		<Icon fontSize="small">edit</Icon>
		    		<Icon fontSize="small">delete</Icon>
		    	</Box>    	
		    	<Box>
		    		<Box fontSize="h6.fontSize" fontWeight={500}>{props.title}</Box>
		    		<Switch
				        checked={props.status === "active" && state.checkedA}
				        onChange={handleChange('checkedA')}
				        value={props.status === "active" && state.checkedA}
				        inputProps={{ 'aria-label': 'secondary checkbox' }}
				      />
		    	</Box>		    			    	 
			     <Breadcrumbs aria-label="Breadcrumb">
		            <Typography size="small" color="pink">{props.widgetType}</Typography>
		          	<Typography size="small" color="textPrimary">{props.creationDate}</Typography>		          	
		        </Breadcrumbs>
		    </Paper>
		</Grid>
	)


}

export default WidgetListSingle;