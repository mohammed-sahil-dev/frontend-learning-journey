let arr = [
    {name : "Rahul",age:20},
    {name : "Priya",age:19}
   
]
  let res = arr.findIndex((value) => {
    return value.name === "Priya"
})

console.log(res);