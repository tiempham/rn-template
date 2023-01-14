/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react'
import React from 'react'
import {SafeAreaView, useColorScheme} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'

import AppSrc from 'components'

type SectionProps = PropsWithChildren<{
	title: string
}>

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark'
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	}
	return (
		<SafeAreaView style={backgroundStyle}>
			<AppSrc />
		</SafeAreaView>
	)
}

export default App
