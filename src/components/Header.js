import React from 'react';

export default class Header extends React.Component
{
    render() {
        return <div className='App-heading-text'>{this.props.text}</div>;
    }
}