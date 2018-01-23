import React from 'react';
import PropTypes from 'prop-types';
import Enumerable from 'linq';

export default class UfoSummary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.ufoSightings) {
            return <div>
                <div>Ufo Highlights</div>
                <div>
                    By Year:
                    {Enumerable
                        .from(this.props.ufoSightings.slice(0, 100))
                        .groupBy(x => new Date(x.datetime).getFullYear())
                        .orderByDescending(x => x.count())
                        .first()
                        .select((sighting, i) =>( 
                            <div key={i}>
                                {new Date(sighting.datetime).getFullYear()}    
                            </div>))
                        .first()
                    }
                </div>
            </div>;
        } else {
            return <div>No Data</div>
        }
    }
}

UfoSummary.propTypes = {
    ufoSightings: PropTypes.arrayOf(PropTypes.object)
}