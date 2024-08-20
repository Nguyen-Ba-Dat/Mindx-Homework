//10
const employees = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];

function findMostEfficientEmployee (employees) {
    return employees.reduce((mostEfficient, employee) => {
        const currentEfficiency = employee.workingDays / employee.salary
        const mostEfficientEfficiency = mostEfficient.workingDays / mostEfficient.salary

        return currentEfficiency > mostEfficientEfficiency ? employee : mostEfficient
    })
}

const mostEfficientEmployee = findMostEfficientEmployee(employees)
console.log(mostEfficientEmployee)

//11
const employees1 = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];

function createWorkingDaysHistogram(employees1) {
    return employees1.reduce((histogram, employee) => {
        const days = employee.workingDays

        if (histogram[days]) {
            histogram[days]++
        } else {
            histogram[days] = 1
        }
        return histogram
    }, {})
}

const workingDaysHistogram = createWorkingDaysHistogram(employees1)
console.log(workingDaysHistogram)

//12
const employees2 = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
];

function createEmployeeSummary(employees2) {
    return employees2.map(employee => {
        return {
            name: employee.name,
            email: employee.email,
            workInfo: {
                workingDays: employee.workingDays,
                lateDays: employee.lateDays
            }
        }
    })
}

const employeeSummary = createEmployeeSummary(employees2)
console.log(employeeSummary)

//13
