import React from 'react';
import Menu from './menu';
import Header from './header';

import Footer from './footer';

export default class Layout extends React.Component {
	render() {
		return <div>
			<Header></Header>
			<Menu />			
			<div>Content</div>
			<Footer />
		</div>;
	}
}