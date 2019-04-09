import '../styles/main.scss';
import Layout from '../components/MyLayout';
// import axios from 'axios';
import { withNamespaces } from '../i18n';
import * as React from 'react';

type IProps = {
	shows: any;
	t: any;
	namespacesRequired: any;
};

class Index extends React.Component<IProps, {}> {
	static async getInitialProps() {
		// const responseData = await axios({
		// 	method: 'GET',
		// 	url: 'https://api.tvmaze.com/search/shows?q=batman'
		// });

		return {
			namespacesRequired: [ 'common', 'footer' ],
			// shows: responseData.data
		};
	}
	render() {
		const { t } = this.props;
		return (
			<Layout>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6" style={{ backgroundColor: 'red' }}>
							6
						</div>
						<div className="col-md-1" style={{ backgroundColor: 'blue' }}>
							1
						</div>
						<div className="col-md-5" style={{ backgroundColor: 'red' }}>
							5
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withNamespaces('common')(Index);
