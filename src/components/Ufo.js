import React from 'react';

export default class Ufo extends React.Component {
    render() {
        return (
            <div>
                <div>City: {this.props.city}</div>
                <div>City: {this.props.state}</div>
                <div>{this.props.comments}</div>
            </div>
        )
    }
}