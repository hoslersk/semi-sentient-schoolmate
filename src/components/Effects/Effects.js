import React, { PureComponent, PropTypes } from 'react'

import './styles.sass'

class Effects extends PureComponent {

	render() {
		if (this.props.type) {
			return (
				<span className={this.props.type} />
			)
		}

		return null
	}
}

Effects.propTypes = {
	type: PropTypes.string,
}

export default Effects
