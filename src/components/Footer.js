import React from 'react';

export default class Footer extends React.Component
{
    render(){
        return <div className='App-footer'>{this.props.text}</div>;
    }
}