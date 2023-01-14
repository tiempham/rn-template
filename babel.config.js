module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.ts',
					'd.ts',
					'.tsx',
					'.json',
				],
				alias: {
					tests: ['./tests/'],
					'@components': '*/components',
					'@configs': '*/configs',
					'@stores': '*/stores',
					'@utils': '*/utils',
				},
			},
		],
	],
}
