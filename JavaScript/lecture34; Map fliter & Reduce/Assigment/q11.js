let user = [

    {name : "Rahul", role:"developer"},
    {name : "Priya", role:"student"}
]

let role = user.filter((user) => (user.role === "developer"))

console.log(role);
