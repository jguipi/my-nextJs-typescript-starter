import * as React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const style = {
	grid: {
		marginTop: "15px",
		marginRight: '-15px',
		marginLeft: '-15px',
		width: 'auto'
	}
};

function GridContainer({ justify, alignItems, classes, className, ...props }: Props) {
	return (
		<Grid container justify={justify} alignItems={alignItems} {...rest} className={classes.grid + ' ' + className}>
			{props.children}
		</Grid>
	);
}

interface Props {
	justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
	alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
	className?: string;
	classes: any;
	children: React.ReactChild;
	props?: any;
}

export default withStyles(style)(GridContainer);
