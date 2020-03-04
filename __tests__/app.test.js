import {originalArray} from '../app' 

describe('original array test', () => {
  test('testing original array', () => {
    let arr = ['to', 'me']
    expect(originalArray(arr)).toEqual(arr)
  })
})