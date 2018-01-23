import React from 'react';
import Menu from './menu';

export default class Layout extends React.Component {
	render() {
		return <div>
			<div><h1>Team 2 Header</h1></div>
			<Menu />
			<div>Content</div>
			<div>Footer</div>
		</div>;
	}
}