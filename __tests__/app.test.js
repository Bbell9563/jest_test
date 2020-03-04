import {doubleArray,
        evensOnlyArray,
        arraySum,
        allNumbersGreaterThanZero,
        someNumbersAreOdd,
        evensOnlyAndDoubleArray,
        findItem
} from '../app' 

var numberArray = [1,2,3,4]
// NUMBER 1 TEST
describe('NO.1 Testing doubleArray', () => {
  test('test given array', ()=>{

    expect(doubleArray(numberArray)).toEqual([2,4,6,8])
  })
  test('test negative  array', ()=>{
    expect(doubleArray([-2,5,6,-1])).toEqual([-4,10,12,-2])
  })
  test('checks for strings', ()=>{
    expect(doubleArray([3, -2, 'im not suppose to be here', 7])).toEqual("error: array has str")
  })  
})

//  NUMBER 2 TEST
describe('NO.2 Testing evensOnlyArray', () =>{
  test('test original array with', () => {
    var numberArray1 = [1,2,3,4,5,6,7,8]
    expect(evensOnlyArray(numberArray1)).toEqual([2,4,6,8])
  })
  test('test with negative numbers', () => {
    expect(evensOnlyArray([-1,-2,-3,-4,-5,-6])).toEqual([-2,-4,-6])
  })
  test('test with strings', () => {
    expect(evensOnlyArray([-1,7,'hi', -4, 3, 8])).toEqual([-4,8])
  })
})

// NUMBER 3 TEST
describe('NO.3 Testing arraySum', ()=> {
  test('testing original array', ()=> {
    expect(arraySum(numberArray)).toEqual(10)
  })
  test('test negative numbers',()=>{
    expect(arraySum([-1,4,6,-10])).toEqual(-1)
  })
  test('testing strings',()=>{
    expect(arraySum(['i', 't', 7,5])).toEqual("error: contains strings")
  })
})

// NUMBER 4 TEST
describe('NO.4 Testing allNumbersGreaterThanZero', ()=>{
  test('test numberArray', ()=> {
    expect(allNumbersGreaterThanZero(numberArray)).toEqual(true)
  })
  test('test numbers not greater than 0', ()=> {
    expect(allNumbersGreaterThanZero([-1,-2,2,6,7])).toEqual(false)
  })
  test('testing strings',()=>{
    expect(allNumbersGreaterThanZero(['i', 't', 7,5])).toEqual("error: contains strings")
  })
})

// NUMBER 5 TEST
describe('NO.5 Testing someNumbersAreOdd', ()=>{
  test('test numberArray', ()=> {
    expect(someNumbersAreOdd(numberArray)).toEqual(true)
  })
  test('test no numbers are odd', ()=> {
    expect(someNumbersAreOdd([2,4,6,8])).toEqual(false)
  })
  test('testing strings',()=>{
    expect(someNumbersAreOdd(['i', 't', 7,5])).toEqual("error: contains strings")
  })
})

// NUMBER 6 TEST
describe('NO.6 Testing evensOnlyAndDoubleArray', ()=>{
  test('test numberArray', ()=> {
    expect(evensOnlyAndDoubleArray(numberArray)).toEqual([4,8])
  })
  test('test some numbers negative', ()=> {
    expect(evensOnlyAndDoubleArray([-2,4,-6,8])).toEqual([-4,8,-12,16])
  })
  test('testing strings',()=>{
    expect(evensOnlyAndDoubleArray(['i', 't', 7,5])).toEqual("error: contains strings")
  })
})

// NUMBER 7 TEST
describe('NO.7 Test findItem', () => {
  test('test finding 1 in original array', ()=> {
    expect(findItem(numberArray, 1)).toEqual(1)
  })
  test('test finding 1 in original array', ()=> {
    expect(findItem(numberArray, 10)).toEqual("Item Not Found")
  })
})

// NUMBER 8 TEST
