//1
let square = (num) => num * num;

console.log(square(4));

//2
let containsKeyword = (str, keyword) => str.includes(keyword);

console.log(containsKeyword('Hello world!', 'world'));

//3
let addPrefix = (arr, prefix) => {
    let result = []
    arr.forEach(item => result.push(`${prefix}: ${item}`));
    return result
}

console.log(addPrefix(["one", "two", "three"], "number"));

//4
let doubleValues = arr => {
    let result = []
    arr.forEach(num => result.push(num * 2))
    return result
}

console.log(doubleValues([1,2,3,4]))

//5
let getOddNumbers = arr => {
    let result =[]
    arr.forEach(num => {
        if (num % 2 !== 0) {
            result.push(num)
        }
    })
    return result
}

console.log(getOddNumbers([1,2,3,4,5,6,7]))

//6
let employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];
let totalWorkDay = employees.reduce((total, employee) => total + employee.workingDays, 0)

console.log(totalWorkDay)

//7
let employees1 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
];
let highestSalary = employees1.reduce((max, employee) => 
    employee.salary > max.salary ? employee : max, employees1[0])

console.log(highestSalary)

//8
let employees2 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];

let mostHardEmployee = employees2.reduce((mostHard, employee) => {
    let currentEmployeeEffort = employee.workingDays - employee.lateDays
    let mostHardEffort = mostHard.workingDays - mostHard.lateDays
    return currentEmployeeEffort > mostHardEffort ? employee : mostHard
})

console.log(mostHardEmployee)

//9
let employees3 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];

function groupByName(employees3) {
    return employees3.reduce((acc, employee) => {
        if (!acc[employee.name]) {
            acc[employee.name] = [];
        }
        acc[employee.name].push(employee);
        return acc;
    }, {});
}

let groupedEmployees = groupByName(employees3);
console.log(groupedEmployees);
