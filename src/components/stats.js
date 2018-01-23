import React from 'react';
import PropTypes from 'prop-types';
import Enumerable from 'linq';


export default class Stats extends React.Component{
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
			<table border="1">
				<thead>
					<tr>
					<th>State: </th>
					<th>Count of Sightings: </th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.ufoSightings.slice(0,100).map((sighting, i) =>( 
						<tr key={i}>
							<td>{sighting.state}</td>
							<td>{groupData}</td>
						</tr>))
					}
					
				</tbody>
			</table>
		</div>;
		} else {return  <div>No Data</div>}
	}
}

Stats.propTypes = {
	ufoSightings: PropTypes.arrayOf(PropTypes.object)
}