import React from 'react';
import PropTypes from 'prop-types';

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
			<table>
				<thead>
					<tr>
					<th>City: </th>
					<th>Comments: </th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.ufoSightings.slice(0,100).map((sighting, i) =>( 
						<tr key={i}>
							<td>{sighting.city}</td>
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