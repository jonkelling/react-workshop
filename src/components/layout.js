import React from 'react';
import Menu from './menu';
import Header from './header';
import Content from './Content';

import Footer from './footer';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const response = await fetch('/api/tedtalks');
        const data = await response.json();
        this.setState({ data: data.ted });
    }

	render() {
        const data = [
            { id: 0, main_speaker: 'Jon Kelling', film_date: '0' },
            { id: 0, main_speaker: 'Jon Kelling', film_date: '0' },
            ...this.state.data,
        ];

		return <div>
			<Header></Header>
			<Menu />			
			<Content tedTalks={data} />
			<Footer />
		</div>;
	}
}