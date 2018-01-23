import React from 'react';
import Header from './header'
import Footer from './footer'


export default class Layout extends React.Component{
	render() {
		return <div>
			<Header />
			<div>menu fluffy</div>
			<div>Content</div>
			<Footer />
		</div>;
	}
}