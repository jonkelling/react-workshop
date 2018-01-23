import React from 'react';
import Menu from './menu.js';
import Header from './header.js'
import Footer from './footer.js'
import Content from './content';
export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	async componentDidMount() {
		const response = await fetch('api/ufos');
		const data = await response.json();
		if (data)	{
			this.setState({data: data});
		}
	}
	render() {
		return <div>
			<Header/>
			<Menu/>
			<Content ufoSightings={this.state.data}/>
			<Footer />
		</div>;
	}
}
