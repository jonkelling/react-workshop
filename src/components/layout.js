import Footer from './footer'
import React from 'react'

export default class Layout extends React.Component{
	render() {
		return <div>
			<div>Header</div>
			<div>menu</div>
			<div>Content</div>
			<Footer />
		</div>;
	}
}