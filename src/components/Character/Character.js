import React, { PureComponent, PropTypes } from 'react'

class Character extends PureComponent {

	render() {
		return (
			<img src={this.props.source} className="characterImage" />
		)
	}
}

Character.propTypes = {
	source: PropTypes.string,
}

export default Character
