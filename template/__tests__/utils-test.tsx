import {describe, expect, test} from '@jest/globals'
import {ucFirst} from 'utils'

// Test function ucFirst
describe('Test function ucFirst', () => {
	test('ucFirst("hello") should return "Hello"', () => {
		expect(ucFirst('hello')).toBe('Hello')
	})
	test('ucFirst("h") should return "H"', () => {
		expect(ucFirst('h')).toBe('H')
	})
	test('ucFirst("") should return ""', () => {
		expect(ucFirst('')).toBe('')
	})
})
