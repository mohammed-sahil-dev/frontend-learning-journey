let arr = [
    {name : "Rahul", age:20},
      {name : "Priya",age:19}
   
   
]
  let res = arr.find((value) => {
    return value.name === "Rahul"
})

console.log(res);
