import React, { Component } from 'react';

class Footer extends Component
{
    render() {
        return <div>They're out there <img src={this.props.imageSource} /></div>;
    }
}

export default Footer;