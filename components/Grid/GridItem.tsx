import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const style: any = {
	grid: {
		position: 'relative',
		width: '100%',
		minHeight: '1px',
		paddingRight: '15px',
		paddingLeft: '15px',
		flexBasis: 'auto',
		marginTop: '15px'
	}
};

function GridItem({ justify, alignItems, classes, children, className, ...rest }: Props) {
	return (
		<Grid item justify={justify} alignItems={alignItems} {...rest} className={classes.grid + ' ' + className}>
			{children}
		</Grid>
	);
}

interface Props {
	justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
	alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
	className?: string;
	classes: any;
	children: React.ReactChild;
	rest: any;
}

export default withStyles(style)(GridItem);
