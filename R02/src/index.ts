class Employee {
    firstName: string | undefined;
    lastName: string | undefined;

    constructor(firstName?: string, lastName?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

     printName() {
        console.log(`The name of employee is ${this.firstName} ${this.lastName}`);
    }
}

const employee = new Employee();
const employee1 = new Employee('Beef', 'Webster');
employee1.printName();
