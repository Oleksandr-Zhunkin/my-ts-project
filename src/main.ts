import "./style.css";

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(1, 2));

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: "Alisa" }, { age: 28 });

// merged.name;

// export {};

// type Person = {
//   name: string;
// };

// type AdditionFields = {
//   age: number;
// };

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge<Person, AdditionFields>({ name: "Alisa" }, { age: 28 });

// merged.name;

// export {};

// function arrayLogger<T extends Array<string | number>>(array: T): void {
//   array.forEach((item) => console.log(item));
// }

// arrayLogger(["Hello", "World"]); // Ok
// arrayLogger([1, 2, 3]); // Ok

// export {};

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };

// type PersonKeys = keyof Person; // 'name' | 'age' | 'location'

// function getPersonInfo(person: Person, key: PersonKeys) {
//   return person[key];
// }

// const john: Person = {
//   name: "John",
//   age: 25,
//   location: "NY",
// };

// console.log(getPersonInfo(john, "age")); // 25
// console.log(getPersonInfo(john, "name")); // 'John'
// console.log(getPersonInfo(john, "job")); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.

// export {};
// function extractValue<T extends object, U>(obj: T, key: U) {
//   return obj[key]; // Type 'U' cannot be used to index type 'T'
// }

// extractValue({ name: "John" }, "name");

// export {};

// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }

// extractValue({ name: "John" }, "name");

// export {};

// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Hello");
// textStorage.addItem("World");
// console.log(textStorage.getItems()); // ['Hello', 'World']
// textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1);
// numberStorage.addItem(2);
// console.log(numberStorage.getItems()); // [1, 2]
// numberStorage.addItem("TEXT"); // Error: Argument of type 'number' is not assignable to parameter of type 'number'

// export {};

// class KeyValuePair<TKey, TValue> {
//   constructor(private key: TKey, private value: TValue) {}

//   getKey(): TKey {
//     return this.key;
//   }

//   getValue(): TValue {
//     return this.value;
//   }
// }

// const pair1 = new KeyValuePair("name", "Alice");
// console.log(pair1.getKey()); // 'name'
// console.log(pair1.getValue()); // 'Alice'

// const pair2 = new KeyValuePair(1, true);
// console.log(pair2.getKey()); // 1
// console.log(pair2.getValue()); // true

// export {};

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   registered: boolean;
// };

// function createUser(data: Partial<User>): User {
//   // Деякі значення за замовчуванням:
//   const defaultUser: User = {
//     id: Date.now(),
//     name: "",
//     email: "",
//     registered: false,
//   };

//   // З'єднуємо дані користувача та значення за замовчуванням
//   return { ...defaultUser, ...data };
// }

// const newUser = createUser({ name: "Alice", email: "alice@example.com" });

// console.log(newUser);

// export {};

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// let alice: User = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
// };

// alice.name = "Bob"; // OK

// let aliceReadonly: Readonly<User> = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
// };

// user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

// export {};

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UserBasicInfo = Pick<User, "id" | "name">;

// let userBasicInfo: UserBasicInfo = {
//   id: 1,
//   name: "John Doe",
//   email: "john@example.com", // Error: Property 'email' does not exist on type 'UserBasicInfo'
// };

// export {};

// type BaseEmployee = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   position: string;
//   department: string;
//   startDate: Date;
//   // ...і багато інших полів
// };

// type BaseProject = {
//   id: number;
//   name: string;
//   budget: number;
//   deadline: Date;
//   // ...і багато інших полів
// };

// type Assignment = {
//   employee: Pick<BaseEmployee, "id" | "firstName" | "lastName">;
//   projects: Pick<BaseProject, "id" | "name" | "deadline">[];
//   shouldNotifyEmployee?: boolean;
// };

// export { };

// type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
// type Weekend = "Sat" | "Sun";

// type Day = Weekdays | Weekend;

// type DayTranslations = Record<Day, string>;

// const translations: DayTranslations = {
//   Mon: "Понеділок",
//   Tue: "Вівторок",
//   Wed: "Середа",
//   Thu: "Четверг",
//   Fri: "П'ятниця",
//   Sat: "Субота",
//   Sun: "Неділя",
// };

// enum UserRoles {
//   admin = "admin",
//   manager = "manager",
//   employee = "employee",
// }

// type UserRolesStatuses = Record<UserRoles, boolean>;

// const userRoleStatuses: UserRolesStatuses = {
//   [UserRoles.admin]: true,
//   [UserRoles.employee]: true,
//   [UserRoles.manager]: false,
// };

// export {};

// type InitialFormType = {
//   name: string;
//   email: string;
//   password: string;
// };

// export type Form = InitialFormType & {
//   errors: Partial<Record<keyof InitialFormType, [string]>>;
// };

// export {};

// function greeting() {
//   return "Hello, world!";
// }

// type Greeting = ReturnType<typeof greeting>; // 'string'

// function multiply(a: number, b: number) {
//   return a * b;
// }

// type MultiplyResult = ReturnType<typeof multiply>; // 'number'

// export {};

// type Callback = (...args: unknown[]) => unknown;

// function createLoggedFunction<T extends Callback>(func: T) {
//   let funcRef = func;

//   const loggedFunction = (...args: Parameters<T>) => {
//     console.log(`Function ${func.name} was called with arguments:`, args);
//     const result = funcRef(...args) as ReturnType<T>;
//     return result;
//   };

//   return loggedFunction;
// }
// export {};
