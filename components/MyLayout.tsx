import Header from './Header';
import * as React from "react"

const Layout = (props) => (
	<React.Fragment>
		<Header />
		{props.children}
	</React.Fragment>
);

export default Layout;
