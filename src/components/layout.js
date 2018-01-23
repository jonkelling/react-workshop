import React from 'react';

import Footer from './footer';

export default class Layout extends React.Component {
	render() {
		return <div>
			<div><h1>Team 2 Header</h1></div>
			<div>Menu</div>
			<div>Content</div>
			<Footer />
		</div>;
	}
}