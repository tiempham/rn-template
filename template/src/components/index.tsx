// create function component react native
import React from 'react'
import {Button, Text, View} from 'react-native'
import {useStore} from 'stores'
// import createSelectors from 'stores/selector'
export const Controls = () => {
	const increasePopulation = useStore(state => state.increasePopulation)
	return <Button title="One up" onPress={increasePopulation}></Button>
}
function BearCounter() {
	const bears = useStore(state => state.bears)
	// const useBearStore = createSelectors(useStore)
	// console.log({useBearStore: useBearStore.use})

	return (
		<View>
			<Text>{bears} around here ...</Text>
			<Controls></Controls>
		</View>
	)
}

export default BearCounter
