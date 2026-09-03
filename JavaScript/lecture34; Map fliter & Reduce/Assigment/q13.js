let user = [
    {name: "Rahul", isActive: true},
    {name: "priya", isActive: false}
]

let activeuser = user.filter((user) => (user.isActive))

console.log(activeuser);
