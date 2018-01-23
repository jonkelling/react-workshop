import React from 'react';
import Header from './header'
export default class Layout extends React.Component{
	render() {
		return <div>
			<Header />
			<div>menu fluffy</div>
			<div>Content</div>
			<div>Footer</div>
		</div>;
	}
}