let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
console.log(car.brand);

let car2: { readonly brand: string; year: number } = {
  brand: "mercedes",
  year: 2025,
};

console.log(car2.brand);
car2.brand; // we can't assign value as readonly

// ch-1

const names: string[] = ["john", "jane", "jim", "jill"];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck = "jane";

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the list`);
}

// ch-2

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  // let total = numbers.reduce((prev, curr) => prev + curr, 0);
  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message}${total}`;
}
let result = sum("The total is : ", 1, 2, 3, 4, 5);
console.log(result);

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLowerCase());
  }
}
processInput(10);
processInput("Hello");

// obj as parameters

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: "anna",
};
createStudent(newStudent);
createStudent({ id: 1, name: "bob" });

//
function createButton(
  text: string,
  options: { color: string } = { color: "blue" }
) {
  console.log(`${text} butonu, rengi: ${options.color}`);
}

createButton("Kaydet");
// 👉 "Kaydet butonu, rengi: blue"

createButton("Sil", { color: "red" });
// 👉 "Sil butonu, rengi: red"

// ch

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    let result = input.toUpperCase();
  }
  if (config.reverse) {
    result = result.split("").reverse().join("");
  }
  return result;
}
console.log(processData(10));
console.log(processData("Hello"));
console.log(processData("Hello", { reverse: true }));

/* Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

Create a Union Type: Define a type Staff that is a union of Employee and Manager.

Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output. */

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager and manages ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

const alice: Employee = {
  id: 1,
  name: "Alice",
  department: "Sales",
};

const steve: Employee = {
  id: 2,
  name: "Steve",
  department: "HR",
};

const bob: Manager = {
  id: 3,
  name: "Bob",
  employees: [alice, steve],
};

printStaffDetails(alice);
printStaffDetails(bob);

/*  in ts, an intersection type (TypeA & TypeB ) is a way of combining multiple types into one. */

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 2,
  name: "how to Cook a Dragon",
  price: 15,
};

const book2: Book = {
  id: 3,
  name: "The Secret Life of Unicorns",
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 4,
  name: "Gnomes vs. Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
};

///////////

// Tuple, belirli sırayla ve belirli sayıda farklı türde verileri aynı dizide saklamak için kullanılır. Örneğin:

let person: [string, number] = ["john", 25];

// Enum, TypeScript’te sabit değerleri isimlendirmek için kullanılır. Özellikle rol, durum, kategori gibi şeylerde çok işe yarar.

enum ServerResponseStatus {
  Success = 200,
  Error = "Error",
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

Object.values(ServerResponseStatus).forEach((value) => {
  console.log(value);
});

const response: ServerResponse = getServerResponse();
console.log(response);

/* 🚀 CHALLENGE ÖZETİ VE KODU

🎯 Amaç:
UserRole adında enum tanımla: Admin, Manager, Employee
user adında type alias oluştur: id, name, role, contact (tuple!)
createUser fonksiyonu: parametre olarak user alır, geri user döner
Örnek user oluştur ve fonksiyonu kullan */

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}
const user = createUser({
  id: 1,
  name: "ülkü",
  role: UserRole.Admin,
  contact: ["ulku@gmail.com", "123-456-789"],
});

// type assertion

enum Color {
    Red,
    Blue,
    // Green,
}

function getColorName(color: Color) {
    switch (color) {
        case Color.Red:
            return 'Red';
        case Color.Blue:
            return 'Blue';
            default:
            // at build time
            let unexpectedColor: never = color;
            // at runtime
            throw new Error(`Unexpected color value: ${unexpectedColor}`);

    }
}
console.log(getColorName(Color.Red));

//
