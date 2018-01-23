import React from 'react';

export default class Footer extends React.Component {

				render() {
					const footerStyles = {
						position: 'absolute',
						left: '45vw',
						bottom: '0px',
						fontWeight: 'bold',
						fontSize: '24px',
						textAlign: 'center'					
					};

						return <div style={footerStyles}>SSCGP © 2018</div>;
				}
}