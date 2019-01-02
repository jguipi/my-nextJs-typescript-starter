import '../styles/main.scss';
import Layout from '../components/MyLayout';
import axios from 'axios';
import { i18n, Link, withNamespaces } from '../i18n';
import * as React from 'react';

type IProps = {
	shows: any;
	t: any;
	namespacesRequired: any;
};

class Index extends React.Component<IProps, {}> {
	static async getInitialProps() {
		const responseData = await axios({
			method: 'GET',
			url: 'https://api.tvmaze.com/search/shows?q=batman'
		});

		return {
			namespacesRequired: [ 'common', 'footer' ],
			shows: responseData.data
		};
	}
	render() {
		const { t } = this.props;
		return (
			<Layout>
				<h1>Test</h1>
			</Layout>
		);
	}
}

export default withNamespaces('common')(Index);
