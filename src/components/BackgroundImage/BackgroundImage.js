import React, { PureComponent, PropTypes } from 'react'

class BackgroundImage extends PureComponent {

	render() {
		return (
				<img src={this.props.source} className="backgroundImage" />
		)
	}
}

BackgroundImage.propTypes = {
	source: PropTypes.string
}

export default BackgroundImage
