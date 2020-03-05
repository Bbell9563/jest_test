// NUMBER 1
// return array with double values in array
export const doubleArray= (arr) =>{
  let results =  arr.map(double)
  if(results.includes("error")){
    return "error: array has str"
  }
  return results
}

const double = (element) => {
  if(typeof element === "string"){
    return "error"
  }
  return element * 2
}


// NUMBER 2
// return array with all even numbers

export const evensOnlyArray = (arr) => {
  return arr.filter((element)=>{
    if(element % 2 == 0 ){return element}
  })
}


// NUMBER 3
// return array with sum of numbers

export const arraySum = (arr) => {
  let results = arr.reduce((total, num)=>{
   if(typeof num === "string"){
    return ""
   }
   return total + num
  })
  if(typeof results === "string"){return "error: contains strings"}
  return results
}

// NUMBER 4
// return true if every item greater than 0
export const allNumbersGreaterThanZero = (arr) => {
  let stringCheck = arr.map(checkForString)
  if(stringCheck.includes("error")){
    return "error: contains strings"
  }
  return stringCheck.every((num)=>{
    return num > 0
  })
}
const checkForString = (element) => {
  if(typeof element === "string"){
    return "error"
  }
  return element
}


// NUMBER 5
// return true if some one or more items odd*
export const someNumbersAreOdd = (arr) => {
  let stringCheck = arr.map(checkForString)
  if(stringCheck.includes("error")){
    return "error: contains strings"
  }
  return stringCheck.some((element)=>{
    return element % 2 == 1
  })
}

// NUMBER 6
// return array double and even
export const evensOnlyAndDoubleArray = (arr) => {
  let stringCheck = arr.map(checkForString)
  if(stringCheck.includes("error")){
    return "error: contains strings"
  }
  let evenCheck = stringCheck.filter((element)=>{
    if(element % 2 == 0){return element}
  })

  return evenCheck.map((element)=>{
    return element * 2
  })
}

// NUMBER 7
// find an item method return 'not found' if not found
export const findItem = (arr, item) => {
  let searchItem =  arr.find((element)=> {
    return element === item
  })
  if(searchItem == undefined){
    return "Item Not Found"
  }
  return searchItem
}

// NUMBER 8 
export const sortArray = (arr) => {
  return arr.sort((a,b)=>{
    if(a <b ){return 1}
    else if (a > b){return -1}
    return 0
  })
}


// ARTIST 1 
export const doubleLikes = (arr) => {
  return arr.map((element)=>{
    return {name: element.name, likes: element.likes *2}
  })
}

// ARTIST 2
export const moreThan100Likes = (arr) => {
  return arr.filter((element)=>{
    return element.likes > 100
  })
}

// ARTIST 3
//  return an array of strings of artist name
export const justArtistMoreThan100Likes = (arr) => {
  let checkArtist =  arr.filter((element)=>{
    return element.likes > 100
  })
  return checkArtist.map((element)=> {return element.name})
}
// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter


//ARTIST 4 
export const numberOfLikes = (arr) => {
  let total = 0
  arr.map((element)=>{
    total += element.likes
  })
  return total
}

// ARTIST 5 
export const findObjByName = (arr, item) => {
  let searchItem =  arr.find((element)=> {
    return element.name === item
  })
  if(searchItem == undefined){
    return "Item Not Found"
  }
  return searchItem
}

// ARTIST 6
export const sortArtistByName = (arr) => {
  return arr.sort((a,b) => {
    if(a.name < b.name){
      return -1
    }
    else if (a.name > b.name){return 1}
    return 0
  })
}


// sortArtistByName(artists)







