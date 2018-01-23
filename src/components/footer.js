import React from 'react';

export default class Footer extends React.Component {

				render() {
					const footerStyles = {
						position: 'sticky',
						left: '40vw',
						bottom: '6px',
						fontWeight: 'bold',
						fontSize: '24px',
						textAlign: 'center'					
					};

						return <div style={footerStyles}>SSCGP © 2018</div>;
				}
}