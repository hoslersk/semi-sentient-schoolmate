import React, { PureComponent, PropTypes } from 'react'

import './styles.sass'

class BackgroundImage extends PureComponent {

	get image() {
		if (this.props.source) {
			return (
				<img src={this.props.source} className="backgroundImage" />
			)
		}

		return null
	}

	render() {
		return this.image
	}
}

BackgroundImage.propTypes = {
	source: PropTypes.string
}

export default BackgroundImage
