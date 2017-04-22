import React, { PureComponent, PropTypes } from 'react'

import { MENU } from '../../constants/menu'

import NameEntry from '../NameEntry/NameEntry'

import './styles.sass'

class AppHeader extends PureComponent {

	render() {

		return (
			<div className={`${this.props.language}AppHeader${this.props.dialogue > 0 ? 'Hidden' : ''}`}>
				{/* <Language action={this.handleLanguage} value={this.state.language} /> */}
				<NameEntry
					profile={this.props.profile}
					updateAction={this.props.updateAction}
					enrollAction={this.props.enrollAction}
					dropOutAction={this.props.dropOutAction}
					menu={MENU.nameEntry}
					language={this.props.language}
				/>

				<h1 className="headline">{MENU.title[this.props.language]}</h1>

				<audio ref="audio" className="audio" loop>
					<source
						src="https://ia902205.us.archive.org/26/items/BeethovenSymphonyNo.7_807/02_Beethoven_Sym_No.7_m2.ogg"
						type="audio/ogg"
					/>
					<source
						src="https://ia802205.us.archive.org/26/items/BeethovenSymphonyNo.7_807/02_Beethoven_Sym_No.7_m2.mp3"
						type="audio/mpeg"
					/>
				</audio>
			</div>
		)
	}
}

AppHeader.propTypes = {
	profile: PropTypes.object,
	updateAction: PropTypes.func,
	enrollAction: PropTypes.func,
	dropOutAction: PropTypes.func,
	language: PropTypes.string,
	dialogue: PropTypes.number,
}

export default AppHeader
