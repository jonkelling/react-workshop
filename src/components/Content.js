import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.css';
import moment from 'moment';
import Enumerable from 'linq';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.filterChange = this.filterChange.bind(this);
        this.state = {
            filter: ''
        }
    }

    filterChange(event) {
        this.setState({ filter: event.target.value });
    }
    
    render() {
        if (!this.props.tedTalks) {
            return <div>No Data!</div>;
        }

        const filteredData = this.props.tedTalks
        .slice(0, 100)
        .filter(x => (x.main_speaker||'').toLowerCase().includes((this.state.filter||'').toLowerCase()));

        return <div className={'component'}>
            <br/>
                <input type="text"
                    onChange={this.filterChange}
                    value={this.state.filter} />
            <br/>

            {
                Enumerable.from(filteredData)
                    .groupBy(x => x.main_speaker)
                    .select(g => ({main_speaker: g.key(), count: g.count()}))
                    .toArray()
                    .map((x, i) => (<div key={i}>{x.main_speaker}: {x.count}</div>))
            }

            <table>
                <thead>
                    <tr>
                        <th>Film Date</th>
                        <th>Speaker</th>
                        <th>Additional Info</th>
                        <th>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData
                            .map((tedTalk, i) => (
                            <tr key={i}>
                                <td>{formatDate(tedTalk.film_date)}</td>
                                <td><a href="#" onClick={() => this.props.selectTedTalk(tedTalk.id)}>
                                    {tedTalk.main_speaker}
                                </a></td>
                                <td>{ tedTalk.description }
                                </td>
                                <td>{tedTalk.speaker_occupation}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>;
    }
}

function formatDate(unformattedDate) {
    const formattedDateString = moment.unix(unformattedDate).format('L');
    // The data be mess
    // Gotta be the fix man.. don't change. plz 0:)
    // word.. (horns)
    if (formattedDateString === '12/31/1969') {
        return '';
    }
    return formattedDateString;
}

Content.propTypes = {
    tedTalks: PropTypes.arrayOf(PropTypes.object),
    selectTedTalk: PropTypes.func
}