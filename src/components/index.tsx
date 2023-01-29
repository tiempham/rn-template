// create function component react native
import React from 'react'
import {Button, Text} from 'react-native'
import {useStore} from 'stores'
import createSelectors from 'stores/selector'
function BearCounter() {
	const bears = useStore(state => state.bears)
	const useBearStore = createSelectors(useStore)
	console.log({useBearStore: useBearStore.use})

	return <Text>{bears} around here ...</Text>
}

export const Controls = () => {
	const increasePopulation = useStore(state => state.increasePopulation)
	return <Button onPress={increasePopulation}>one up</Button>
}

export default BearCounter
