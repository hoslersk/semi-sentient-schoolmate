import React, { PureComponent, PropTypes } from 'react'

import { CHARACTER } from '../../constants/character'

import './styles.sass'

class Character extends PureComponent {

	render() {
		if (this.props.data) {
			return (
				<img src={CHARACTER[this.props.data.name]} className={`characterImage${this.props.data.position}`} />
			)
		}

		return null
	}
}

Character.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string,
		position: PropTypes.string
	}),
}

export default Character
