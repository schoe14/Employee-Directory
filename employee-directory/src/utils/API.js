export default {
    getEmployeeList: new Promise(function (resolve) {
        setTimeout(() => {
            resolve([
                {
                    id: 8000,
                    name: "Employee",
                    email: "emp@gmail.com",
                    position: "Manager",
                    team: "Card Tech" 
                },
                {
                    id: 10000,
                    name: "Tae",
                    email: "tae@gmail.com",
                    position: "Lead Software Developer",
                    team: "Card Tech"
                },
                {
                    id: 20000,
                    name: "Seo",
                    email: "seo@gmail.com",
                    position: "Software Developer",
                    team: "Gaming"
                },
                {
                    id: 30000,
                    name: "Mint",
                    email: "mint@gmail.com",
                    position: "Intern",
                    team: "Internal Support"
                }
            ]);
        }, 1000);
    })
};