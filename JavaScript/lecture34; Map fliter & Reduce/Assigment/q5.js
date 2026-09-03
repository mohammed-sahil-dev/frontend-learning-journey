let user = [

    {name : "Rahul", role:"student"},
    {name : "Priya", role:"student"}
]


let roleChanged = user.map((iteam) => ({...iteam, role:"developer"}))

console.log(roleChanged);
