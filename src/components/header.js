import React from 'react';
import mainLogo from'../images/TEDx_logo_RGB_290.jpg';

export default class Header extends React.Component {
	render() {
		return <div>
            <div>
                <img  src={mainLogo}/>
            </div>
		</div>;
	}
}