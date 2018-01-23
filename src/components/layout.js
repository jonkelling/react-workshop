import React from 'react';
import Menu from './menu.js';
import Header from './header.js'
import Footer from './footer.js'
export default class Layout extends React.Component{
	render() {
		return <div>
			<Header/>
			<Menu/>
			<div>Content</div>
			<Footer />
		</div>;
	}
}