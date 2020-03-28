export default {
    getEmployeeList: new Promise(function (resolve) {
        setTimeout(() => {
            resolve([
                {
                    id: 20660,
                    name: "Douglas Hines",
                    email: "d.hines@mail.com",
                    position: "Senior Software Developer",
                    team: "Customer Resiliency"
                },
                {
                    id: 63477,
                    name: "Ross Ramirez",
                    email: "r.ramirez@mail.com",
                    position: "Senior Software Developer",
                    team: "Card Tech"
                },
                {
                    id: 31975,
                    name: "Allison Moran",
                    email: "a.moran@mail.com",
                    position: "Junior Software Developer",
                    team: "Card Tech"
                },
                {
                    id: 81644,
                    name: "Kara Garza",
                    email: "k.garza@mail.com",
                    position: "Full Stack Web Developer",
                    team: "Web Development"
                },
                {
                    id: 57358,
                    name: "Melba Murphy",
                    email: "m.murphy@mail.com",
                    position: "Senior Java Software Developer",
                    team: "Customer Resiliency"
                },
                {
                    id: 51950,
                    name: "Drew Hampton",
                    email: "d.hampton@mail.com",
                    position: "Junior Java Software Developer",
                    team: "Card Tech"
                },
                {
                    id: 31388,
                    name: "Richard Fowler",
                    email: "r.fowler@mail.com",
                    position: "Applications Programmer",
                    team: "Web Development"
                },
                {
                    id: 73773,
                    name: "Chris Austin",
                    email: "i.austin@mail.com",
                    position: "Database Administrator",
                    team: "Database"
                },
                {
                    id: 91333,
                    name: "Ella Leonard",
                    email: "e.leonard@mail.com",
                    position: "Computer Systems Analyst",
                    team: "Internal Support"
                },
                {
                    id: 42396,
                    name: "Lauren Stanley",
                    email: "l.stanley@mail.com",
                    position: "Computer Programmer",
                    team: "Internal Support"
                }
            ]);
        }, 1000);
    })
};