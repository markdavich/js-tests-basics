//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  // let total = ""
  // str.toLowerCase().split(' ').forEach(
  //   strElem => total += strElem.charAt(0).toUpperCase() + strElem.slice(1)
  // )
  // return total

  // The Reducer...
  return str.toLowerCase().split(' ').reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.charAt(0).toUpperCase() + currentValue.slice(1)
    }
  )
}
