import { useEffect, useState } from "react";

const useFilter = (employees, search) => {
    const [filteredValue, setFilteredValue] = useState([{}]);
    useEffect(() => {
        let employeesArray = [];
        employees.map(employee => {
            let info = Object.values(employee);
            console.log(employee);

            console.log(info);
            if (info.includes(search)) {
                console.log("HI");
                employeesArray.push(employee);
            }
        });
        const handler = setTimeout(() => {
            setFilteredValue(employeesArray);
        }, 1000);
        return () => {
            clearTimeout(handler);
        };
    }, [employees, search]);
    return filteredValue;
};

export default useFilter;
