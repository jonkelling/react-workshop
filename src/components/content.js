import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< Updated upstream
import Enumerable from 'linq';
=======
import UfoSummary from './ufoSummary.js';
>>>>>>> Stashed changes

export default class Content extends React.Component{
	constructor(props) {
		super(props);
		this.filterChange = this.filterChange.bind(this);
		this.state = {
			filter: ''
		}
	}

	filterChange(event) {
		this.setState({filter: event.value});
	}
	
	render() {
		if (this.props.ufoSightings) {
		return <div>
<<<<<<< Updated upstream
			<table border="1">
=======
			<UfoSummary ufoSightings={this.props.ufoSightings}/>
			<table>
>>>>>>> Stashed changes
				<thead>
					<tr>
					<th>City: </th>
					<th>State: </th>
					<th>Comments: </th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.ufoSightings.slice(0,100).map((sighting, i) =>( 
						<tr key={i}>
							<td>{sighting.city}</td>
							<td>{sighting.state}</td>
							<td>{sighting.comments}</td>
						</tr>))
					}
					
				</tbody>
			</table>
		</div>;
		} else {return  <div>No Data</div>}
	}
}

Content.propTypes = {
	ufoSightings: PropTypes.arrayOf(PropTypes.object)
}