/*
Summary: Below Example shows the use of Arrow function
Author:Abhishek
*/

var EmployeeInformation = (empName: string,empSalary:number)=>{
    return `Hello my name is ${empName} & my salary is ${empSalary}`;   
}

console.log(EmployeeInformation('Abhishek',50000));