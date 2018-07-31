import React, { Component } from 'react';

export default class Footer extends React.Component {
    render() {
        return <div>{this.props.text}<img src={this.props.imageSource} /></div>;
    }
}
