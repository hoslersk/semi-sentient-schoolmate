import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import { CHARACTER } from '../constants/character'

export default class VRTest extends React.Component {
	render () {
		return (
			<Scene>
				<Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}} />
				<Entity position={{x: 0, y: 0, z: -4}} material={{ src: CHARACTER.turtle }} scale={{x: 2, y: 2, z: 2}} />
				<Entity particle-system={{preset: 'snow'}}/>
				<Entity light={{type: 'point'}}/>
				<Entity gltf-model={{src: 'virtualcity.gltf'}}/>
				<Entity text={{value: 'Hello, WebVR!'}}/>
			</Scene>
		);
	}
}
