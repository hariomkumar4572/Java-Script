
 // singleton
 // Object.create

 // Object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Hariom Kumar Ray",
    "full name": "Hariom Kumar Ray",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hariom995522@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hariom9955@gmail.com";

// Object.freeze(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
