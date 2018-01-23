import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.css';

export default class Content extends React.Component {
    render() {
        if (!this.props.tedTalks) {
            return <div>No Data!</div>;
        }

        return <div className={'component'}>
            <table>
                <thead>
                    <tr>
                        <th>Film Date</th>
                        <th>Speaker</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.tedTalks.map((tedTalk, i) => (
                            <tr key={i}>
                                <td>{tedTalk.film_date}</td>
                                <td><a href="#" onClick={() => this.props.selectTedTalk(tedTalk.id)}>
                                    {tedTalk.main_speaker}
                                </a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>;
    }
}

Content.propTypes = {
    tedTalks: PropTypes.arrayOf(PropTypes.object),
    selectTedTalk: PropTypes.func
}