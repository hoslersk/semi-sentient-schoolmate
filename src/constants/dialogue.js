export const DIALOGUE = {
	intro: [
		{
			text: {
				english: 'Welcome to Semi-Sentient Schoolmate, Stranger! There\'s not much to show you now, as our syllabus is still a work in progress. In the meantime, feel free to take a self-guided tour. More coming soon...',
				japanese: 'セミセンへようこそ！ 近日公開予定です。',
			},
			location: 'stairs',
			effect: 'lighteffect',
		},
		{
			text: {
				english: 'Meanwhile, at the library...',
				japanese: '...',
			},
			location: 'library',
		},
		{
			text: {
				english: 'Still not yet.',
				japanese: 'まだまだ。',
			},
			location: 'library',
			character: {
				name: 'Turtle',
				position: '',
			},
			speaker: {
				english: 'Turtle',
				japanese: 'カメ',
			},
		},
		{
			text: {
				english: 'C\'mon, slowpoke!',
				japanese: '',
			},
			location: 'library',
			character: [
				{
					name: 'Rabbit',
					position: 'Left',
				},
				{
					name: 'Turtle',
					position: '',
				},
			],
			speaker: {
				english: 'Rabbit',
				japanese: 'ウサギ',
			},
		},
		{
			text: {
				english: 'Thank you for your patience.',
				japanese: 'しばらくお待ちください。',
			},
			location: 'swings',
		},
	],
}
