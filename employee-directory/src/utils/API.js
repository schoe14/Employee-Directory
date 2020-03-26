export default {
    getEmployeeList: new Promise(function (resolve) {
        setTimeout(() => {
            resolve([
                {
                    id: 8000,
                    name: "Employee",
                    email: "emp@gmail.com",
                    position: "Manager",
                    // start: 01/05/2020
                },
                {
                    id: 10000,
                    name: "Tae",
                    email: "tae@gmail.com",
                    position: "Lead Software Developer",
                    // start: 01/05/2019
                },
                {
                    id: 20000,
                    name: "Seo",
                    email: "seo@gmail.com",
                    position: "Software Developer",
                    // start: 12/21/2019
                },
                {
                    id: 30000,
                    name: "Mint",
                    email: "mint@gmail.com",
                    position: "Intern",
                    // start: 01/05/2020
                }
            ]);
        }, 1000);
    })
};