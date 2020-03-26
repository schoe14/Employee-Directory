// export default {
//     up: {
//         class: "sort-up",
//         fn: (a, b) => a.id - b.id
//     },
//     down: {
//         class: "sort-down",
//         fn: (a, b) => b.id - a.id
//     },
//     default: {
//         class: "sort",
//         fn: (a, b) => a
//     }
// };

export default {
    defaultid: {
        class: "sort-down",
        fn: (a, b) => a
    },
    upid: {
        class: "sort-down",
        fn: (a, b) => a.id - b.id
    },
    downid: {
        class: "sort-up",
        fn: (a, b) => b.id - a.id
    },
    upname: {
        class: "sort-down",
        fn: (a, b) => a.name.localeCompare(b.name)
    },
    downname: {
        class: "sort-up",
        fn: (a, b) => b.name.localeCompare(a.name)
    },
    // update: {
    //     class: "sort-down",
    //     fn: (a, b) => -1
    // },
    // downdate: {
    //     class: "sort-up",
    //     fn: (a, b) => 1
    // }
};

