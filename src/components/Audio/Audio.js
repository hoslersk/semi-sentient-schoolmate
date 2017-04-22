import React, { PureComponent, PropTypes } from 'react'

class Audio extends PureComponent {

	render() {
		return (
			<audio ref="audio" className="audio" autoPlay={this.props.autoPlay} loop={this.props.loop}>
				<source
					src={this.props.oggSource}
					type="audio/ogg"
				/>
				<source
					src={this.props.mpegSource}
					type="audio/mpeg"
				/>
			</audio>
		)
	}
}

Audio.propTypes = {
	autoPlay: PropTypes.bool,
	loop: PropTypes.bool,
	oggSource: PropTypes.string,
	mpegSource: PropTypes.string,
}

Audio.defaultProps = {
	autoPlay: true,
	loop: true,
	oggSource: 'https://ia902205.us.archive.org/26/items/BeethovenSymphonyNo.7_807/02_Beethoven_Sym_No.7_m2.ogg',
	mpegSource: 'https://ia802205.us.archive.org/26/items/BeethovenSymphonyNo.7_807/02_Beethoven_Sym_No.7_m2.mp3',
}

export default Audio
