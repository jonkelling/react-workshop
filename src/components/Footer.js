import React, { Component } from 'react';

export default class Footer extends React.Component {
    render() {
        return <div>{this.props.footer}<img src={this.props.imageSource} /></div>;
    }
}
