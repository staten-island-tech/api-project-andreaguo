let totalCost = 4000
let students = [0.5, 0.2, 0.1, 0.2]
let totalStudents = 399
let product = []
let excess = []
//12, 9, 7, 5
function get(students, totalStudents){
  students.forEach(el=>{
    let value = el * totalStudents
    let i = students.indexOf(el)
if (Number.isInteger(value)) {
    console.log(value)
    console.log(i)
    prices(i, value);
} else {
  console.log('not a whole number')
  console.log(value)
  let num = Math.floor(value)
  excess.push(value - num)
  price(i, num)
}}
)
}
function price(i, value){
  if (i == 0) {
    let cost = 12 * value
    product.push(cost)
  } else if (i == 1) {
    let cost = 9*value
    product.push(cost)
  } else if (i == 2) {
    let cost = 7 * value
    product.push(cost)
  } else {
    let cost = 5 * value
    product.push(cost)
  }
}

get(students, totalStudents)
let excessSum = excess.reduce((a,b)=> a + b, 0)
console.log(excessSum)
let finalSum = product.reduce((a,b)=> a + b, 0)
if (finalSum < (totalCost/2)) {
  console.log('YES')
} else {
  console.log('NO')
}
console.log(product)
console.log(excessSum)