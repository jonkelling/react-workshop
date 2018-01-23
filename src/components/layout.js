import React from 'react';
<<<<<<< Updated upstream
import Header from './header'
import Footer from './footer'


export default class Layout extends React.Component{
	render() {
		return <div>
			<Header />
			<div>menu fluffy</div>
=======
import Menu from './menu.js';
export default class Layout extends React.Component{
	render() {
		return <div>
			<div>Header</div>
			<Menu/>
>>>>>>> Stashed changes
			<div>Content</div>
			<Footer />
		</div>;
	}
}