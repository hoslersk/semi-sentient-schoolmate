import React, { PureComponent, PropTypes } from 'react'

import { MENU } from '../../constants/menu'

import NameEntry from '../NameEntry/NameEntry'
import Language from '../Language/Language'

import './styles.sass'

class AppHeader extends PureComponent {

	render() {

		return (
			<div className={`${this.props.language}AppHeader${this.props.dialogue > 0 ? 'Hidden' : ''}`}>
				<Language action={this.props.handleLanguage} value={this.props.language} />
				<NameEntry
					profile={this.props.profile}
					updateAction={this.props.updateAction}
					enrollAction={this.props.enrollAction}
					dropOutAction={this.props.dropOutAction}
					menu={MENU.nameEntry}
					language={this.props.language}
				/>

				<h1 className="headline">{MENU.title[this.props.language]}</h1>
			</div>
		)
	}
}

AppHeader.propTypes = {
	profile: PropTypes.object,
	updateAction: PropTypes.func,
	enrollAction: PropTypes.func,
	dropOutAction: PropTypes.func,
	handleLanguage: PropTypes.func,
	language: PropTypes.string,
	dialogue: PropTypes.number,
}

export default AppHeader
