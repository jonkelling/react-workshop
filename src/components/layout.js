import React from 'react';
<<<<<<< HEAD
import Menu from './menu';
=======
import Header from './header';

import Footer from './footer';
>>>>>>> 810958bdc8e4bf952e645da1cf5aa3427a79c63d

export default class Layout extends React.Component {
	render() {
		return <div>
<<<<<<< HEAD
			<div><h1>Team 2 Header</h1></div>
			<Menu />
=======
			<Header></Header>
			<div>Menu</div>
>>>>>>> 810958bdc8e4bf952e645da1cf5aa3427a79c63d
			<div>Content</div>
			<Footer />
		</div>;
	}
}