---
uniqueName: javascript
title: Javascript
isActive: true
sections:
  - sectionTitle: Introduction
    isActive: true
    pages:
      - pageTitle: What is JavaScript
        isActive: true
        body: |-

          # What is JavaScript

          JavaScript is a programming language, embedded in web pages and it is used in order to manipulate the HTML content and therefore make a web page interactive.

          More specifically, it is:

          - a scripting language
          - dynamically-typed
      - pageTitle: Why JavaScript
        isActive: true
        body: |-

          # Why JavaScript

          It is a lightweight, interpreted, object-oriented programming language with first-class functions, most commonly known as a client-side scripting language for web pages.

          It has support for procedural, object-oriented and functional programming styles, which makes it very flexible for developers.

          JavaScript can also be used for creating:

          - web applications for browsers
          - browser extensions
          - desktop apps
          - native mobile apps and many more
      - pageTitle: How to include JavaScript in a page
        isActive: true
        body: |-

          # How to include JavaScript in a page

          - embedded script
          - external script
      - pageTitle: Embedded JavaScript
        isActive: true
        body: |-

          # Embedded script

          If we would like to include JavaScript code in a HTML document, we need to keep it within script tags.
          Since there are other scripting languages as well, such as PHP, Python and jQuery, it is crucial to define the type attribute inside the script tag, as below.

          ```html
          <html>
            <head>
              <title>My First JavaScript code!!!</title>
              <script type="text/javascript">
                alert("Hello World! This is some JavaScript code!");
              </script>
            </head>
            <body></body>
          </html>
          ```
      - pageTitle: External JavaScript
        isActive: true
        body: |-

          # External script

          In case we would like to execute some JavaScript code on many web pages, we could write the code in an external file with the `.js ` suffix, instead of writing the same script on every page.
          Then, we should pass the name of this file as the value of the src attribute inside the script tag.

          ```html
          <html>
            <head>
              <title>My First JavaScript code!!!</title>
              <script src="external-js-script.js"></script>
            </head>
            <body></body>
          </html>
          ```
      - pageTitle: JavaScript characteristics
        isActive: true
        body: |-

          # JavaScript characteristics

          - JavaScript supports first-class functions

            - functions can be passed as arguments to other functions
            - a function can return another function as a value
            - a function can be assigned to a variable

          - JavaScript is prototype-based (or supports instance-based inheritance)

            - any object can specify its own properties, either during creation or run time
            - any object can also be associated as the prototype for another object, allowing the second one to share the first object’s properties

          - JavaScript is single-threaded, though non-blocking
  - sectionTitle: Data types
    isActive: true
    pages:
      - pageTitle: What are data types
        isActive: true
        body: |-

          # Data types
          Data types are the classifications we give to the different kinds of data that we use in programming.</br>
          There are ten basic data types in JavaScript devided into two categories:

          - primitive data types</br>
            Number, String, Boolean, Null, Undefined, Symbol, BigInt

          - reference data types </br>
            Object, Array, Function

      - pageTitle: Number
        isActive: true
        body: |-

          # Number

          Any number, including numbers with decimals.<br/>

          ```javascript
          const ferrariPrice = 249999.99;
          ```

      - pageTitle: String
        isActive: true
        body: |-

          # String

          Any series of characters on your keyboard (numbers, letters, spaces, symbols etc), surrounded by single quotes: `'...'` or double quotes `"..."`.<br/>

          ```javascript
          const heroQuote = "I'm Batman!";
          ```

      - pageTitle: String concatenation
        isActive: true
        body: |-

          # String concatenation

          We can use the `+` operator on two or more strings to append one string to another.

          ```javascript
          console.log("My favorite movie: " + "Harry Potter"); // output: My favorite movie: Harry Potter
          ```

          </br>

          We can also use the `+` operator to combine string values, that are stored in variables.

          ```javascript
          const favoriteMovie = "Harry Potter";
          console.log("My favorite movie: " + favoriteMovie); // output: My favorite movie: Harry Potter
          ```
      - pageTitle: String interpolation
        isActive: true
        body: |-

          # String interpolation

          An ES6 feature, called string interpolation, allow us to insert variables into strings using template literals.

          ```javascript
          const favoriteMovie = "Harry Potter";
          console.log(`My favorite movie: ${favoriteMovie}`); // output: My favorite movie: Harry Potter
          ```
      - pageTitle: Boolean
        isActive: true
        body: |-

          # Boolean

          We can compare this data type to the answer to a "yes or no" question. Booleans can only have two values `true` or `false` (without quotes).

          ```javascript
          const areUAwesome = true;
          ```

      - pageTitle: Null type
        isActive: true
        body: |-

          # Null

          This data type represents the intentional absence of a value. It is helpful to think of it as a special value which represents unknown or empty. The null type has exactly one value, `null` (without quotes).

      - pageTitle: Undefined
        isActive: true
        body: |-

          # Undefined

          This data type represents the unintentional absence of a value. The meaning of undefined is “value is not assigned”. It has exactly one value, `undefined` (without quotes).

      - pageTitle: Null vs undefined
        isActive: true
        body: |-

          # `null` vs `undefined`

          There are two ways to express **nothing** in JavaScript, by using `null` or `undefined`.<br/>

          Whereas `null` is a value specifically assigned,​ `undefined` is a variable which has been declared (created), but has not yet been defined (given a value).

          ```javascript
          let theVoid;

          console.log(theVoid); // output: undefined

          theVoid = null;

          console.log(theVoid); // output: null
          ```
      - pageTitle: Symbol
        isActive: true
        body: |-

          # Symbol

          The symbol type is used to create unique identifiers for objects.

      - pageTitle: BigInt
        isActive: true
        body: |-

          # BigInt

          In JavaScript there is a technical limitation. The number type cannot represent integer values larger than (2<sup>53</sup>-1, that is 9007199254740991), or less than -(2<sup>53</sup>-1) for negatives. Usually that is enough, but sometimes, when we need really big numbers, we can create a BigInt value by appending _n_ to the end of an integer.<br/>

          ```javascript
          const numOfStars = 1234567890123456789012345678901234567890n;
          ```
      - pageTitle: Object
        isActive: true
        body: |-

          # Object
          An object is a collection of related data and this data is organized into `key-value` pairs.<br/>

          ```javascript
          const bestGame = {
              title: "Super Mario Odyssey",
              starRating: 5,
          };
          ```

      - pageTitle: Array
        isActive: true
        body: |-

          # Array
          An array is also a collection of data, but this one is organised like a list. While it has the capability to store multiple data types just like objects, it is more common to find arrays that contain only a single type of data at a time (e.g. list of strings).

          ```javascript
          const vacationSpots = ["Bali", "Thailand", "Japan"];
          ```

      - pageTitle: Function
        isActive: true
        body: |-

          # Function
          A function is a reusable block of code that groups together a sequence of statements to perform a specific task. It has a unique quality regarding the other reference types, it can be invoked (or called) on demand.

          ```javascript
          function mult(num1, num2) {
              return num1 * num2;
          }

          mult(2, 3);
          ```

      - pageTitle: typeof operator
        isActive: true
        body: |-

          # `typeof` operator

          If we want to check a value’s type, we can ask JavaScript using the `typeof` operator. The `typeof` operator returns a **string**, indicating the type name of the operand.

          ```javascript
          console.log(typeof undefined); // output: undefined
          console.log(typeof "foo"); // output: string
          console.log(typeof true); // output: boolean
          console.log(typeof 0); // output: number
          console.log(typeof 10n); // output: bigint
          console.log(typeof {}); // output: object
          ```

          <blockquote className="hint">
              Can you guess the typeof null?
          </blockquote>
      - pageTitle: typeof null
        isActive: true
        body: |-

          # typeof null

          ```javascript
          console.log(typeof null); // output: object
          ```

          The result of `typeof null` is "object". This is a recognized error in `typeof` behavior, from the first implementation of JavaScript and kept for compatibility. Definitely, `null` is **not** an object, but as we have already seen, it is a primitive type.
      - pageTitle: Primitive types vs reference types
        isActive: true
        body: |-

          # Primitive types vs reference types

          All primitive types are **immutable** (read-only). Reference types (objects, arrays, functions) are **mutable**.

          When you access a variable with a primitive value, you access the actual value stored in that variable (access by value). When it comes to reference types, the values are the memory addresses of those types.
      - pageTitle: Accessing by value vs by reference
        isActive: true
        body: |-

          # Accessing

          <h4>By value / reference</h4></br>

          ```javascript
          const arr = ["Hello", "world", "!"];
          const str = "Hello world!";

          // access array's first item and string's first character
          console.log(arr[0]); // output: Hello
          console.log(str[0]); // output: H

          // change array's first item
          arr[0] = "Goodbye";
          console.log(arr); // output: ["Goodbye", "world", "!"]

          // but cannot change string's first character
          str[0] = "G";
          console.log(str); // TypeError: Cannot assign to read only property '0' of string 'Hello world!'
          ```
      - pageTitle: Copying by value
        isActive: true
        body: |-

          # Copying

          <h4>By value</h4></br>

          When you assign a variable that stores a primitive value to another one, the value stored in the first variable is copied into the latter.

          ```javascript
          // declare variable greeting and initialize its value to "Hello"
          let greeting = "Hello";

          // declare variable copiedValue and assign it the value of variable greeting
          let copiedValue = greeting;

          console.log(greeting); // output: Hello
          console.log(copiedValue); // output: Hello

          // reassign variable copiedValue new value "Goodbye"
          copiedValue = "Goodbye";

          // value of variable greeting doesn't change
          console.log(greeting); // output: Hello
          console.log(copiedValue); // output: Goodbye
          ```
      - pageTitle: Copying by reference
        isActive: true
        body: |-

          # Copying

          <h4>By reference</h4></br>

          When you assign a reference value from one variable to another, both variables will point to the same address in memory.

          ```javascript
          // declare variable hero that holds an object
          let hero = { name: "Batman" };

          // declare variable copiedValue and assign it the value of variable hero
          let copiedValue = hero;

          // both hero and copiedValue are now referencing the same object
          console.log(hero.name); // output: Batman
          console.log(copiedValue.name); // output: Batman

          // modify value stored in name property using variable copiedValue
          copiedValue.name = "Wonder Woman";

          // change is also reflected in variable hero
          console.log(hero.name); // output: Wonder Woman
          console.log(copiedValue.name); // output: Wonder Woman
          ```
  - sectionTitle: Variables
    isActive: true
    pages:
      - pageTitle: What is a variable
        isActive: true
        body: |-

          # What is a variable

          A variable is a placeholder (container) for a value.

          Variables can contain just about anything: strings, numbers, complex data, functions.

          ```javascript
          // a variable that contains a string value
          let name = "Bob";

          // a variable that contains a boolean value
          let isProgrammer = true;

          // a variable that contains a numeric value
          let age = 35;
          ```

          <blockquote className="hint">
              Variables contain values and are not the values themselves, as it is shown in the next slide.
          </blockquote>
      - pageTitle: This is a variable
        isActive: true
        body: |-

          ![This is a variable!](/img/javascript/variables.png)
      - pageTitle: Variable declaration
        isActive: true
        body: |-

          # Variable declaration

          To use a variable, we need to declare it. To do this, we type the [keyword](https://www.w3schools.com/js/js_reserved.asp) `let` , `const` or `var` followed by the name we want to address the variable.

          ```javascript
          let myName;
          const myJob;
          var myAge;
          ```
          </br>

          A variable that exists but has no defined value is not the same as a variable that does not exist at all.

          ```javascript
          let myName;

          console.log(myName); // output: undefined (variable exists but has no value)
          console.log(car); // ReferenceError: car is not defined
          ```
      - pageTitle: Variable initialization
        isActive: true
        body: |-

          # Variable initialization

          Since we declare a variable, we can initialize it with a value. This can be done with two ways:

          - by declaring a variable, and then pass a value (not with const though)

          ```javascript
          let myName;
          myName = "Kostis";
          ```

          - by declaring and initializing a variable at the same time

          ```javascript
          let myName = "Kostis";
          ```
      - pageTitle: What is an identifier
        isActive: true
        body: |-

          # What is an identifier

          An identifier is a sequence of characters that identifies a variable, function, or property. It is nothing more but a name assigned to them.

          In JavaScript, identifiers are case-sensitive and can contain [Unicode](https://developer.mozilla.org/en-US/docs/Glossary/Unicode) letters, \$, \_, and digits (0-9), but may not start with a digit.
      - pageTitle: Valid identifiers
        isActive: true
        body: |-

          # Valid identifiers

          ```javascript
          // identifier is myAge
          let myAge = 29;

          // identifier is my_name
          let my_name = "kostis";

          // identifier is _name
          let _name = "kostis";

          // identifier is role1
          let role1 = "programmer";

          // identifier is $isAdult
          let $isAdult = true;
          ```
      - pageTitle: Invalid identifiers
        isActive: true
        body: |-

          # Invalid identifiers

          ```javascript
          // cannot start with a digit
          let 1myAge = 29;

          // cannot be a reserved keyword
          let function = "kostis";

          // the dash symbol (-) is not allowed in an identifier
          let my-name = "kostis";
          ```
      - pageTitle: Variables vs identifiers
        isActive: true
        body: |-

          # Variables vs identifiers

          The difference between identifiers and variables is the same as that between names and people.

          Names identify people. They can also identify dogs, for example. Names are not people, nor are people names.
      - pageTitle: var vs let vs const
        isActive: true
        body: |-

          # `var` - `let` - `const`

          <h4>Differences</h4></br>

          A constraint of the `const` variable is that you have to initialize the variable with an initial value. Also, the const variable cannot be reassigned.

          ```javascript
          const hero; // SyntaxError: Missing initializer in const declaration
          const hero = "Batman";

          hero = "Joker"; // TypeError: Assignment to constant variable
          ```
      - pageTitle: Differences between var let const pt2
        isActive: true
        body: |-

          # `var` - `let` - `const`

          <h4>Differences</h4></br>

          A variable with `let`, on the other side, can be declared with or without an initial value. Also, `let` variable value can be updated.

          ```javascript
          let hero = "Batman";
          hero = "Joker";

          console.log(hero); // output: "Joker"
          ```

          Variables declared with the `var` keyword behave almost as `let` variables: can be initialized or not, as well as they can be reassigned.

          However, they behave differently based on scope and hoisting.
      - pageTitle: Comments
        isActive: true
        body: |-

          # Comments

          Comments can be used to explain JavaScript code.

          They can also be used to prevent execution, when testing alternative code.

          Comments can be single line or multi line:

          ```javascript{1-3}
          // This is a single line comment where I explain what this variable does
          let aVeryComplexCalculation = 11 ^ (4 * 8);

          /*
              This is a multi line comment
              where I prevent JavaScript excecution
              let aVeryComplexCalculation = 11 ^ (4 * 8);
              console.log(aVeryComplexCalculation)
          */
          ```
  - sectionTitle: Coercion
    isActive: true
    pages:
      - pageTitle: What is coercion
        isActive: true
        body: |-

          # What is coercion

          Type coercion is the process of converting a value from one type to another (such as string to number, object to boolean, and so on).

          JavaScript is a `dynamically typed language`, which means that we do not need to specify what data type a variable will contain.

          ```javascript
          const myString = "Hello";
          ```
      - pageTitle: Implicit type coercion
        isActive: true
        body: |-

          # Implicit type coercion

          `Implicit type coercion` is when JavaScript automatically converts values, as it is a [weakly-typed language](https://en.wikipedia.org/wiki/Strong_and_weak_typing).

          ```javascript
          const myNumber1 = "5";
          const myNumber2 = 7;

          const sum = myNumber1 + myNumber2;

          console.log(sum); // output: '57'
          ```
      - pageTitle: Explicit type coercion
        isActive: true
        body: |-

          # Explicit type coercion

          There is also the `explicit type coercion` (or type casting), where a developer expresses the intention to convert between types by writing the appropriate code like:

          ```javascript
          let age = "28";

          // age in coerced from string to number
          Number(age); // output: 28
          ```
      - pageTitle: Types of coercion
        isActive: true
        body: |-

          # Types of coercion

          There are three types of conversion in JavaScript:

          - to string

          - to boolean

          - to number
      - pageTitle: "To string "
        isActive: true
        body: |-

          # to `string`

          To explicitly convert a value to a string, we can use the `String` function.

          ```javascript
          // explicitly
          String(123); // output: '123'

          // implicitly
          123 + ""; // output: '123'
          ```

          </br>

          All primitive values can be converted to strings.

          ```javascript
          String(123); // output: '123'
          String(-12.3); // output: '-12.3'
          String(null); // output: 'null'
          String(undefined); // output: 'undefined'
          String(true); // output: 'true'
          String(false); // output: 'false'
          ```
      - pageTitle: To boolean
        isActive: true
        body: |-

          # to `boolean`

          To explicitly convert a value to a boolean, we can use the `Boolean` function.

          Implicit conversion happens in logical context, or it is triggered by the logical operators `||, &&, !`.

          ```javascript
          // explicitly
          Boolean(2); // output: true

          // implicitly due to logical context
          if (2) {
            console.log("It is true"); // output: 'It is true'
          }

          // implicitly due to the logical OR operator
          !!2; // output: true
          2 || "hello"; // output: 2
          ```

          ```javascript
          // JavaScript behind the scenes will do if(Boolean(2))... which results in true
          if (2) {
            console.log("Truthy"); // output: 'Truthy'
          }
          ```
      - pageTitle: Falsy values
        isActive: true
        body: |-

          # Falsy values

          ```javascript
          Boolean("");
          Boolean(0);
          Boolean(-0);
          Boolean(NaN);
          Boolean(null);
          Boolean(undefined);
          Boolean(false);
          ```

          <blockquote className="hint">
              As there are only two possible results of boolean conversion, true or false, it is just easier to remember the list of falsy values.
          </blockquote>
      - pageTitle: To number
        isActive: true
        body: |-

          # to `number`

          For an explicit conversion apply the `Number` function.

          ```javascript
          Number("42"); // output: 42
          Number(""); // output: 0
          Number(true); // output: 1
          Number(false); // output: 0
          ```
      - pageTitle: Using addition operator
        isActive: true
        body: |-

          # Using the `+` operator

          When we add two operands, if any of the values is of string type, JavaScript will try to automatically convert the other values to a string.

          ```javascript
          // with implicit type casting
          10 + "10"; // output: '1010'
          ```

          <blockquote className="hint">
              Adding null and undefined results in NaN.
          </blockquote>

          ```javascript
          null + undefined; // output: NaN
          ```
      - pageTitle: Using subtraction operator
        isActive: true
        body: |-

          # Using the `-` operator

          Using the `-` operator, the JavaScript engine will subtract the values and try to cast them into integers implicitly.

          ```javascript
          "2" - 1; // output: 1
          10 - "10"; // output: 0
          "hello" - "there"; // output: NaN
          null - undefined; // output: NaN
          ```
      - pageTitle: Using abstract equality comparison
        isActive: true
        body: |-

          # Using the `==` operator

          In JavaScript, the `==` operator compares values ignoring their types.

          The `==` operator will compare for equality `after` doing any necessary type conversions.

          ```javascript
          10 == "10"; // true
          ```
  - sectionTitle: Operators
    isActive: true
    pages:
      - pageTitle: What is an operator
        isActive: true
        body: |-

          # What is an operator

          An operator is a symbol that performs an operation on single or multiple operands (data values) and produces a result. Most commonly operators are used to assign, compare, perform arithmetic operations, evaluate expressions, and more​.

          There are various JavaScript operators and you can find more information [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators).
      - pageTitle: Arithmetic operators
        isActive: true
        body: |-

          # Arithmetic operators


          | Name                 | Symbol | Description                 |
          | :------------------- | :-------------------------------------: | :------------------------- |
          | Addition             |                  x + y                  | performs addition on operands                                                                                        |
          | Subtraction          |                  x - y                  | performs subtraction on operands                                                                                     |
          | Multiplication       |                 x \* y                  | performs multiplication on operands                                                                                  |
          | Division             |                  x / y                  | performs division on operands                                                                                        |
          | Remainder or Modulus |                  x % y                  | returns the integer remainder of dividing two operands                                                               |
          | Exponentiation       |                x \*\* y                 | calculates the base (left operand) to the exponent power (right operand)                                             |
          | Increment            |                   ++x                   | adds one to its operand. If used as a prefix operator, it returns the value of its operand after adding one             |
          |                      |                   x++                   | if used as a postfix operator, it returns the value of its operand before adding one                                    |
          | Decrement            |                   --x                   | subtracts one from its operand, if used as a prefix operator, it returns the value of its operand after subtracting one  |
          |                      |                   x--                   | if used as a prefix operator, it returns the value of its operand before subtracting one                                |

      - pageTitle: Comparison operators
        isActive: true
        body: |-

          # Comparison operators


          | Name                  | Symbol | Description                                                                                     |
          | :-------------------- | :-------------------------------------: | :---------------------------------------------------------------------------------------------- |
          | Equal                 |                 x == y                  | returns true if operands are equal, the data type of operands is not taken into account          |
          | Strict equal          |                 x === y                 | returns true if operands are equal and of the same data type                                    |
          | Not equal             |                 x != y                  | returns true if operands are not equal                                                          |
          | Strict not equal      |                 x !== y                 | returns true if operands are of the same data type but not equal, or are of different data type |
          | Greater than          |                  x > y                  | returns true if left operand is greater than right operand                                      |
          | Greater than or equal |                 x >= y                  | returns true if left operand is greater than or equal to right operand                          |
          | Less than             |                  x < y                  | returns true if left operand is less than right operand                                         |
          | Less than or equal    |                 x <= y                  | returns true if left operand is less than or equal to right operand                             |

      - pageTitle: Logical operators
        isActive: true
        body: |-

          # Logical operators


          | Name        | Symbol | Description                                                                             |
          | :---------- | :-------------------------------------: | :------------------------------------------------------------------------------------   |
          | Logical AND |                 x && y                  | if left operand is truthy, it returns right operand, otherwise it returns the left operand |
          | Logical OR  |                x \|\| y                 | if left operand is falsy, it returns right operand, otherwise it returns the left operand  |
          | Logical NOT |                   !x                    | returns true if single operand is falsy and returns false if single operand is truthy   |

      - pageTitle: Examples of AND operator
        isActive: true
        body: |-

          # `AND` logical operator

          <h4>Examples</h4></br>

          ```javascript
          const expr1 = true && true; // output: true
          const expr2 = true && false; // output: false
          const expr3 = false && true; // output: false
          const expr4 = "Dog" && "Cat"; // output: Cat
          const expr5 = "" && "Cat"; // output: ""
          const expr6 = "Cat" && ""; // output: ""
          ```
      - pageTitle: Examples of OR operator
        isActive: true
        body: |-

          # `OR` logical operator

          <h4>Examples</h4></br>

          ```javascript
          const expr1 = true || true; // output: true
          const expr2 = true || false; // output: true
          const expr3 = false || true; // output: true
          const expr4 = "Dog" || "Cat"; // output: Dog
          const expr5 = "" || "Cat"; // output: Cat
          const expr6 = "Cat" || ""; // output: Cat
          ```
      - pageTitle: Examples of NOT operator
        isActive: true
        body: |-

          # `NOT` logical operator

          <h4>Examples</h4></br>

          ```javascript
          const expr1 = !true; // output: false
          const expr2 = !false; // output: true
          const expr3 = !"Cat"; // output: false
          const expr4 = !""; // output: true
          ```
      - pageTitle: Assignment operators
        isActive: true
        body: |-

          # Assignment Operators


          | Name                       | Symbol | Description                                                                          |
          | :------------------------- | :-------------------------------------: | :----------------------------------------------------------------------------------- |
          | Assignment                 |                  x = y                  | assigns right operand value to left operand                                          |
          | Addition assignment        |                 x += y                  | adds up left and right operand and then assign the result to left operand            |
          | Substraction assignment    |                 x -= y                  | subtracts right operand from left operand and then assign the result to left operand |
          | Multiplication assignment  |                 x \*= y                 | multiplies left and right operand and then assign the result to left operand         |
          | Division Assignment        |                 x /= y                  | divides left operand by right operand and assigns the result to left operand         |
          | Remainder assignment       |                 x %= y                  | divides left operand by right operand and assigns the remainder to left operand      |
          | Logical AND assignment     |                 x &&= y                 | only assigns right operand value to left operand if x is truthy                      |
          | Logical OR assignment      |                x \|\|= y                | only assigns right operand value to left operand if x is falsy                       |
          | Logical nullish assignment |                 x ??=y                  | only assigns right operand value to left operand if x is nullish (null or undefined) |

  - sectionTitle: Conditionals
    isActive: true
    pages:
      - pageTitle: What are conditionals
        isActive: true
        body: |-

          # Conditionals

          Conditionals are commands for handling decisions. Specifically, conditionals perform different actions depending on whether a developer defined a boolean condition which evaluates to `true` or `false`.

          Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

      - pageTitle: Conditionals types
        isActive: true
        body: |-

          # Conditionals types

          JavaScript can use the following three statements as conditionals:

          - if...else</br>
          - switch</br>
          - ternary operator</br>

      - pageTitle: if... statement
        isActive: true
        body: |-

          # `if...` statement

          The `if` statement is one of the most frequently used statements in JavaScript. It executes a statement or block of code if a condition is satisfied.<br/>

          ```javascript
          if (condition) {
              // code block to be executed if the condition is true
          }
          ```

      - pageTitle: Condition values
        isActive: true
        body: |-

          # Condition values

          The condition can be any valid expression. In general, the condition evaluates to a boolean value, either `true` or `false`. <br/>
          In case the condition evaluates to a non-boolean value, JavaScript implicitly converts its result into a boolean value.

          ```javascript
          const age = 23;

          if (age > 18) {
              console.log("You are an adult"); // output: You are an adult
          }
          ```

          In the above example, `age > 18` will evaluate to `true`, so the block of code will be excecuted.

      - pageTitle: else statement
        isActive: true
        body: |-

          # `...else` statement

          In case you want to execute another statement when the condition evaluates to `false`, you can use the `else` statement as follows.

          ```javascript
          if (condition) {
              // code block to be executed if the condition is true
          } else {
              // code block to be executed if the condition is false
          }
          ```

      - pageTitle: if...else statement
        isActive: true
        body: |-

          # `if...else` statement

          You can also chain the `if...else` statements.

          ```javascript
          if (condition1) {
              // code block to be executed if condition1 is true
          } else if (condition2) {
              // code block to be executed if condition2 is true
          } else {
              // code block to be excecuted if condition1 and condition2 are false
          }
          ```
      - pageTitle: if-else statement example
        isActive: true
        body: |-

          # `if...else` statement

          <h4>Example</h4></br>

          ```javascript
          let age = 35;

          if (age < 18) {
              console.log("Aphrodite is under 18 years old.");
          } else if (age >= 18 && age <= 30) {
              console.log("Aphrodite is between the ages of 18 and 30.");
          } else {
              console.log("Aphrodite is over 30 years old."); // output: Aphrodite is over 30 years old.
          }
          ```
      - pageTitle: if...else statement exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://conditionals/if-else-exercise)
      - pageTitle: switch statement
        isActive: true
        body: |-

          # `switch` statement

          The `switch` statement receives a single expression/value as an input, and then looks through a number of choices until it finds one that matches that value, executing the corresponding code that goes along with it.<br/>


          ```javascript
          switch (expression) {
              case choice1:
                  // code block to be executed when the result of the expression matches choice1
                  break;

              case choice2:
                  // code block to be executed when the result of the expression matches choice2
                  break;

              // include as many cases as you like

              default:
                  // code block to be executed when none of the values match the value of the expression
          }
          ```

      - pageTitle: switch statement example
        isActive: true
        body: |-

          # `switch` statement

          <h4>Example</h4></br>

          ```javascript
          let weather = "rainy";

          switch (weather) {
              case "sunny":
                  console.log("It is nice and sunny outside today. Wear shorts!");
                  break;

              case "rainy":
                  console.log("Take an umbrella!");
                  break;

              case "snowing":
                  console.log("Best to stay in with a cup of hot chocolate");
                  break;

              default:
                  console.log("Weather status not found");
              }
          }
          ```

      - pageTitle: switch-statement-exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://conditionals/switch-exercise)
      - pageTitle: What is the ternary operator
        isActive: true
        body: |-

          # What is the ternary operator

          The `ternary` operator is an operator which tests a condition and returns one value/expression if it is `true`, and another if it is `false`.<br/>
          This can be useful in some situations, and can take up a lot less code than an `if...else` block if you have two choices that are chosen between a true/false condition.

      - pageTitle: Ternary operator syntax
        isActive: true
        body: |-

          # Ternary operator

          ```javascript
          condition ? expressionIfTrue : expressionIfFalse;
          ```

          - **condition**</br>
            an expression whose value is used as a condition

          - **expressionIfTrue**</br>
            an expression which is evaluated if the condition evaluates to a truthy value

          - **expressionIfFalse**</br>
            an expression which is executed if the condition is falsy

      - pageTitle: Ternary operator example
        isActive: true
        body: |-

          # Ternary operator

          <h4>Example</h4></br>

          ```javascript
          let speed = 230;

          let message = speed > 140 ? "Too fast" : "Good job driver";

          console.log(message); // output: Too fast
          ```

      - pageTitle: ternary-operator-exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://conditionals/ternary-exercise)
      - pageTitle: Ternary operators chaining
        isActive: true
        body: |-

          # Ternary operator chain

          Note that ternary operator is right-associative, which means it can be "chained" in the following way.</br>

          ```javascript
          condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
          ```
          Though, we do not normally use it that way as it is not quite readable.

  - sectionTitle: Loops
    isActive: true
    pages:
      - pageTitle: What is a loop
        isActive: true
        body: |-

          # What is a loop

          A loop is a programming tool that executes a block of code repeatedly, until a specified condition is reached.

          Loops are handy, when we need to repeat a process multiple times in a row, each time with a different value. Often, this is the case when we work with arrays.

          Loops allow us to create efficient code that automates processes to make scalable, manageable programs. At the same time, we avoid unnecessary repetitions and code duplications.

          ```javascript
          // repeating tasks manually
          const withoutLoop = ["This", "is", "not", "the", "best", "way"];

          console.log(withoutLoop[0]); // output: This
          console.log(withoutLoop[1]); // output: is
          console.log(withoutLoop[2]); // output: not
          console.log(withoutLoop[3]); // output: the
          console.log(withoutLoop[4]); // output: best
          console.log(withoutLoop[5]); // output: way
          ```
      - pageTitle: for loop
        isActive: true
        body: |-

          # `for` loop

          ```javascript
          for (statement 1; statement 2; statement 3) {
            // code block to be executed
          }
          ```

          A `for` loop consists of an iterator variable and three statements, separated by a semicolon `;`.

          - the initialization statement starts the loop and is executed only once
          - the stopping condition is the condition that the iterator variable is evaluated against
          - the iteration statement is executed every time after the code block has run and is used to update the iterator variable on each loop
      - pageTitle: for loop example
        isActive: true
        body: |-

          # `for` loop

          <h4>Example</h4></br>

          ```javascript
          for (let i = 1; i < 4; i++) {
            console.log(`This is loop number ${i}`);
          }

          // output:
          // This is loop number 1
          // This is loop number 2
          // This is loop number 3
          ```
      - pageTitle: for loop example breakdown
        isActive: true
        body: |-
          <!-- TODO: not sure this slide should stay -->

          # for loop

          <h4>Example breakdown</h4></br>

          ```javascript
          for (let i = 1; i < 4; i++) {
            console.log(`This is loop number ${i}`);
          }
          ```

          - the iterator variable is initialized `let i = 1` and the loop will start counting at 1
          - the stopping condition `i < 4` defines that the loop will run as long as the iterator variable is less than 4
          - the iteration statement `i++` increments the value of the iterator variable, after each loop, by one</br>
            In other words, for the first iteration the variable `i` will equal to 1, for the second iteration it will equal to 2, etc.
          - when the variable `i` will be equal to 4, the stopping condition will become false and the code block will stop executing
      - pageTitle: for loop exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://loops/exercises/for-loop-exercise)
      - pageTitle: Looping backwards
        isActive: true
        body: |-

          # Looping backwards

          To make a `for` loop run in reverse, a few modifications to the statements are required:

          - we need to set the iterator variable to its highest value
          - we should reverse the stopping condition so that the iterator variable is more than the desired value
          - we should use the decrement operator on the iterator variable

          ```javascript
          for (let i = 3; i > 0; i--) {
            console.log(`This is loop number ${i}`);
          }

          // output:
          // This is loop number 3
          // This is loop number 2
          // This is loop number 1
          ```
      - pageTitle: Looping through arrays
        isActive: true
        body: |-

          # Looping through arrays

          To loop through an array, we should use the array’s `length` property in the stopping condition.

          ```javascript
          const loopingArrays = ["This", "is", "so", "easy"];

          for (let i = 0; i < loopingArrays.length; i++) {
            console.log(loopingArrays[i]);
          }

          // output:
          // This
          // is
          // so
          // easy
          ```
      - pageTitle: Loop through arrays exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://loops/exercises/loop-through-arrays-exercise)

          <blockquote className="hint">
              Arrays are zero indexed and the index of the last element in an array is equivalent to the length of that array, minus one.
          </blockquote>
      - pageTitle: while loop
        isActive: true
        body: |-

          # `while` loop

          ```javascript
          while (testCondition) {
            // code block to be executed
          }
          ```

          The `while` loop iterates over a block of code, as long as a specified condition is true. It consists of a test condition, that will be evaluated before each loop. As long as the condition is true, the code block will continue to run.
      - pageTitle: while loop example
        isActive: true
        body: |-

          # while loop

          <h4>Example</h4></br>

          ```javascript
          let i = 1;

          while (i < 4) {
            console.log(`This is loop number ${i}`);
            i++;
          }

          // output:
          // This is loop number 1
          // This is loop number 2
          // This is loop number 3
          ```

          <blockquote className="hint">
            If we forget to increase the variable inside our code block, the loop will never end. This is called an infinite loop and we always want to avoid it, as it causes the browser to crash.
          </blockquote>
      - pageTitle: while loop exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://loops/exercises/while-loop-exercise)
      - pageTitle: while vs for loop
        isActive: true
        body: |-

          # while vs `for` loop

          In theory, we should use the for loop when we already know the number of iterations. The while loop is ideal to execute an undetermined number of iterations.

          Ultimately, the difference between while loops and for loops is purely syntactic.
      - pageTitle: do-while loop
        isActive: true
        body: |-

          # do-while loop

          ```javascript
          do {
            // code block to be executed
          } while (testCondition);
          ```

          The `do-while` loop is a variation of the while loop. It is useful when we want our code block to run at least once, whether or not the condition evaluates to true. This means that the test condition is evaluated for the first time **after** the specified task inside our block has been executed once.
      - pageTitle: do-while loop example
        isActive: true
        body: |-

          # do-while loop

          <h4>Example</h4></br>

          ```javascript
          let i = 1;

          do {
            console.log(`This is loop number ${i}`);
            i++;
          } while (i < 4);

          // output:
          // This is loop number 1
          // This is loop number 2
          // This is loop number 3
          ```
      - pageTitle: break keyword
        isActive: true
        body: |-

          # `break` keyword

          When we want to stop a loop from continuing to execute, even though the original stopping condition has not been reached, we can use the keyword `break`. The `break` statement "jumps out" of a loop.

          ```javascript
          for (let i = 0; i < 99; i++) {
            if (i > 2) {
              break;
            }
            console.log("I am imprisoned!");
          }

          console.log("I broke out of the loop!");

          // output:
          // I am imprisoned!
          // I am imprisoned!
          // I am imprisoned!
          // I broke out of the loop!
          ```
      - pageTitle: continue keyword
        isActive: true
        body: |-

          # `continue` keyword

          When we want to skip one iteration in the loop, if a specified condition occurs, and continue with the next iteration, we can use the keyword `continue`. The `continue` statement "jumps over" one iteration in the loop.

          ```javascript
          const bestFoods = ["burger", "pizza", "salad", "sushi"];

          for (let i = 0; i < bestFoods.length; i++) {
            if (bestFoods[i] === "salad") {
              continue;
            }
            console.log(bestFoods[i]);
          }

          // output:
          // burger
          // pizza
          // sushi
          ```
  - sectionTitle: Expressions and Statements
    isActive: true
    pages:
      - pageTitle: What is an expression
        isActive: true
        body: |-

          # What is an expression

          An expression is a piece of code that resolves to a value.

          <blockquote className="hint">
              Expressions always result in a single value.
          </blockquote>

          There are several expression categories.
      - pageTitle: "Arithmetic expressions "
        isActive: true
        body: |-

          # Arithmetic expressions

          Expressions that evaluate to a number.

          ```javascript
          6 / 3; // output: 2
          2 + 8; // output: 10
          ```
      - pageTitle: String expressions
        isActive: true
        body: |-

          # String expressions

          Expressions that evaluate to a string.

          ```javascript
          "Bob" + " Alice"; // output: 'Bob Alice'
          ```
      - pageTitle: Primary expressions
        isActive: true
        body: |-

          # Primary expressions

          Primary expressions are considered the literal values, variable references and some keywords.
          For example:

          ```javascript
          // string and number literal
          "text";
          125;

          // variable references
          let price = 1.99;
          price;

          // basic keywords and reserved words:
          this;

          // logical:
          5 > 3;
          true || false;
          !true;
          ```
      - pageTitle: Assignment expressions
        isActive: true
        body: |-

          # Assignment expressions

          Expressions that use the `=` operator to assign a value to a variable.

          ```javascript
          let price = 1.99;
          ```

          </br>

          Also expressions can consist of multiple sub-expressions.

          ```javascript
          // step 1 -> 12 resolves to 12
          12 + square(7 + 3);
          // step 2 -> 7 + 3 resolves to 10
          12 + square(10);
          // step 3 -> square(10) resolves to 100
          12 + 100;
          // step 4 -> 12 + 100 resolves to 112
          112;
          ```
      - pageTitle: What is a statement
        isActive: true
        body: |-

          # What is a statement

          A statement is a piece of code that performs an action.

          JavaScript distinguishes expressions and statements.

          Conditions with `if`, loops with `while` and `for`, variables creation are all statements because they just perform actions and control actions, but they **are not** evaluated to values.
      - pageTitle: Statement example
        isActive: true
        body: |-

          # Statements

          <h4>Example</h4></br>

          ```javascript
          // if, else statement
          if (num > 0) {
            return num;
          } else {
            return 0;
          }

          // while statement
          while (counter < 0) {
            result = result * result;
          }

          // for statement
          for (let i = 0; i < 5; i++) {
            result *= counter;
          }

          // statement
          let age;

          // expression
          age = 20;
          ```
      - pageTitle: Statements vs expressions
        isActive: true
        body: |-

          # Statements vs expressions

          JavaScript programs are actually a sequence of statements.

          When JavaScript expects a statement, you can also write an expression. But you cannot use a statement in the place of an expression.

          ```javascript
            console.log(const x) // Error! You can pass only expressions as a function argument

            let b = if (true) { return 100} // SyntaxError!

            // you cannot use a statement where an expression is expected
            let a = let b; // SyntaxError: Unexpected identifier

            // since (b = 1) is an assignment expression, it is valid code
            let a = (b = 1);

            console.log(a) // output: 1
          ```
      - pageTitle: Conclusion
        isActive: true
        body: |-

          # Conclusion

          Bottom line, JavaScript code consists of statements.

          - they are executed one by one, in the same order as they are written
          - semicolons separate JavaScript statements and mark the end of a statement
          - statements can contain expressions, keywords and operators, for example
          - esxpressions are parts of statements that return values
  - sectionTitle: Debugging
    isActive: true
    pages:
      - pageTitle: What is a bug
        isActive: true
        body: |-

          # What is a bug

          Bug is a failure or a flaw in our program and produces an incorrect or undesired result that deviates from the expected result or behavior.

          For example a user interaction with the application or website is triggering a weird behaviour, such as a form validation or submit button that does not work.
      - pageTitle: What is debugging
        isActive: true
        body: |-

          # What is debugging

          - it is the technique of finding these bugs and fixing them
          - it is not easy but fortunately modern browsers have build-in debuggers
      - pageTitle: JavaScript debuggers - Console
        isActive: true
        body: |-

          # `console.log` method

          The JavaScript console API is an easy way to debug code in JavaScript. Adding a `console.log(value)` method into your code, can be used to print out any values (e.g. strings, objects, function calls etc.) in the JavaScript console of the dev tools.

          ```javascript
          // declare function addNum,
          // which should return the sum of the two parameters passed
          function addNum(num1, num2) {
            num1 + num2;
          }

          // store the returned sum value in a variable
          const sum = addNum(3, 5);

          // print out variable sum
          // expected output should be 8
          console.log(sum); // output: undefined
          ```
      - pageTitle: JavaScript debuggers - Debugger
        isActive: true
        body: |-

          # `debugger` statement

          The `debugger` statement pauses code execution wherever we insert it in our code. The program stops running whenever it reaches such a statement, allowing us to investigate with the help of the source tab of the dev tools.

          ```javascript
          // declare function addNum,
          // which returns the sum of the two parameters passed
          function addNum(num1, num2) {
            // debugger stops code execution at this point
            debugger;
            return num1 + num2;
          }

          // calling function addNum, but with only one argument
          const sum = addNum(3);
          console.log(sum); // output: NaN
          ```
      - pageTitle: JavaScript debuggers - Breakpoints
        isActive: true
        body: |-

          # Using breakpoints

          Browsers come with the ability to set a breakpoint on a specific line of our code. When the execution of the program reaches a line with a breakpoint, it is paused and all the values of all variables, at that moment in time, are displayed automatically in the source tab of the dev tools.

          To set a breakpoint in the source section, we need to click on the line number where we want to add a breakpoint. Once that is done, we can pause script execution. A breakpoint is equivalent to a debugger statement, except that the debugger is set in our code, not in the dev tools.

          [Example](codesandbox-link://debugging/breakpoints-example)
  - sectionTitle: Functions
    isActive: true
    pages:
      - pageTitle: What is a function
        isActive: true
        body: |-

          # What is a function

          A function is a reusable block of code that groups together a sequence of statements to perform a specific task.
          When we write a program, we often need to perform a specific task multiple times. Instead of repeating the same code all over the place, we can use a function to wrap that code and reuse it.

      - pageTitle: Function declaration
        isActive: true
        body: |-

          # Function declaration

          ```javascript
          function funcIdentifier(parameters) {
            // function body
          }
          ```

          A function declaration consists of:

          - the `function` keyword, followed by a function `identifier`</br>

          - an optional list of **parameters** inside parentheses</br>

          - a function body enclosed in curly braces `{}`, where the logic is implemented
      - pageTitle: Function declaration example
        isActive: true
        body: |-

          # Function declaration

          <h4>Example</h4></br>

          ```javascript
          function sayHello(name1, name2, name3) {
            console.log(`Hello, ${name1}!`);
            console.log(`Hello, ${name2}!`);
            console.log(`Hello, ${name3}!`);
          }
          ```
      - pageTitle: Function invocation
        isActive: true
        body: |-

          # Function invocation

          By simply declaring a function, the code inside that function body does not run. In order to execute a function, we need to call (or invoke) it first. We can call the same function as many times as we want.

          To call a function, we use its identifier, followed by a set of parentheses.

          ```javascript
          // function declaration
          function sayHello() {
            console.log("Hello, stranger!");
          }

          // function invocation
          sayHello(); // output: Hello, stranger!
          ```
      - pageTitle: Function parameters vs function arguments
        isActive: true
        body: |-

          # Parameters vs arguments

          Parameters are used when we declare a function.</br>
          On the other hand, the values a function receives from each parameter at the time of its invocation, are called arguments.

          ```javascript
          // function sayHello() has three parameters: name1, name2, name3
          function sayHello(name1, name2, name3) {
            console.log(`Hello, ${name1}!`);
            console.log(`Hello, ${name2}!`);
            console.log(`Hello, ${name3}!`);
          }

          // function invocation receives three arguments: "Sofia", "Kostis", "Afroditi"
          sayHello("Sofia", "Kostis", "Afroditi");

          // output:
          // Hello, Sofia!
          // Hello, Kostis!
          // Hello, Afroditi!
          ```
      - pageTitle: Function return value
        isActive: true
        body: |-

          # Function's return value

          If we want a function call to produce a specific output, we use a return statement.</br>
          To create a return statement, we use the `return` keyword, followed by the value that will be returned.

          ```javascript
          function sayHello(name) {
            return `Hello, ${name}!`;
          }

          console.log(sayHello("Sofia")); // output: Hello, Sofia!
          ```
      - pageTitle: Undefined return value
        isActive: true
        body: |-

          # Undefined return value

          Every function has a returned value, even if the return keyword is omitted. But, if no return keyword is used, the function will return undefined.

          ```javascript
          function sayHello(name) {
            `Hello, ${name}!`;
          }

          console.log(sayHello("Sofia")); // output: undefined
          ```
      - pageTitle: Return as exit condition
        isActive: true
        body: |-

          # Return as exit condition

          When a return statement exists in a function, the execution of the function body stops and the code that follows, will not be executed.

          ```javascript
          function sayHello(name) {
            if (name !== "Sofia") {
              return "Hello, stranger!";
            }
            return `Hello, ${name}!`;
          }

          console.log(sayHello("Sofia")); // output: Hello, Sofia!
          console.log(sayHello("Kostis")); // output: Hello, stranger!
          ```
      - pageTitle: Function declaration exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://function-definitions/exercises/function-declaration-exercise)

      - pageTitle: Function expression
        isActive: true
        body: |-

          # Function expression

          Another way to define a function is by using a function expression.</br>
          In a function expression, the function identifier is usually omitted. This type of function definition is called `anonymous` function.

          ```javascript
          const varIdentifier = function (parameters) {
            // function body
          };
          ```
      - pageTitle: How to refer a function expression
        isActive: true
        body: |-

          # Function expression

          <h4>How to refer</h4></br>

          In order to refer to an anonymous function, we use the variable identifier, in which the function is stored.

          ```javascript
          const sayHello = function (name) {
            return `Hello, ${name}!`;
          };

          console.log(sayHello("Sofia")); // output: Hello, Sofia!
          ```
      - pageTitle: Function expression exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://function-definitions/exercises/function-expression-exercise)
      - pageTitle: Immediately invoked function expression (IIFE)
        isActive: true
        body: |-

          # Immediately invoked function expression

          <h4>IIFE</h4></br>

          ```javascript
          (function (parameters) {
            // function body
          })();
          ```

          By creating an Immediately Invoked Function Expression (IIFE), we can immediately invoke the function. In other words, these functions are called as soon as they are defined.

          Their syntax is similar to that of an anonymous function expression, but with two extra sets of parentheses. The first set wraps the entire function definition and the second set invokes the function. They can also have an identifier, however they cannot be invoked again after their execution.

      - pageTitle: Immediately invoked function expression example
        isActive: true
        body: |-

          # Immediately invoked function expression

          <h4>Examples</h4></br>

          ```javascript
          // anonymous function expression
          (function () {
            console.log("Hello, stranger!");
          })(); // output: Hello, stranger!

          // named function expression
          (function sayHello() {
            console.log("Hello, stranger!");
          })(); // output: Hello, stranger!

          // cannot be invoked again
          sayHello(); // ReferenceError: sayHello is not defined

          // we can store the return value in a variable
          const sayHello = (function () {
            return "Hello, stranger!";
          })();

          // and use it as many times as we want
          console.log(sayHello); // output: Hello, stranger!
          console.log(sayHello); // output: Hello, stranger!
          ```


      - pageTitle: Arrow function
        isActive: true
        body: |-

          # Arrow function

          ```javascript
          const varIdentifier = (param1, param2) => {
            // function body
          };
          ```

          </br>

          ES6 arrow function syntax is another, shorter way to define an anonymous function expression, by using the "fat arrow" notation.
          In arrow functions, the `function` keyword is removed and replaced with `=>`, following the parentheses. The `=>` points to the function body.

          ```javascript
          const sayHello = (name1, name2) => {
            return `Hello, ${name1} and ${name2}!`;
          };

          console.log(sayHello("Sofia", "Kostis")); // output: Hello, Sofia and Kostis!
          ```

      - pageTitle: Arrow function parameters
        isActive: true
        body: |-

          # Arrow function simplified

          <h4>Parameters</h4></br>

          If a function has only one parameter, we can remove the parentheses.</br>
          However, if a function has zero or multiple parameters, parentheses are required.

          ```javascript
          // zero parameters
          const sayHello = () => {
            return "Hello, stranger!";
          };

          // one parameter
          const sayHello = name => {
            return `Hello, ${name}!`;
          };

          // multiple parameters
          const sayHello = (name1, name2) => {
            return `Hello, ${name1} and ${name2}!`;
          };
          ```
      - pageTitle: Arrow function body
        isActive: true
        body: |-

          # Arrow function simplified

          <h4>Function body</h4></br>

          If the function body consists of a single line block, we can remove the curly braces `{}` and the `return` keyword.
          Anything that line evaluates will be **automatically** returned.

          ```javascript
          // single line block
          const sayHello = () => "Hello, stranger!";
          const sayHello = (name) => `Hello, ${name}!`;

          // is equivalent to
          const sayHello = () => {
            return "Hello, stranger!";
          };
          const sayHello = (name) => {
            return `Hello, ${name}!`;
          };
          ```
      - pageTitle: Default parameters
        isActive: true
        body: |-

          # Default parameters

          If an argument is not provided in a function call that expects one, then its value becomes `undefined`.</br>
          An ES6 feature, called default parameters, allows parameters to have a predetermined value, in case there is no argument passed into the function.

          To provide a parameter with a default value, we use the assignment operator `=`.

          ```javascript
          function sayHello(name = "stranger") {
            console.log(`Hello, ${name}!`);
          }

          sayHello(); // output: Hello, stranger!
          sayHello("Sofia"); // output: Hello, Sofia!
          ```

          <blockquote className="hint">
              When we call a function, the value of the argument we passed, will override the default parameter.
          </blockqwuote>
      - pageTitle: Rest parameters
        isActive: true
        body: |-

          # Rest parameters

          Another ES6 feature is the rest parameters which allows a function to accept an indefinite number of arguments as an array. By using the rest parameters, a function can be called with any number of arguments, no matter how it was defined.

          The rest parameters is prefixed with three dots `...` and has to be the last parameter of a function definition.

          ```javascript
          function sayHello(...names) {
            for (let i = 0; i < names.length; i++) {
              console.log(`Hello, ${names[i]}!`);
            }
          }

          sayHello("Sofia", "Kostis", "Afroditi");

          // output:
          // Hello, Sofia!
          // Hello, Kostis!
          // Hello, Afroditi!
          ```

  - sectionTitle: Pure Functions
    isActive: true
    pages:
      - pageTitle: What is a pure function
        isActive: true
        body: |-

          # What is a pure function

          A pure function is a function which:

          - given the same input, will always return the same output
          - performs no side-effects

          The easiest way to understand a pure function is to take a look at some examples.<br/>
      - pageTitle: Pure function example
        isActive: true
        body: |-

          # Pure function

          ```javascript
          const add = (x, y) => x + y;

          // no matter how many times the add function is called with the same arguments, it will always return the same output
          add(5, 2); // output: 7
          add(5, 2); // output: 7
          ```

          # Impure function

          ```javascript
          const randomNumber = () => Math.random();

          // each invocation returns a different output
          randomNumber(); // output: 4662773624565115
          randomNumber(); // output: 0.29528662773322
          ```

          <blockquote className="hint">
              Pure functions are predictable, less fragile and easier to test.
          </blockquote>
      - pageTitle: What are side effects
        isActive: true
        body: |-

          # What are side effects

          The term side-effect refers to the concept of a function that can alter external state.

          This means that a function can alter parts or values that do not directly reside inside that same function.

          There are two common cases where a function can produce a side effect.

          - a function directly alters variables of its outer scope
          - a function directly mutates the value of its provided argument
      - pageTitle: Side effects example
        isActive: true
        body: |-

          # Side effects

          <h4>Example</h4></br>

          ```javascript
          const show = {
            title: "Squid Game",
            episodes: 8,
            currentEpisode: 3,
          };

          const showNextEpisode = () => {
            show.currentEpisode = show.currentEpisode + 1;
            return show;
          };

          showNextEpisode();
          console.log(show); // output: { title: 'Squid Game',  episodes: 8,  currentEpisode: 4}

          showNextEpisode();
          console.log(show); // output: { title: 'Squid Game',  episodes: 8,  currentEpisode: 5}
          ```

          <blockquote className="hint">
            The showNextEpisode function - each time it is called - directly changes the value of the currentEpisode of the show object.
          </blockquote>
      - pageTitle: Side effects example 2
        isActive: true
        body: |-

          # Side effects

          <h4>Example</h4></br>

          ```javascript
          const comedies = ["The Office", "Friends"];

          const appendShows = (shows, newShow) => {
            shows.push(newShow);
            return shows;
          };

          const newShows = appendShows(comedies, "Orange is the new black");
          console.log(newShows); // output: ['The Office', 'Friends', 'Orange is the new black']

          console.log(comedies); // output: ['The Office', 'Friends', 'Orange is the new black']
          ```

          <blockquote className="hint">
            The appendShows function - each time it is called - directly changes the value of the comedies argument.
          </blockquote>
      - pageTitle: Side effects cases
        isActive: true
        body: |-

          # Side effects cases

          - logging to the console</br>
            The `console.log` statement prints something to the screen. The screen is something outside the function, it is the computer, the world in which the function lives.
          - writing to the screen
          - writing to a file
          - calling other functions that perform side-effects
          - making an API call
      - pageTitle: How to avoid side-effects
        isActive: true
        body: |-

          # Side effects

          <h4>How to avoid them</h4></br>

          The easiest way to avoid side-effects is to create new state inside the scope of a function.

          ```javascript
          const comedies = ["The Office", "Friends"];

          const appendShows = (shows, newShow) => [...shows, newShow];

          const newShows = appendShows(comedies, "Orange is the new black");
          console.log(newShows); // output: ['The Office', 'Friends', 'Orange is the new black']

          console.log(comedies); // output: ['The Office', 'Friends']
          ```

          <blockquote className="hint">
              Instead of pushing to the original array, the appendShows creates and returns a new array by concating the comedies items and the new show. This way the initial comedies array is not changed.
          </blockquote>
      - pageTitle: What is functional programming
        isActive: true
        body: |-

          # What is functional programming

          Functional programming is a [programming paradigm](https://www.geeksforgeeks.org/introduction-of-programming-paradigms/). It is a way of thinking based on some fundamental, defining principles such as:

          - usage of pure functions
          - avoidance of shared state / mutable data
          - avoidance of side-effects
          - usage of function composition
      - pageTitle: Thoughts on functional programming
        isActive: true
        body: |-

          # Thoughts on functional programming

          <h4>Benefits</h4>

          - function signatures are more trusted
          - functional code tends to have its state isolated, making it easier to comprehend
          - pure functions are easier to test
          - immutable variables lead to fewer side-effects
          - functional programming leads to fewer bugs
          - strong abstractation

          <h4>Limitations</h4>

          - it has a learning curve
          - representing state in functional programming is not as intuitive as most other functional operations
  - sectionTitle: Higher order functions
    isActive: true
    pages:
      - pageTitle: What is a higher order function
        isActive: true
        body: |-

          # What is a higher order function

          A `higher-order function` is a function that does at least one of the following:

          - accepts one or more functions as arguments

          - returns a function as its result
      - pageTitle: Function as argument
        isActive: true
        body: |-

          # Function as argument

          ```javascript
          const greetings = (greetingMessage, name) =>
            console.log(greetingMessage() + name);

          const message = () => "Hi ";

          // the message function is passed as argument to the greetings function
          greetings(message, "Alice"); // output: Hi Alice
          ```

          A function passed into another function as an argument, which is then invoked inside the outer function is called a callback function.
      - pageTitle: Callback function
        isActive: true
        body: |-

          # Callback function

          A callback function is a regular function. Its name is used to indicate that it will perform some action after another one is completed.

          ```javascript
          const someCallbackFunc = () => console.log("I am a callback");

          const print = (callback) => {
            console.log("I am calling the callback");

            callback();
          };

          print(someCallbackFunc);
          // output:
          // I am calling the callback
          // I am a callback
          ```

      - pageTitle: Function as return value
        isActive: true
        body: |-

          # Function as a return value

          ```javascript
          const greetings = (name) => (greetingMessage) => console.log(greetingMessage() + name);
          ```

          A function can return another function with two ways:
          - by storing a function to a variable
          - by using a second set of parentheses
      - pageTitle: Storing function to variable
        isActive: true
        body: |-

          # Function as a return value

          <h4>Storing function to a variable</h4></br>

          ```javascript
          const greetings = (name) => (greetingMessage) => console.log(greetingMessage() + name);

          const greetAlice = greetings("Alice");
          const message = () => "Hello ";

          // the message function is not invoked yet, this will happen inside the body of the greetings function
          greetAlice(message); // output: Hello Alice
          ```
      - pageTitle: Using second set of parentheses
        isActive: true
        body: |-

          # Function as a return value

          <h4>Using a second set of parentheses</h4></br>

          ```javascript
          const greetings = (name) => (greetingMessage) => console.log(greetingMessage() + name);

          // the message function is not invoked yet, this will happen inside the body of the greetings function
          greetings("Bob")(message); // output: Hello Bob

          // alternatively, you can also pass the callback function directly as argument

          // using arrow syntax
          greetings("Bob")(() => "Hello "); // output: Hello Bob

          // using function declaration syntax
          greetings("Bob")(function () {
            return "Hello ";
          }); // output: Hello Bob
          ```
      - pageTitle: Thoughts on higher order functions
        isActive: true
        body: |-

          # Thoughts on higher order functions

          <h4>Benefits</h4>

          - Composition</br>
            As a result, smaller functions are responsible for handling a single piece of logic.
            These functions can then be composed and create more complex ones. This way code is more readable while debugging is effortless.

          - Reusability</br>
            Functions can operate on other functions.

          <h4>Limitations</h4>

          - Definitely there is a learning curve in order to get accustomed with this kind of syntax and use.
      - pageTitle: Higher order function exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://higher-order-functions/exercise)
  - sectionTitle: Currying
    isActive: true
    pages:
      - pageTitle: What is currying
        isActive: true
        body: |-

          # What is currying

          Currying is an advanced technique where a function with multiple arguments is transformed into a sequence of nested functions, each accepting a single argument.<br/>

          To better illustrate this concept, let's transform the following function into a carried one.</br>
          This function is called `add`, accepts 3 numbers and returns their sum.<br/>
          It will be transformed into a series of functions where arguments are passed one by one.

          ```javascript
          function add(a, b, c) {
              return a + b + c;
          }

          console.log(add(1, 2, 3)); // output: 6
          ```
      - pageTitle: Currying simple example
        isActive: true
        body: |-

          # Currying

          <h4>Simple example</h4></br>

          ```javascript
          // using function declarations
          function add(a) {
              return function (b) {
                  return function (c) {
                      return a + b + c;
                  };
              };
          }
          // alternatively, using arrow functions which result in less boilerplate
          const arrowAdd = (a) => (b) => (c) => a + b + c;

          // curried function invocation
          console.log(add(1)(2)(3)); // output: 6
          console.log(arrowAdd(1)(2)(3)); // output: 6
          ```

          No matter the syntax, a curried function is invoked by:
          - its name
          - followed by a set of parenthesis for each nested function that is returned (to each set of parenthesis the respective argument must be provided)
      - pageTitle: Why currying
        isActive: true
        body: |-

          # Why currying

          Since the perviously mentioned example is simple enough, currying may not seem worth the extra effort.<br/>
          However, it can help us:

          - write reusable, configurable code modules
          - call a function, numerous times, with the same arguments, so we do not have to repeat code
      - pageTitle: Currying extended example
        isActive: true
        body: |-

          # Currying

          <h4>Extended example</h4></br></br>

          Let's dive into a more complex example to understand the true power of cyrrying.<br/>

          Suppose you are in charge for calculating the salary raises of a company. The business requirement is that all employees should be given a salary raise of 12%.<br/>
          So, you can easily end up with the following function.

          ```javascript
          const salaryRaise = (salary, raise) => salary * raise;
          ```

          </br>

          The 12% raise computation of a few salaries would be like:

          ```javascript
          const bobRaise = salaryRaise(2300, 0.12); // output: 276
          const aliceRaise = salaryRaise(1700, 0.12); // output: 204
          const nickRaise = salaryRaise(630, 0.12); // output: 75.6
          ```
      - pageTitle: Currying is useful
        isActive: true
        body: |-

          # Currying is useful

          The salary raise (12%) is fixed for all the employees, though.
          So, currying can help us create a specialized function that will apply a raise percentage to a salary without explicitly declaring the percentage on each call.

          ```javascript
          // curried function
          const salaryRaise = (raise) => (salary) => raise * salary;

          // specialized function that will apply a 12% raise to a salary
          const twelvePercentRaise = salaryRaise(0.12);
          ```

          </br>

          We can now use the specialized `twelvePercentRaise` function to calculate the new salary of the following employees.

          ```javascript
          const bobRaise = twelvePercentRaise(2300); // output: 276
          const aliceRaise = twelvePercentRaise(1700); // output: 204
          const nickRaise = twelvePercentRaise(630); // output: 75.6
          ```
      - pageTitle: Currying's true power
        isActive: true
        body: |-

          # Currying's true power

          In the meantime, some employees made huge grow in their field, and the company will reward them with a salary raise of 20% instead of 12%.
          It seems that we need another specialized version of the `salaryRaise` function, this time one of a 20% raise.

          ```javascript
          const twentyPercentRaise = salaryRaise(0.2);
          ```

          </br>

          So, the best employees can now enjoy their new salary, simply as that.

          ```javascript
          const superEmployeeRaise = twentyPercentRaise(2300); // output: 460
          ```
      - pageTitle: Thoughts on currying
        isActive: true
        body: |-

          # Thoughts on currying

          <h4>Benefits</h4>

          - helps us to create higher-order functions
          - makes code cleaner and easier to refactor<br/>
            Currying also creates a more [declarative code base](https://searchitoperations.techtarget.com/definition/declarative-programming), e.g. it’s easier to read the code and understand what it is about.

          <h4>Limitations</h4>

          - the currying process requires a function to have a fixed number of arguments</br>
            Functions that make use of rest parameters (...rest) cannot be curried, as a result.
      - pageTitle: Currying with arrow functions exercise
        isActive: true
        body: |-

          # Time for practice

          <h4>Using arrow functions!</h4></br>

          [Click here](codesandbox-link://currying/exercises/currying-arrow-function-exercise)
      - pageTitle: Currying with function declaration exercise
        isActive: true
        body: |-

          # Time for practice

          <h4>Using function declarations!</h4></br>

          [Click here](codesandbox-link://currying/exercises/currying-function-declaration-exercise)
  - sectionTitle: Objects
    isActive: true
    pages:
      - pageTitle: What is an object
        isActive: true
        body: |-

          # What is an object

          An object is a collection of key-value pairs.
          Each key-value pair is called a property.

          In JavaScript, we can create objects in many ways.
          The most common way is using the object literal syntax `{}`.
      - pageTitle: Object syntax example
        isActive: true
        body: |-

          # Object

          ```javascript
          const car = {};
          ```

          </br>

          <h4>Example</h4>

          ```javascript
          const car = {
            model: "tesla", // the key is model and the value is tesla
            price: 32000, // price (key) - 32000 (value)
            used: true, // used (key) - true (value)
            batteryLeft: () => console.log("Battery left 75%"), // batteryLeft is the key - () => console.log("Battery left 75%") is the value
          };
          ```

          <blockquote className="hint">
            Objects are also called associative arrays — they map strings to values in the same way that arrays map numbers to values.
          </blockquote>
      - pageTitle: Object rules
        isActive: true
        body: |-

          # Object rules

          The properties of an object must follow some rules:

          - the properties must be seperated by commas `,`
          - the key and its value must be seperated by a colon `:`
          - keys can only be strings or [Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
          - values can be anything, from strings and booleans to arrays and functions</br>

          <blockquote className="hint">
            When a property contains a function, it is called a method.
          </blockquote>
      - pageTitle: Accessing properties - Dot notation
        isActive: true
        body: |-

          # Accessing properties

          <h4>Dot notation</h4></br>

          ```javascript
          const car = {
            model: "tesla",
            price: 32000,
            used: true,
            damages: {
              engine: "oil change",
            },
            previousΟccupants: ["George Touni", "Alex Libra"],
            batteryLeft: () => console.log("Battery left 75%"),
          };

          console.log(car.model); // output: tesla
          console.log(car.damages.engine); // output: oil change
          console.log(car.previousΟccupants[0]); // output: George Touni
          console.log(car.releaseDate); // undefined, due to non-existing property named releaseDate
          car.batteryLeft(); // output: Battery left 75%
          ```
          <blockquote className="hint">
            With this syntax, we cannot use property names that are strings, numbers or contain specials characters and spaces.
          </blockquote>

      - pageTitle: Accessing properties - Bracket notation
        isActive: true
        body: |-

          # Accessing properties

          <h4>Bracket notation</h4></br>

          ```javascript
          const car = {
            model: "tesla",
            price: 32000,
            used: true,
            damages: {
              engine: "oil change",
            },
            previousΟccupants: ["George Touni", "Alex Libra"],
            batteryLeft: () => console.log("Battery left 75%"),
          };

          console.log(car["used"]); // output: true
          console.log(car["damages"]["engine"]); // output: oil change
          console.log(car["previousΟccupants"][0]); // output: George Touni
          ```

          <blockquote className="hint">
            With this syntax, we can use property names that are strings, numbers or contain specials characters and spaces.
          </blockquote>

      - pageTitle: Dot vs bracket notation
        isActive: true
        body: |-

          # Dot vs bracket notation

          ```javascript
          const car = {
            model: "tesla",
            used: true,
          };

          const isUsed = "used";

          // the following statements are equivalent
          console.log(car["used"]); // output: true
          console.log(car[isUsed]); // output: true
          console.log(car.used); // output: true
          ```

      - pageTitle: Objects - Optional chaining
        isActive: true
        body: |-

          # Optional chaining

          In JavaScript accessing properties from deeply nested objects may not be safe as some properties that we request might not exist which will result in a TyperError, as it shown below.

          ```javascript
          const car = {
            model: "tesla",
            price: 32000,
          };

          console.log(car.damages); // output: undefined
          console.log(car.damages.engine); // TypeError: Cannot read property of undefined (reading 'engine'), since the damages key does not exist - it is undefined
          ```
      - pageTitle: Objects - Optional chaining - Syntax
        isActive: true
        body: |-

          # Optional operator

          <h4>On a property</h4></br>

          ```javascript
          obj?.someProperty;
          ```

          </br>
          <h4>Example</h4>

          ```javascript
          const car = {
            model: "tesla",
            price: 32000,
          };

          // without optional chaining, we must check if damages key exists, and if it does then access the nested engine property
          const engine = car.damages && car.damages.engine;

          // with optional chaining
          const engine = car.damages?.engine;
          ```
      - pageTitle: Objects - Optional chaining - Syntax - 2
        isActive: true
        body: |-

          # Optional operator

          <h4>On a method</h4></br>

          ```javascript
          obj.aMethod?.();
          ```

          </br>

          <h4>Example</h4>

          ```javascript
          const car = {
            model: "tesla",
            price: 32000,
            batteryLeft: () => console.log("Battery left 75%"),
          };

          console.log(car.nonExistentMethod()); // TypeError: car.nonExistentMethod is not a function
          console.log(car?.nonExistentMethod()); // TypeError: car.nonExistentMethod is not a function
          console.log(car.nonExistentMethod?.()); // output: undefined
          ```
      - pageTitle: Extract object properties to variables
        isActive: true
        body: |-

          # Extract object properties

          <h4>To variables</h4></br>

          Prior to ES6, in order to assign properties of an object to variables, we would do the following:

          ```javascript
          const car = {
            model: "tesla",
            price: 32000,
            used: true,
          };

          const model = car.model;
          const price = car.price;
          const used = car.used;

          console.log(model); // output: tesla
          console.log(price); // output: 32000
          console.log(used); // output: true
          ```
      - pageTitle: Object Destructuring
        isActive: true
        body: |-

          # Destructuring

          The object destructuring is a useful JavaScript feature to extract property values from objects and bind them to variables.

          We can access multiple property values from the same object in a single statement.

          The object destructuring syntax is useful since it helps us avoiding duplicated code.
      - pageTitle: Object Destructuring examples
        isActive: true
        body: |-

          # Destructuring

          <h4>Single / multiple properties</h4></br>

          ```javascript
          const car = {
            model: "tesla",
            price: 32000,
            used: true,
          };

          // curly braces are used since car is an object
          const { model, price, used } = car;

          console.log(model); // output: tesla
          console.log(price); // output: 32000
          console.log(used); // output: true
          ```
      - pageTitle: Object Destructuring with default values
        isActive: true
        body: |-

          # Destructuring

          <h4>Using default values</h4></br>

          ```javascript
          // we set a default value, if the property in the destructured object does not exist
          const { identifier = defaultValue } = expression;
          ```

          </br>

          <h4>Example</h4>

          ```javascript
          const car = {
            model: "tesla",
            price: 32000,
            used: true,
          };

          const { owner } = car;
          console.log(owner); // output: undefined

          // setting a default value
          const { miles = 10000 } = car;
          console.log(miles); // output: 10000
          ```
      - pageTitle: Object Destructuring with different names
        isActive: true
        body: |-

          # Destructuring

          <h4>Using different names</h4></br>

          ```javascript
          const { identifier: renamedIdentifier } = expression;
          ```

          <br>

          <h4>Example</h4>

          ```javascript
          const car = {
            model: "tesla",
            price: 32000,
            used: true,
          };

          // the isUsed variable will hold the value of the used key
          const { used: isUsed } = car;

          console.log(isUsed); // output: true
          console.log(used); // ReferenceError: used is not defined
          ```
      - pageTitle: Nested object destructuring
        isActive: true
        body: |-

          # Nested destructuring

          ```javascript
          const {
            nestedObjectProperty: { identifier },
          } = expression;
          ```

          </br>

          <h4>Example</h4>

          ```javascript
          const car = {
            damages: {
              engine: "oil change",
            },
          };

          const {
            damages: { engine },
          } = car;

          console.log(engine); // output: oil change
          ```
      - pageTitle: Nested object destructuring best practice
        isActive: true
        body: |-

          # Nested destructuring

          <h4>Best practice</h4></br>

          ```javascript
          // NOT OPTIMAL
          const car = {
            damages: {
              engine: "oil change",
            },
          };

          const {
            damages: { engine },
          } = car;

          console.log(engine); // output: oil change

          // OPIMAL
          const { damages } = car;
          console.log(damages); // ouput: {engine: "oil change"}

          const { engine } = damages;
          console.log(engine); // output: oil change
          ```
      - pageTitle: New object property
        isActive: true
        body: |-

          # Adding properties

          There are two ways of adding object properties, with the `dot-notation` and `bracket-notation`.
          If a property with the same name exists though in the object, its value will be overwritten. Otherwise, a new property will be added to the object.

          ```javascript
          const person = { name: "kostis" };
          console.log(person); // ouput: {name: 'kostis'}

          person["gender"] = "male";
          person.name = "Alice";

          console.log(person);
          // output:
          // {
          //   name: 'Alice', // the name value is overwritten
          //   gender: 'male',
          // }
          ```

          <blockquote className="hint">
            A single key can be matched with a single value, not more than one.
          </blockquote>
      - pageTitle: Deleting object properties
        isActive: true
        body: |-

          # Deleting properties

          For deletion we can use the `delete` operator, which removes a property from an object. It can be used with both notations.

          ```javascript
          const person = {
            firstname: "Jason",
            lastname: "Statham",
          };

          delete person.lastname;
          // OR
          delete person["lastname"];

          console.log(person); // output: {firstname: 'Jason'}
          console.log(person.lastname); // output: undefined
          ```
      - pageTitle: Copying objects
        isActive: true
        body: |-

          # Copying objects

          There are 2 ways to copy an object in JavaScript:

          ![Shallow and Deep Copy](/img/javascript/shallow-deep-copy.png)
      - pageTitle: Shallow copy - Spread operator
        isActive: true
        body: |-

          # Shallow copy

          <h4>Spread operator</h4></br>

          ECMAScript 6 introduced the spread operator `...` .

          It creates a new object in memory, it takes each individual element in the object and makes an exact copy of it in memory.

          ```javascript
          const person1 = { name: "Alice" };
          const person2 = { ...person1 };

          console.log(person2); // output: {name: 'Alice'}

          person2.name = "Sofia";

          console.log(person1); // output: {name: 'Alice'}
          console.log(person2); // output: {name: 'Sofia'}
          ```
      - pageTitle: Shallow copy - Spread operator p2
        isActive: true
        body: |-

          # Shallow copy

          <h4>Spread operator example</h4></br>

          ```javascript
          const person1 = {
            name: "Afroditi",
            familyMembers: {
              son: "Kostis",
              daughter: "Sofia",
            },
          };

          const person2 = {
            ...person1,
          };

          person2.name = "Alice";
          person2.familyMembers.son = "Bob";

          console.log(person1); // {name: 'Afroditi', familyMembers: {son: 'Bob', daughter: 'Sofia'}}
          console.log(person2); // {name: 'Alice', familyMembers: {son: 'Bob', daughter: 'Sofia'}}
          ```

          <blockquote className="hint">
            The spread operator makes deep clone of data, only if the data is one level deep nested.
          </blockquote>

      - pageTitle: Deep copy using the spread operator
        isActive: true
        body: |-

          # Deep copy

          <h4>Spread operator example</h4></br>

          We can tackle the deep nested problem by using the spread operator on all nested levels.

          ```javascript
          const person1 = {
            name: "Afroditi",
            familyMembers: {
              son: "Kostis",
              daughter: "Sofia",
            },
          };

          const person2 = {
            ...person1,
            familyMembers: {
              ...person1.familyMembers,
            },
          };

          person2.name = "Alice";
          person2.familyMembers.son = "Bob";

          console.log(person1); // {name: 'Afroditi', familyMembers: {son: 'Kostis', daughter: 'Sofia'}}
          console.log(person2); // {name: 'Alice', familyMembers: {son: 'Bob', daughter: 'Sofia'}}
          ```
      - pageTitle: Shallow copy object assign method
        isActive: true
        body: |-

          # Shallow copy

          <h4>Object.assign method</h4></br>

          This method is used to copy the properties from a source object to a target object.

          It returns the target object, which has the properties copied from the source object.

          Like the spread operator, the `Object.assign()` does not create a deep copy of the source object, **if the data is more than one level nested**.

          ```javascript
          const cloned = Object.assign(target, ...sources);
          ```
      - pageTitle: Shallow copy - Object assign example
        isActive: true
        body: |-

          # Shallow copy

          <h4>Object.assign example</h4></br>

          ```javascript
          const user = {
            name: "Mayank Gupta",
            age: 30,
          };

          const newUser = Object.assign({}, user);
          console.log(newUser); // output: {name: "Mayank Gupta", age: 30}

          newUser.gender = "male";

          console.log(user); // output: {name: "Mayank Gupta", age: 30}
          console.log(newUser); // output: {name: "Mayank Gupta", age: 30, gender: male}
          ```
      - pageTitle: Deep copy
        isActive: true
        body: |-

          # Deep copy

          <h4>JSON.stringify / JSON.parse</h4></br>

          The `JSON.parse` / `JSON.stringify` combination can be used to **deep copy** an object.

          It is meant to used for manipulating JSON data.

          It does not support values of `undefined` or functions and will ignore them though.

          ```javascript
          const cloned = JSON.parse(JSON.stringify(objectToClone));
          ```
      - pageTitle: Deep copy example
        isActive: true
        body: |-

          # Deep copy

          <h4>JSON.stringify / JSON.parse example</h4></br>

          ```javascript
          const user = {
            name: "Mayank",
            age: 22,
            greet: () => console.log("Hello"),
          };

          // the target object is first converted to a string output
          const stringifiedOutput = JSON.stringify(user);

          // the stringified object is parsed to a new object
          const clonedObject = JSON.parse(stringifiedOutput);

          console.log(clonedObject); // output: {name: "Mayank",  age: 22}
          ```
          <blockquote className="hint">
            The method is missing. Deep cloning with this combination should be avoided when an object has methods.
          </blockquote>
      - pageTitle: Enhancing an object
        isActive: true
        body: |-

          # Enhancing an object

          <h4>Example</h4></br>

          ```javascript
          const circle = { radius: 40 };

          // the spread operator transfers all properties of the circle object to the redCircle one
          const redCircle = {
            ...circle,
            color: "red",
          };

          console.log(redCircle);
          // output:
          // {
          //   radius: 40,
          //   color: 'red',
          // }
          ```
      - pageTitle: Combining objects
        isActive: true
        body: |-

          # Combining objects

          <h4>Example</h4></br>

          ```javascript
          const circle = { radius: 40 };
          const styles = {
            borderColor: "yellow",
            background: "red",
          };

          // the styledCircle object combines the properties of two other objects using the spread operator
          const styledCircle = {
            ...circle,
            ...styles,
          };

          console.log(styledCircle);
          // output:
          // {
          //   radius: 40,
          //   borderColor: 'yellow',
          //   background: 'red',
          // }
          ```
      - pageTitle: in operator
        isActive: true
        body: |-

          # `in` operator

          This operator returns a boolean value whether or not the specified property is included in an object.

          ```javascript
          const user = {
            name: "Alice",
            age: 30,
          };

          console.log("name" in user); // output: true
          console.log("job" in user); // output: false
          ```
      - pageTitle: hasOwnProperty method
        isActive: true
        body: |-

          # `hasOwnProperty` method

          This method returns a boolean value indicating whether the object includes the specified property as one of each own.

          ```javascript
          const user = {
            name: "Alice",
            age: 30,
          };

          console.log(user.hasOwnProperty("name")); // output: true
          console.log(user.hasOwnProperty("job")); // output: false
          ```
      - pageTitle: in vs hasOwnProperty
        isActive: true
        body: |-

          # `in` vs `hasOwnProperty`

          The key difference between `in` and `hasOwnProperty` is that `in` will return true for inherited properties, whereas `hasOwnProperty` will return false for [inherited](https://dmitripavlutin.com/own-and-inherited-properties-in-javascript) properties.
      - pageTitle: for in loop
        isActive: true
        body: |-

          # `for..in` loop

          Unlike arrays, objects are not iterable. It is useful to iterate over their properties, though.

          The `for..in` loop allows us to loop over the properties of an object.

          ```javascript
          for (propertyName in object) {
            // code block
          }
          ```
      - pageTitle: for in example
        isActive: true
        body: |-

          # `for..in` loop

          <h4>Example</h4></br>

          ```javascript
          const person = { firstname: "Alice", lastname: "Bob" };

          for (let key in person) {
            console.log(key);
          }

          // output:
          // firstname
          // lastname
          ```
      - pageTitle: Object keys method
        isActive: true
        body: |-

          # `Object.keys` method

          It generates an array of a given object's own [enumerable](https://www.javascripttutorial.net/javascript-enumerable-properties/) property names, iterated in the same order that a normal loop would.

          ```javascript
          Object.keys(obj);
          ```
      - pageTitle: Object keys example
        isActive: true
        body: |-

          # `Object.keys` method

          <h4>Example</h4></br>

          ```javascript
          const person = { firstname: "Alice", lastname: "Bob" };

          console.log(Object.keys(person)); // output: ['firstname', 'lastname']

          // iterate through the array
          // all array methods can be applied
          ```
      - pageTitle: Object values method
        isActive: true
        body: |-

          # `Object.values` method

          It generates an array whose elements are the enumerable property values found on the object.

          The ordering of the properties is the same as that given by the object manually being looped.

          ```javascript
          Object.values(obj);
          ```
      - pageTitle: Object values example
        isActive: true
        body: |-

          # `Object.values` method

          <h4>Example</h4></br>

          ```javascript
          const person = { firstname: "Alice", lastname: "Bob" };

          console.log(Object.values(person)); // output: ['Alice', 'Bob']

          // iterate through the array
          // all array methods can be applied
          ```
      - pageTitle: Object entries method
        isActive: true
        body: |-

          # `Object.entries` method

          It generates an array of key-value pairs. Think of it as a combination of `Object.keys` and `Object.values`.

          ```javascript
          Object.entries(obj);
          ```
      - pageTitle: Object entries example
        isActive: true
        body: |-

          # `Object.entries` method

          <h4>Example</h4></br>

          ```javascript
          const person = {
            firstname: "Alice",
            lastname: "Bob",
          };

          console.log(Object.entries(person));
          // output:
          // [
          //   ['firstname', 'Alice'],
          //   ['lastname', 'Bob'],
          // ]

          // iterate through the array
          // all array methods can be applied
          ```
  - sectionTitle: Arrays
    isActive: true
    pages:
      - pageTitle: What is an array
        isActive: true
        body: |-

          # What is an array

          Arrays are JavaScript’s way of making lists that store multiple values, called elements, in a single variable.

          An array can hold any data type, even other arrays (nested arrays).

          To create an array, we use array literal syntax consisting of square brackets `[]` that wrap all the elements.

          ```javascript
          const stringArr = ["el1", "el2", "el3"];

          const numArr = [1, 2, 3];

          const boolArr = [true, true, false];

          const nestedArr = [[1], [2, 3]];
          ```
      - pageTitle: Characteristics of arrays
        isActive: true
        body: |-

          # Array characteristics

          Arrays have the following characteristics:

          - they can hold values of different data types

          ```javascript
          const diverseArr = ["el1", 2, true, [4]];
          ```

          - the number of elements inside arrays is called **length**, and its size is dynamic and auto-growing</br>
            To get the length of an array we use the .`length` property.

          ```javascript
          const stringArr = ["el1", "el2", "el3"];

          console.log(stringArr.length); // output: 3
          ```
      - pageTitle: Accessing elements
        isActive: true
        body: |-

          # Accessing elements

          Inside an array, each element has a numbered position, named index.

          Arrays are **zero-indexed**. This means that we start counting the positions from 0 rather than 1.

          To access individual elements, we use the identifier of the array followed by square brackets `[]` with the index.

          ```javascript
          const desserts = ["lemon pie", "tiramisu", "profiterole"];

          console.log(desserts[0]); // output: lemon pie
          console.log(desserts[1]); // output: tiramisu
          console.log(desserts[2]); // output: profiterole
          ```
      - pageTitle: Accessing nested arrays
        isActive: true
        body: |-

          # Accessing nested arrays

          To access nested arrays, we use bracket notation.

          ```javascript
          const nestedArr = [[1], [1, 2]];

          console.log(nestedArr[1]); // output: [1, 2]
          ```
          </br>

          To access the elements inside the `nestedArr[1]`, we have to **chain** more bracket notations with indeces.

          ```javascript
          const nestedArr = [[1], [1, 2]];

          console.log(nestedArr[1][0]); // output: 1
          ```
      - pageTitle: Updating elements
        isActive: true
        body: |-

          # Updating elements

          Having access to an array element, means we can also update its value.

          ```javascript
          const desserts = ["lemon pie", "tiramisu", "profiterole"];

          desserts[2] = "ice cream";

          console.log(desserts); // output: ["lemon pie", "tiramisu", "ice cream"]
          ```
      - pageTitle: Mutability
        isActive: true
        body: |-

          # Mutability

          Mutable is considered a type of value that can be changed. In JavaScript, only objects and arrays are mutable, not primitive data types.

          Elements in an array declared with `const` can be changed. We can **mutate** the contents of a `const` array, but we cannot reassign a different value to it.

          ```javascript
          const holidays = ["Easter", "Halloween", "Christmas"];

          holidays[2] = "Hanukkah";

          console.log(holidays); // output: ['Easter', 'Halloween', 'Hanukkah']

          holidays = "Saint Patrick's Day"; // TypeError: "holidays" is read-only
          ```
      - pageTitle: Built-in methods on arrays
        isActive: true
        body: |-

          # Built-in methods on arrays

          There are several built-in JavaScript methods, that make working with arrays and completing common tasks a lot easier.

          But we need to understand the behavior of the methods we use, so that an array mutation does not happen unintentionally.

          You can read all about built-in array methods in [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
      - pageTitle: push method
        isActive: true
        body: |-

          # `push` method

          The `push` method adds one or more elements to the end of an array. It can take a single or multiple arguments.

          ```javascript
          const holidays = ["Easter", "Halloween", "Christmas"];

          holidays.push("Hanukkah");

          console.log(holidays); // output: ["Easter", "Halloween", "Christmas", "Hanukkah]
          ```

          <blockquote className="hint">
              The push method mutates the initial array.
          </blockquote>

      - pageTitle: pop method
        isActive: true
        body: |-

          # `pop` method

          The `pop` method removes the last element of an array and returns the removed element. It does not take any arguments.

          ```javascript
          const holidays = ["Easter", "Halloween", "Christmas"];

          const removedHoliday = holidays.pop();

          console.log(removedHoliday); // output: Christmas
          console.log(holidays); // output: ["Easter", "Halloween"]
          ```

          <blockquote className="hint">
              The pop method mutates the initial array.
          </blockquote>
      - pageTitle: shift method
        isActive: true
        body: |-

          # `shift` method

          The `shift` method removes the first element of an array and returns the removed element. It has similar behavior to the `pop` method.

          ```javascript
          const holidays = ["Easter", "Halloween", "Christmas"];

          const removedHoliday = holidays.shift();

          console.log(removedHoliday); // output: Easter
          console.log(holidays); // output: ["Halloween", "Christmas"]
          ```
      - pageTitle: unshift method
        isActive: true
        body: |-

          # `unshift` method

          The `unshift` method adds one or more elements to the beaginning of an array. It has a similar behavior to the `push` method.

          ```javascript
          const holidays = ["Easter", "Halloween", "Christmas"];

          holidays.unshift("Hanykkah");

          console.log(holidays); // output: ["Hanukkah", "Easter", "Halloween", "Christmas"]
          ```
      - pageTitle: indexOf method
        isActive: true
        body: |-

          # `indexOf` method

          The `indexOf` method returns the first element that matches the value of the argument passed in. If there is not any, it returns -1.

          ```javascript
          const holidays = ["Easter", "Halloween", "Christmas"];

          const halloweenIndex = holidays.indexOf("Halloween");
          const hanukkahIndex = holidays.indexOf("Hanukkah");

          console.log(halloweenIndex); // output: 1
          console.log(hanukkahIndex); // output: -1
          ```
      - pageTitle: concat method
        isActive: true
        body: |-

          # `concat` method

          The `concat` method joins two or more arrays and returns a new array containing the elements of the joined arrays.

          ```javascript
          const holidays = ["Easter", "Halloween", "Christmas"];
          const moreHolidays = ["Hanukkah", "New Year's Day"];

          const allHolidays = holidays.concat(moreHolidays);

          console.log(holidays); // output: ["Easter", "Halloween", "Christmas"]
          console.log(moreHolidays); // output: ["Hanukkah", "New Year's Day"]
          console.log(allHolidays); // output: ["Easter", "Halloween", "Christmas", "Hanukkah", "New Year's Day"]
          ```

          <blockquote className="hint">
              This method does not mutate the existing arrays.
          </blockquote>
      - pageTitle: Built-in methods exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://arrays/exercises/built-in-methods-exercise)
      - pageTitle: Iterators
        isActive: true
        body: |-

          # Iterators

          The iterators are built-in methods that loop through arrays, manipulate elements and return values. But they do not mutate the original array.

          All iterators are higher-order functions that take a callback function as the first argument.

          ```javascript
          someArr.iteratorMethod((currentValue [, index, arr]) => {
            // code block to be executed
          });
          ```

          In turn, the callback function can take as arguments:

          - the value of the current element (required)
          - the array index of the current element (optional)
          - the array object to which the current element belongs (optional)
      - pageTitle: forEach method
        isActive: true
        body: |-

          # `forEach` method

          The `forEach` method loops through an array and executes the callback function for each element. During each execution, the current element is passed as an argument into the callback function.

          The return value of the `forEach` method is **always** undefined.

          ```javascript
          const favoriteWords = ["nostalgia", "petrichor", "euphoria"];

          favoriteWords.forEach((word) => console.log(word));

          // output:
          // nostalgia
          // petrichor
          // euphoria
          ```
      - pageTitle: map method
        isActive: true
        body: |-

          # `map` method

          The `map` method works in a similar way to the `forEach`, but there is a significant difference; `map` returns a new array with the results of calling the callback function for every element.

          ```javascript
          const numArr = [1, 2, 3, 4];

          const newNumArr = numArr.map((number) => number * 10);

          console.log(newNumArr); // output: [10, 20, 30, 40]
          ```
      - pageTitle: map exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://arrays/exercises/map-exercise)
      - pageTitle: filter method
        isActive: true
        body: |-

          # `filter` method

          The `filter` method returns a new array filled with all the elements that pass a test provided by the callback function. The callback function should return true or false.

          The elements that cause the callback function to return true are added to the new array.

          ```javascript
          const numArr = [1, 6, 12, 15, 38, 23];

          const odd = numArr.filter((number) => number % 2);

          console.log(odd); // output: [1, 15, 23]
          ```
      - pageTitle: filter exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://arrays/exercises/filter-exercise)
      - pageTitle: reduce method
        isActive: true
        body: |-

          # `reduce` method

          The `reduce` method helps us to transform an array to a single value.

          This method, in addition to the callback function (called reducer), can take an initial value as an optional argument.

          ```javascript
          someArr.reduce(reducer [, initialValue])
          ```
      - pageTitle: Reducer callback
        isActive: true
        body: |-

          # Reducer callback

          ```javascript
          const reducer = (accumulator, currentValue) => {
            // code block to be executed
          };
          ```

          The reducer function takes two arguments:

          - **accumulator:** this is the returned value from the previous call of the reducer function</br>
            This value is provided to the reducer as an argument in the next call. If we pass an initialValue into the `reduce` method, when the reducer function is executed for the first time, the accumulator will be equal to the initialValue.

          - **currentValue:** this is the value of the element in the current iteration</br>
            If there is not an initialValue, the currentValue starts as the second element in the array. But, if an initial value exists, the currentValue starts as the first one.
      - pageTitle: reduce example
        isActive: true
        body: |-

          # reduce method

          <h4>Example</h4></br>

          ```javascript
          const numArr = [10, 20, 30];

          // with initialValue
          const sum = numArr.reduce((accumulator, current) => accumulator + current, 10);

          console.log(sum); // output: 70

          // without initialValue
          const sum = numArr.reduce((accumulator, current) => accumulator + current);

          console.log(sum); // output: 60
          ```
      - pageTitle: Example breakdown
        isActive: true
        body: |-

          # reduce method

          <h4>Example breakdown</h4></br>

          The following are the values of the accumulator and the currentValue as we iterate over the numArr, using an initialValue:


          | Iteration | Accumulator | Current Value | Returned Value |
          | :-------- | :------------------------------------------: | :--------------------------------------------: | :---------------------------------------------: |
          | First     |                      10                      |                       10                       |                       20                        |
          | Second    |                      20                      |                       20                       |                       40                        |
          | Third     |                      40                      |                       30                       |                       70                        |


          </br>

          Without the use of an initialValue:


          | Iteration | Accumulator | Current Value | Returned Value |
          | :-------- | :------------------------------------------: | :--------------------------------------------: | :---------------------------------------------: |
          | First     |                      10                      |                       20                       |                       30                        |
          | Second    |                      30                      |                       30                       |                       60                        |

      - pageTitle: reduce exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://arrays/exercises/reduce-exercise)
      - pageTitle: Iterators recap
        isActive: true
        body: |-

          # Iterators recap

          Let's review what each iterator returns when called on an array:


          | Iterator | Returned Value                    |
          | :---------------------------------------- | :----------------------------------------------------------------- |
          | forEach                                   | undefined                                                          |
          | map                                       | a new array with the same length as the original array             |
          | filter                                    | a new array that may have a shorter length than the original array |
          | reduce                                    | a single value of any data type                                    |

      - pageTitle: for of loop
        isActive: true
        body: |-

          # `for..of` loop

          When we need to iterate over the elements of an array, we use the `for...of` loop. For each iteration the value of the next element is assigned to the variable, which can be declared with `const`, `let` or `var`.

          ```javascript
          for (variable of array) {
            // code block to be executed
          }
          ```
      - pageTitle: for of loop example
        isActive: true
        body: |-

          # `for...of` loop

          <h4>Example</h4></br>

          ```javascript
          const shoppingList = ["bread", "milk", "eggs", "coffee"];

          for (const item of shoppingList) {
            console.log(`- ${item}`);
          }

          // output:
          // - bread
          // - milk
          // - eggs
          // - coffee
          ```
      - pageTitle: for of loop exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://arrays/exercises/for-of-loop-exercise)
      - pageTitle: Destructuring assignment
        isActive: true
        body: |-

          # Destructuring

          The destructuring assignment syntax is an easy way to unpack values from arrays into distinct variables.

          ```javascript
          const numArr = [1, 2, 3];

          // destructuring works as left to right index
          const [num1, num2, num3] = numArr;

          console.log(num1); // output: 1
          console.log(num2); // output: 2
          console.log(num3); // output: 3
          ```
      - pageTitle: Default values
        isActive: true
        body: |-

          # Default values

          In cases where the elements of an array do not correspond to the local variables, the surplus variable will give us `undefined`.

          ```javascript
          const numArr = [1, 2];
          const [num1, num2, num3] = numArr;

          console.log(num1); // output: 1
          console.log(num2); // output: 2
          console.log(num3); // output: undefined
          ```

          </br>

          To avoid this situation, we can use default values for the local variables.

          ```javascript
          const numArr = [1, 2];
          const [num1 = 11, num2 = 22, num3 = 33] = numArr;

          console.log(num1); // output: 1
          console.log(num2); // output: 2
          console.log(num3); // output: 33
          ```
      - pageTitle: Skipping elements
        isActive: true
        body: |-

          # Skipping elements

          It is possible to skip elements, if we do not want to assign them to local variables, by using commas `,`.

          ```javascript
          const numArr = [1, 2, 3];
          const [, , num3] = numArr;

          console.log(num3); // output: 3
          ```
      - pageTitle: Nested array destructuring
        isActive: true
        body: |-

          # Nested array destructuring

          When we work with nested arrays and we want a nested value, we can destructure down to that level.

          ```javascript
          const numArr = [1, [2, 3]];
          const [num1, [num2, num3]] = numArr;

          console.log(num1); // output: 1
          console.log(num2); // output: 2
          console.log(num3); // output: 3
          ```
      - pageTitle: Array of objects destructuring
        isActive: true
        body: |-

          # Array of objects destructuring

          To destructure an array of objects, we must first extract each object from the array and then destructure each object by extracting the corresponding properties.

          ```javascript
          const numArr = [{ num1: 1 }, { num2: 2 }, { num3: 3 }];
          const [{ num1 }, { num2 }, { num3 }] = numArr;

          console.log(num1); // output: 1
          console.log(num2); // output: 2
          console.log(num3); // output: 3
          ```
      - pageTitle: Array destructuring using rest operator
        isActive: true
        body: |-

          # Array destructuring

          <h4>Using the rest operator</h4></br>

          Sometimes we may want to assign the remaining part of an array to a single variable. To achieve this, we can use the `rest` operator.

          ```javascript
          const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          const [num1, num2, num3, ...restNum] = numArr;

          console.log(num1); // output: 1
          console.log(num2); // output: 2
          console.log(num3); // output: 3
          console.log(restNum); // output: [4, 5, 6, 7, 8, 9, 10]
          ```

          <blockquote className="hint">
              Always use the rest operator for the last elements, otherwise a SyntaxError occurs.
          </blockquote>
      - pageTitle: Array destructuring using rest operator exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://arrays/exercises/destructuring-exercise)
      - pageTitle: Spread operator
        isActive: true
        body: |-

          # `spread` operator

          The `spread` operator allows us to spread out elements of an array or object.

          Even though it has the same syntax as the `rest` operator, the main difference between these two operators is that the spread syntax expands arrays and objects into individual values while the `rest` operator collects all the remaining values into an array.

          ```javascript
          const oddNumbers = [1, 3, 5];
          const evenNumbers = [2, 4, 6];

          // using the concat method
          const combinedWithConcat = oddNumbers.concat(evenNumbers);

          // using spread operator instead of the concat method
          const combinedWithSpread = [...oddNumbers, ...evenNumbers];

          console.log(combinedWithConcat); // [1,3,5,2,4,6]
          console.log(combinedWithSpread); // [1,3,5,2,4,6]
          ```
      - pageTitle: Spread operator exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://arrays/exercises/spread-operator-exercise)
  - sectionTitle: DOM
    isActive: true
    pages:
      - pageTitle: What is the DOM
        isActive: true
        body: |-

          # What is the DOM

          DOM or else `Document Object Model` is a logical tree-like model that organizes a web page HTML document as an object.

          It is a language agnostic structure implemented by browsers to allow for web scripting languages, like JavaScript, to manipulate the structure of an HTML web page.

          DOM consists of parents and children. These individual parts of the document are known as `nodes`.
      - pageTitle: This is the DOM
        isActive: true
        body: |-

          ![This is the DOM](/img/javascript/dom.png)
      - pageTitle: Document object
        isActive: true
        body: |-

          # Document Object

          The document object is what let's access and manipulate the DOM, making our web pages interactive.

          The document allows scripts to access children of the DOM as properties.

          For example, in order to access the `<body>` element, we can access it as a property of the document by typing `document.body`.

          This property will return the body element of the DOM.

          ```javascript
          // given this HTML:
          // <body id="thisIsBodyElement"></body>

          alert(document.body.id); // "thisIsBodyElement"
          ```
      - pageTitle: Targeting elements
        isActive: true
        body: |-

          # Targeting elements

          If we need to select a specific element, we can do so by using CSS selectors. Selectors can include the name of the tag, a class or an id.

          Below, there is a list of document methods for targeting elements:

          - `querySelector`

          - `getElementById`

          - `getElementsByClassName`
      - pageTitle: querySelector method
        isActive: true
        body: |-

          # `querySelector` method

          This method accepts a CSS selector and returns the first element that matches the argument selector or group of selectors. If no matches are found, null is returned.

          ```javascript
          const element = document.querySelector(selectors);
          ```
      - pageTitle: querySelector example
        isActive: true
        body: |-

          # `querySelector` method

          <h4>Examples</h4></br>

          Note that we could also target all elements with querySelector like so.

          ```html
          <html>
            <head>
              <title>DOM</title>
            </head>
            <body>
              <h1>Header</h1>
              <p id="id1">Hello</p>
              <p class="class1">World</p>
              <script src="./index.js"></script>
            </body>
          </html>
          ```

          ```javascript
          // index.js
          const header = document.querySelector("h1");
          const hello = document.querySelector("#id1");
          const world = document.querySelector(".class1");
          ```
      - pageTitle: getElementById method
        isActive: true
        body: |-

          # `getElementById` method

          This method returns an element object representing the element whose the id property matches the specified string argument.

          ```javascript
          const element = document.getElementById(id);
          ```
      - pageTitle: getElementsByClassName method
        isActive: true
        body: |-

          # `getElementsByClassName` method

          This method returns an array-like object of all child elements which have all of the given class name(s).

          ```javascript
          const element = document.getElementsByClassName(className);
          ```
      - pageTitle: Document methods example
        isActive: true
        body: |-

          # Document methods

          <h4>Examples</h4></br>

          ```html
          <html>
            <head>
              <title>DOM</title>
            </head>
            <body>
              <h1>Header</h1>
              <p id="id1">Hello</p>
              <p class="class1">World</p>
              <script src="./index.js"></script>
            </body>
          </html>
          ```

          ```javascript
          // index.js
          const header = document.querySelector("h1");
          const hello = document.getElementById("id1");
          const world = document.getElementsByClassName("class1");
          ```
      - pageTitle: Adding content
        isActive: true
        body: |-

          # Adding content in elements

          We can add valid HTML, including properly formatted elements, using the `innerHTML` method.

          ```html
          <html>
            <head>
              <title>DOM</title>
            </head>
            <body>
              <script src="./index.js"></script>
            </body>
          </html>
          ```

          ```javascript
          // index.js
          document.body.innerHTML = "<h1>I am a header </h1>";
          ```
      - pageTitle: Replacing content
        isActive: true
        body: |-

          # Replacing content in elements

          We can also replace the title of the `h1` header tag using the `innerHTML` method.

          ```html
          <html>
            <head>
              <title>DOM</title>
            </head>
            <body>
              <h1 id="id1">Content</h1>
              <script src="./index.js"></script>
            </body>
          </html>
          ```

          ```javascript
          // index.js
          const header = document.querySelector("#id1");
          header.innerHTML = "Updated content";
          ```
      - pageTitle: Modifying styles
        isActive: true
        body: |-

          # Modifying styles

          Additionally, we can modify the style of an element with the `style` property.

          ```html
          <html>
            <head>
              <title>DOM</title>
            </head>
            <body>
              <p id="id1">Hello</p>
              <script src="./index.js"></script>
            </body>
          </html>
          ```

          ```javascript
          // index.js
          const coloredRed = document.getElementById("id1");
          coloredRed.style.color = "red";
          coloredRed.style.backgroundColor = "blue";
          ```
      - pageTitle: Creating elements
        isActive: true
        body: |-

          # Creating elements

          The document object provides us the `createElement` method which creates an HTML element specified by a tag name.

          ```javascript
          const element = document.createElement(tagName);
          ```

          <blockquote className="hint">
              The appendChild method adds a node to the end of the list of children of a specified parent node.
          </blockquote>
      - pageTitle: Creating elements example
        isActive: true
        body: |-

          # Creating elements

          <h4>Example</h4></br>

          ```html
          <html>
            <head>
              <title>DOM</title>
            </head>
            <body>
              <div id="id1">
                <p>Hello</p>
              </div>
              <script src="./index.js"></script>
            </body>
          </html>
          ```

          ```javascript
          // index.js
          // target the div element
          const div = document.getElementById("id1");
          // create a new element
          const newElement = document.createElement("h1");
          // add content to the new element
          newElement.innerHTML = "World";
          // append the new element to the end of the div element
          div.appendChild(newElement);
          ```
      - pageTitle: Removing elements
        isActive: true
        body: |-

          # Removing elements

          Removing elements is also an option by utilizing the `remove` method.

          What it does is removing the specified element from the tree it belongs to.
      - pageTitle: Removing elements example
        isActive: true
        body: |-

          # Removing elements

          <h4>Example</h4></br>

          ```html
          <html>
            <head>
              <title>DOM</title>
            </head>
            <body>
              <script src="./index.js"></script>
            </body>
          </html>
          ```

          ```javascript
          // index.js
          const secondDiv = document.querySelector("#id2");
          secondDiv.remove();
          ```
      - pageTitle: Interacting with events
        isActive: true
        body: |-

          # Interaction with events

          Interacting with the DOM elements through clicking, input typing, dragging etc will emit events.

          We can use event listeners to listen for when these events take place and react to them.

          These events can be attached to all elements, as well as to the document and the window objects.

          Mouse events are captured through clicks and mousedowns, for example. Keyboard events through input and keypress while form events through submit, change etc.
      - pageTitle: Adding event listeners
        isActive: true
        body: |-

          # Adding event listeners

          Let's understand this concept through 3 examples.

          We will use the `addEventListener` method of the EventTarget interface which sets up a function that will be called whenever the specified event is delivered to the target.
      - pageTitle: Click event example
        isActive: true
        body: |-

          # `Click` event

          <h4>Example</h4></br>

          ```html
          <html>
            <head>
              <title>DOM</title>
            </head>
            <body>
              <button id="button">Click me</button>
              <script src="./index.js"></script>
            </body>
          </html>
          ```

          ```javascript
          // index.js
          const button = document.getElementById("button");

          button.addEventListener("click", () => console.log("Clicked")); // output: Clicked
          ```
      - pageTitle: Click event example breakdown
        isActive: true
        body: |-

          # `Click` event

          <h4>Example breakdown</h4></br>

          An event-listener is added on the button element whose id equals to the string `button`.

          The listener accepts 2 arguments:

          - the type of the event for which the listener will listen which in this case is the `click` event

          - a callback function</br>
            The callback function will be executed when the targeted element will fire the click event. Inside the callback function we can perform any logic. For this example, we just log a message to the console.
      - pageTitle: Input event example
        isActive: true
        body: |-

          # `Input` event

          <h4>Example</h4></br>

          ```html
          <body>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
            <script src="./index.js"></script>
          </body>
          ```

          ```javascript
          // index.js
          const input = document.getElementById("name");
          input.addEventListener("input", (event) => {
            console.log(event.target.value);
          });

          // output:
          // "h"
          // "he"
          // "hel"
          // "hell"
          // "hello"
          ```
      - pageTitle: Input event example breakdown
        isActive: true
        body: |-

          # `Input` event

          <h4>Example breakdown</h4></br>

          An event-listener is added on the input element whose id equals to the string `name`.

          The listener accepts 2 arguments:

          - the type of the event for which the listener will listen which in this case is the `input` event

          - a callback function</br>
            Inside the callback function we have access to the event object. The `event.target.value` holds the actual input that the user types on their keyboard.
      - pageTitle: Submit event example
        isActive: true
        body: |-

          # `Submit` event

          <h4>Example</h4></br>

          ```html
          <body>
            <form id="form">
              <label>Test field: <input type="text" required /></label>
              <button type="submit">Submit form</button>
            </form>
            <p></p>
            <script src="./index.js"></script>
          </body>
          ```

          ```javascript
          // index.js
          const form = document.getElementById("form");
          const log = document.querySelector("p");

          const onSubmit = (event) => {
            log.textContent = `Time stamp: ${event.timeStamp}`;
            // the preventDefault method is required as it will prevent the default behavior which reloads the page due to the submit event
            event.preventDefault();
          };
          // the listener will be triggered when the form is submitted
          form.addEventListener("submit", onSubmit);
          ```
      - pageTitle: Submit event example breakdown
        isActive: true
        body: |-

          # `Submit` event

          <h4>Example breakdown</h4></br>

          An event-listener is added on the form element whose id equals to the string `form`.

          The listener accepts 2 arguments:

          - the type of the event for which the listener will listen which in this case is the `submit` event

          - a callback function</br>
            Inside the callback function we have access to the event object.
            The `log` variable holds the single `p` element which is present in the HTML page and adds as its content the timestamp of the form submission.
      - pageTitle: Removing event listeners
        isActive: true
        body: |-

          # Removing event listeners

          Just like the `addEventListener` method, the `removeEventListener` accepts 2 arguments:

          - the event type

          - a callback function
      - pageTitle: Removing event listeners example
        isActive: true
        body: |-

          # Removing event listeners

          <h4>Example</h4></br>

          ```html
          <html>
            <head>
              <title>DOM</title>
            </head>
            <body>
              <button id="button">Click me</button>
              <script src="./index.js"></script>
            </body>
          </html>
          ```

          ```javascript
          // index.js
          const handleCLick = () => console.log("Clicked");
          const button = document.getElementById("button");

          button.removeEventListener("click", handleCLick);
          ```
      - pageTitle: Event object
        isActive: true
        body: |-

          # Event object

          The interaction with the browser results in an event object to be created.

          This event object has properties that describe that interaction and is filled with all sorts of information and methods to work with.
      - pageTitle: Accessing the event object
        isActive: true
        body: |-

          # Accessing the event object

          To access this event object, we modify the callback function of a listener to accept a parameter which is the event object.

          ```javascript
          button.addEventListener("click", (event) => {
            // the event listener callback receives the event object
            // through the event object, we have a reference to the object onto which the event was dispatched with the event.target and many more
            console.log(event);
          });
          ```
      - pageTitle: Event object exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://dom/exercises/counter-excersice)
      - pageTitle: Event bubbling
        isActive: true
        body: |-

          # Event bubbling

          When an event is triggered on an element, the default behavior is that all of its handlers will be executed, then the handlers on its parent, then the handlers all the way up of all its rest ancestors.

          This is caused because of the `event bubbling`.
      - pageTitle: Event bubbling example (dom)
        isActive: true
        body: |-

          # Event bubbling

          <h4>Example HTML</h4></br>

          ```html
          <body>
            <div id="parent">
              <div id="child"></div>
            </div>
            <script src="./index.js"></script>
          </body>
          ```
      - pageTitle: Event bubbling example
        isActive: true
        body: |-

          # Event bubbling

          <h4>Example JavaScript</h4></br>

          ```javascript
          // index.js
          const grandparent = document.querySelector("#grandparent");
          const parent = document.querySelector("#parent");
          const child = document.querySelector("#child");
          document.addEventListener("click", (event) => {
            console.log("document");
          });
          grandparent.addEventListener("click", (event) => {
            console.log("grandparent");
          });
          parent.addEventListener("click", (event) => {
            console.log("parent");
          });
          child.addEventListener("click", (event) => {
            console.log("child");
          });

          // on child click
          // output:
          // "child"
          // "parent"
          // "grandparent"
          // "document"
          ```
      - pageTitle: Event bubbling example breakdown
        isActive: true
        body: |-

          # Event bubbling

          <h4>Example breakdown</h4></br>

          - `event capturing`</br>
            The browser understands that the user clicked on the body element, then on the grandparent element, next on the parent and finally clicked on the child element. The order is from top to down and captures all these events. At this point, none event has been fired yet. The browser just captures the areas the user clicked and stores them.

          - `event bubbling`</br>
            The reversed procedure takes place. The events will be executed sequentially starting from the target element straight-up calling all handlers on the path.
      - pageTitle: stopPropagation method
        isActive: true
        body: |-

          # `stopPropagation` method

          Any event handler is able to decide that the event has been fully processed and stop the bubbling.

          The method for this action is the `event.stopPropagation`, as it is shown in the following example.
      - pageTitle: stoppropagation method example (dom)
        isActive: true
        body: |-

          # `stopPropagation` method

          <h4>Example HTML</h4></br>

          ```html
          <body>
            <div id="parent">
              <div id="child"></div>
            </div>
            <script src="./index.js"></script>
          </body>
          ```
      - pageTitle: stopPropagation example
        isActive: true
        body: |-

          # `stopPropagation` method

          <h4>Example JavaScript</h4></br>

          ```javascript
          // index.js
          const grandparent = document.querySelector("#grandparent");
          const parent = document.querySelector("#parent");
          const child = document.querySelector("#child");
          document.addEventListener("click", (event) => {
            console.log("document");
          });
          grandparent.addEventListener("click", (event) => {
            console.log("grandparent");
          });
          parent.addEventListener("click", (event) => {
            console.log("parent");
          });
          child.addEventListener("click", (event) => {
            event.stopPropagation();
            console.log("child");
          });

          // on child click
          // output:
          // "child"
          ```
      - pageTitle: Event phases
        isActive: true
        body: |-

          ![event phases](/img/javascript/event-phase.png)
      - pageTitle: Event bubbling exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://dom/exercises/event-bubbling-excersice)
      - pageTitle: stopPropagation vs preventDefault
        isActive: true
        body: |-

          # `stopPropagation` vs `preventDefault`

          The `stopPropagation` method immediately stops the flow of an event through the DOM tree.

          However, it does not stop the browser's default behavior.

          To prevent the default behavior of an event, we should use the `preventDefault` method.
      - pageTitle: stopPropagation vs preventDefault example
        isActive: true
        body: |-

          # `stopPropagation` vs `preventDefault`

          <h4>Example</h4></br>

          ```html
          <html>
            <head>
              <title>DOM</title>
            </head>
            <body>
              <a href="https://www.javascripttutorial.net/">JS Tutorial</a>
              <script src="./index.js"></script>
            </body>
          </html>
          ```

          ```javascript
          // index.js
          const link = document.querySelector("a");
          // clicking the link will not redirect us to the requested page
          link.addEventListener("click", (event) => event.preventDefault());
          ```
  - sectionTitle: Modules
    isActive: true
    pages:
      - pageTitle: What are modules
        isActive: true
        body: |-

          # What are modules

          Modules are reusable pieces of code in a file that can be exported and then imported for use in another file.</br>
          Before ES6 introduces the module system, it was impossible to directly reference or include one JavaScript file in another.

          <blockquote className="hint">
              The words module and file are often used interchangably.
          </blockquote>
      - pageTitle: Benefits of modules
        isActive: true
        body: |-

          # Benefits of modules

          There are many benefits to creating a modular program:

          - we can easily maintain and debug code

          - we can reuse defined logic in different parts of our application, avoiding unnecessary code duplications

          - it is easier to prevent pollution of the global namespace and naming collisions, as each module has its own top-level scope, also named module scope.
      - pageTitle: What is a runtime environment
        isActive: true
        body: |-

          # What is a runtime environment

          A runtime environment is the place where our program or application will be executed. It also provides access to built-in libraries and the global object.

          There are two ways to implement modules, depending on the runtime environment in which our code runs:

          - in a browser's runtime environment, we use the ES6 import/export syntax</br>
          - in the Node runtime environment, we use the `module.exports` and `require()` syntax</br>

          The most common place where JavaScript code is executed is in a browser.

      - pageTitle: Export types
        isActive: true
        body: |-

          # Export types

          There are three main types of exports:

          - default exports (one per module)

          - named exports (several per module)

          - mixed exports
      - pageTitle: default export syntax
        isActive: true
        body: |-

          # Default type

          <h4>Export syntax</h4></br>

          Every module can export a single value to represent the entire module. This type of export is called default export and we can have only one per file.

          ```javascript
          // file1.js
          const someFunc = () => {};
          export { someFunc as default };
          ```

          </br>

          We can also use the shorthand syntax.

          ```javascript
          // file1.js
          const someFunc = () => {};
          export default someFunc;
          ```

      - pageTitle: default export - import syntax
        isActive: true
        body: |-

          # Default type

          <h4>Import syntax</h4></br>

          ```javascript
          // file2.js
          import someFunc from "./file1";
          ```

          </br>

          The imported default value may be given **any name** we choose.

          ```javascript
          // file2.js
          import someFunc from "./file1";

          // is equivalent to
          import theSameFunc from "./file1";
          ```

      - pageTitle: default export - destructuring syntax
        isActive: true
        body: |-

          # Default type

          <h4>Destructuring syntax</h4></br>

          If the default export is an object, we can use destructuring syntax to extract the values inside, only after the object is imported.

          ```javascript
          // file1.js
          export default { firstName: "Jane", lastName: "Doe" };

          // file2.js
          // this will work
          import fullName from "./file1";

          const { firstName, lastName } = fullName;

          // but this will not work
          import { firstName, lastName } from "./file1";
          ```

      - pageTitle: named export syntax
        isActive: true
        body: |-

          # Named type

          <h4>Export syntax</h4></br>

          Named export is useful for the simultaneous export of many values.

          ```javascript
          // file1.js
          const someFunc = () => {};
          const anotherFunc = () => {};
          export { someFunc, anotherFunc };
          ```

          </br>

          We can also export individual values as named exports.

          ```javascript
          // file1.js
          export const someFunc = () => {};
          export const anotherFunc = () => {};
          ```

      - pageTitle: named export - import syntax
        isActive: true
        body: |-

          # Named type

          <h4>Import syntax</h4></br>

          The syntax for importing named exports from modules is similar to the export syntax.

          ```javascript
          // file2.js
          import { someFunc, anotherFunc } from "./file1";
          ```

          <blockquote className="hint">
              Inside the import statement, it is mandatory to use the same name as the corresponding exported value.
          </blockquote>

      - pageTitle: Mixed exports
        isActive: true
        body: |-

          # Mixed exports

          We can have both named exports and a default export in the same module.

          ```javascript
          // file1.js
          export const someFunc = () => {};
          const anotherFunc = () => {};

          export default anotherFunc;
          ```

          </br>

          We can import them using either of the following ways:

          ```javascript
          // file2.js
          import anotherFunc, { someFunc } from "./file1";

          // is equavalent to
          import anotherFunc from "./file1";
          import { someFunc } from "./file1";
          ```

      - pageTitle: Renaming exports and imports
        isActive: true
        body: |-

          # Export and import types

          <h4>Renaming</h4></br>

          To avoid name conflicts, ES6 modules include a syntax for renaming module values. Both of the following examples will have the same result:

          ```javascript
          // file1.js
          const someFunc = () => {};
          export { someFunc as renamedFunc };

          // file2.js
          import { renamedFunc } from "./file1";
          ```

          ```javascript
          // file1.js
          const someFunc = () => {};
          export { someFunc };

          // file2.js
          import { someFunc as renamedFunc } from "./file1";
          ```

      - pageTitle: Import all syntax
        isActive: true
        body: |-

          # Import all from a module

          The following syntax gathers all the named exports available in file1.js and makes them properties of a module object. This object can have any name we choose.

          ```javascript
          // file1.js
          const someFunc = () => {};
          const anotherFunc = () => {};
          const oneMoreFunc = () => {};
          const aDifferentFunc = () => {};
          export { someFunc, anotherFunc, oneMoreFunc, aDifferentFunc };

          // file2.js
          import * as anyName from "./file1";

          // is equavalent to
          import { someFunc, anotherFunc, oneMoreFunc, aDifferentFunc } from "./file1";

          anyName.someFunc();
          const { anotherFunc, oneMoreFunc } = anyName;
          ```

      - pageTitle: Applying modules to HTML
        isActive: true
        body: |-

          # Applying modules to HTML

          To apply a module to our HTML page, we include the attribute `type="module"` in the script element, to declare the script as a module.

          ```html
          <script type="module" src="file2.js"></script>
          ```

          </br>

          If we omit the attribute, Chrome for example throws a "SyntaxError: Cannot use import statement outside a module".

          <blockquote className="hint">
              We can only use import and export statements inside modules, not regular scripts.
          </blockquote>
      - pageTitle: module.exports syntax
        isActive: true
        body: |-

          # module.exports type

          <h4>Syntax</h4></br>

          The `module.exports` is a built-in object in Node.js. To provide the functionality we need in other files, we store it within the `module.exports` object.

          ```javascript
          // file1.js
          const someFunc = () => {};
          module.exports = someFunc;
          ```

          </br>

          If we want to make more than one functions available to other files, we add them as properties to `module.exports`.

          ```javascript
          // file1.js
          const someFunc = () => {};
          const anotherFunc = () => {};
          module.exports.someFunc = someFunc;
          module.exports.anotherFunc = anotherFunc;
          ```

      - pageTitle: require syntax
        isActive: true
        body: |-

          # require method

          <h4>Syntax</h4></br>

          To import the `module.exports` object, we use the `require()` function.

          It accepts a string as an argument and that string provides the file path to the module you would like to import.

          ```javascript
          // file2.js
          const someFunc = require("./file1");
          ```

      - pageTitle: require - destructuring syntax
        isActive: true
        body: |-

          # require method

          <h4>Destructuring syntax</h4></br>

          If we want to import more than one functions, we can use destructuring syntax.

          ```javascript
          // file2.js
          const { someFunc, anotherFunc } = require("./file1");
          ```

  - sectionTitle: Scope
    isActive: true
    pages:
      - pageTitle: What is scope
        isActive: true
        body: |-

          # What is scope

          Scope determines the availability of variables and functions.

          Therefore, the accessibility of variables and functions is limited by the scope in which they are created.

          Before ES6, JavaScript had only two scope types, the global and the function scope.</br>
          These days, there are four types:

          - function scope
          - block scope
          - module scope
          - global scope
      - pageTitle: Function scope
        isActive: true
        body: |-

          # Function scope

          Function scope means that variables declared in a function are visible everywhere within that function, but cannot be accessed outside of it.

          Each function creates a new scope for variables declared with `var`, `let`, or `const`.

          ```javascript
          const sayHello = () => {
            // function scope
            var greeting = "Hello";
            console.log(greeting); // output: Hello
          };

          console.log(greeting); // ReferenceError: greeting is not defined
          ```
      - pageTitle: Block scope
        isActive: true
        body: |-

          # Block scope

          A block of code `{}` defines a scope for functions and variables declared with `let` and `const`.

          These are only accessible to the lines of code within the block.

          For this reason, variables declared with block (or function) scope are called local variables.

          ```javascript
          if (true) {
            // block scope
            const greeting = "Hello";
            console.log(greeting); // output: Hello
          }

          console.log(greeting); // ReferenceError: greeting is not defined
          ```
      - pageTitle: Block scope and var
        isActive: true
        body: |-

          # Block scope


          <h4>var keyword</h4></br>

          Variables declared with `var` do not have block scope.

          Therefore, when declared inside a block, they can also be accessed from outside that block (unless it is a function).

          ```javascript
          if (true) {
            // does not have block scope
            var greeting = "Hello";
            console.log(greeting); // output: Hello
          }

          console.log(greeting); // output: Hello
          ```
      - pageTitle: Module scope and export
        isActive: true
        body: |-

          # Module scope

          <h4>Export syntax</h4></br>

          In ES6 modules, a variable declared outside any function is not visible to other modules, unless we explicitly export it.

          ```javascript
          // file1.js - module scope

          export const sayHello = () => {
            // block scope
            const greeting = "Hello";
            console.log(greeting);
          };
          const sayHola = () => {
            // block scope
            const greeting = "Hola";
            console.log(greeting);
          };

          sayHello(); // output: Hello
          sayHola(); // output: Hola
          ```
          <blockquote className="hint">
            Notice that only the sayHello function is exported from the file!
          </blockquote>
      - pageTitle: Module scope and import
        isActive: true
        body: |-

          # Module scope

          <h4>Import syntax</h4></br>

          Importing a variable or a function from other modules, makes it available to the current module.

          ```javascript
          // file2.js - module scope

          import { sayHello } from "./file1";

          sayHello(); // output: Hello
          sayHola(); // ReferenceError: sayHola is not defined
          ```
      - pageTitle: Global scope
        isActive: true
        body: |-

          # Global scope

          Variables and functions defined outside any function, block, or module scope have global scope and can be accessed from anywhere in the code.

          The global scope is the outermost scope and is accessible from any inner scope.

          When the module system is not enabled, a variable declared outside any function, in any file, is a global variable.
      - pageTitle: Global scope example
        isActive: true
        body: |-

          # Global scope

          <h4>Example</h4></br>

          ```html
          <!--index.html-->
          <script src="./file1.js"></script>
          <script src="./file2.js"></script>
          ```

          ```javascript
          // file1.js
          // global scope
          const greeting = "Hello";
          ```

          ```javascript
          // file2.js
          // global scope
          const sayHello = () => {
            // block scope
            console.log(greeting);
          };

          sayHello(); // output: Hello
          ```
      - pageTitle: Global scope and global object
        isActive: true
        body: |-

          # Global scope and global object

          Another way to create a global variable is to use the window global object.

          The window object is created automatically by the browser and represents an open window in a browser.

          ```javascript
          window.greeting = "Hello";
          ```

          <blockquote className="danger">
              Although we can create global variables by adding properties to the window object, this is not considered a good practice.
          </blockquote>
      - pageTitle: Scope chain
        isActive: true
        body: |-

          # Scope chain

          Every scope is linked to its parent scope.

          When a variable is used, JavaScript will try to find the variable’s value in the current scope.</br>
          If it cannot find the variable, it will look into the next outer scope, until it reaches the global scope, which is the end of the scope chain.</br>
          If it cannot find the variable in the global scope either, it will return a ReferenceError.
      - pageTitle: Scope chain example
        isActive: true
        body: |-

          # Scope chain

          <h4>Example</h4></br>

          ```javascript
          // finally, JavaScript looks for the variable in the global scope - we are lucky, there it is!
          const greeting = "Hello";
          const outerFunc = () => {
            // then, JavaScript looks for the variable in the next outer scope - it does not find it, though
            const innerFunc = () => {
              // first, JavaScript looks for the variable in the current scope - it does not find it, though
              return greeting;
            };
            innerFunc();
          };

          outerFunc(); // output: Hello
          ```
      - pageTitle: Lexical scope
        isActive: true
        body: |-

          # Lexical scope

          Lexical scope is the scope defined by the area where variables are created.

          It is useful to think that lexical always refers to the definition region.

          <blockquote className="hint">
              The place an item is invoked is not necessarily the item's lexical scope.
          </blockquote>
      - pageTitle: Lexical scope examples
        isActive: true
        body: |-

          # Lexical scope

          <h4>Examples</h4></br>

          ```javascript
          // the message variable is declared in the global scope
          const message = "Hello";
          // the message variable is used ("called") inside the greeting function
          const greeting = () => console.log(message);

          greeting(); // output: Hello
          ```

          ```javascript
          const greeting = () => {
            // the message variable is declared in the scope defined by the greeting function
            const message = "Hello";
            // the message variable is used ("called") inside the scope defined by the greeting function
            console.log(message);
          };

          greeting(); // output: Hello
          ```
      - pageTitle: Why lexical scope is useful
        isActive: true
        body: |-

          # Why lexical scope is useful

          Lexical scope is the ability some code of an inner scope has, in order to access variables and functions defined in the parent or outer scopes.

          ```javascript
          // global scope
          const name = "Sofia";
          const outerFunc = () => {
            // outerFunc scope
            const greeting = "Hello";
            const innerFunc = () => {
              // innerFunc scope
              return console.log(`${greeting} ${name}`);
            };
            innerFunc();
          };

          outerFunc(); // output: Hello Sofia
          ```
      - pageTitle: Closure example
        isActive: true
        body: |-

          # Closure

          <h4>Example</h4></br>

          ```javascript
          // global scope
          const name = "Sofia";
          const outerFunc = () => {
            // outerFunc scope
            const greeting = "Hello";
            const innerFunc = () => {
              // innerFunc scope
              return console.log(`${greeting} ${name}`);
            };
            // adjustment - instead of calling the innerFunc()
            return innerFunc;
          };

          const sayHello = outerFunc();
          sayHello(); // output: Hello Sofia
          ```

          <blockquote className="hint">
            Here there is a closure, because the innerFunc function captures the variable greeting from its parent scope which is the outerFunc function's scope, after the outerFunc has closed!
          </blockquote>
  - sectionTitle: Hoisting
    isActive: true
    pages:
      - pageTitle: What is hoisting
        isActive: true
        body: |-

          # What is hoisting

          In JavaScript, hoisting is the default behavior of moving all variable and function declarations on top of their scope (regardless of whether their scope is global or local), before code execution. In other words, hoisting allows us to access variables and functions before they are created.

          Hoisting affects differently variable declarations with `var`, `let` or `const`, `function declarations` and `function expressions`.
      - pageTitle: Variable hoisting
        isActive: true
        body: |-

          # Hoisting

          <h4>var keyword</h4></br>

          Variables declared with `var` are hoisted to the top of their enclosing scope. Therefore, if we access a variable before its declaration, it evaluates to `undefined`.</br>
          That means that no error will be thrown as the variable is considered already declared due to hoisting. Though its value is not set yet.

          ```javascript
          const sayHello = () => {
            console.log(greeting);
            var greeting = "Hello";
            console.log(greeting);
          };

          sayHello();
          // output:
          // undefined
          // Hello
          ```
      - pageTitle: var hoisting explanation
        isActive: true
        body: |-

          # Hoisting

          <h4>var keyword exaplanation</h4></br>

          ```javascript
          const sayHello = () => {
            // variable declaration is moved to the top of the function scope
            var greeting;
            // accessing variable before initialization
            console.log(greeting);
            // variable initialization is done
            greeting = "Hello";
            // accessing variable after initialization
            console.log(greeting);
          };

          sayHello();
          // output:
          // undefined
          // Hello
          ```

          <blockquote className="hint">
            When the variable is hoisted, the declaration is moved to the top, but the initial value assignment is not affected.
          </blockquote>
      - pageTitle: let and const hoisting
        isActive: true
        body: |-

          # Hoisting

          <h4>let - const keywords</h4></br>

          Variables declared with `let` and `const` are also hoisted but, unlike `var`, they are not assigned a default value of `undefined`.

          ```javascript
          const sayHello = () => {
            console.log(greeting);
            const greeting = "Hello";
          };
          sayHello(); // ReferenceError: Cannot access 'greeting' before initialization
          ```

          </br>

          Correspondingly:

          ```javascript
          const sayHello = () => {
            console.log(greeting);
            let greeting = "Hello";
          };
          sayHello(); // ReferenceError: Cannot access 'greeting' before initialization
          ```
      - pageTitle: Function hoisting
        isActive: true
        body: |-

          # Hoisting

          <h4>Function declaration</h4></br>

          Hoisting a function declaration allows us to call the function anywhere in the enclosing scope (i.e. current and inner scopes), even before its declaration. In other words, because of hoisting, a function can be invoked before its declaration.

          ```javascript
          sayHello(); // output: Hello

          function sayHello() {
            const greeting = "Hello";
            console.log(greeting);
          }
          ```
      - pageTitle: Function expression hoisting
        isActive: true
        body: |-

          # Hoisting

          <h4>Function expression</h4></br>

          Function expressions are **not** hoisted. The expression evaluates to a function, which is typically assigned to a variable. In this case, the variable declaration is hoisted and the function expression is its initialization. Therefore the expression is not evaluated, until the relevant line of code is executed.

          ```javascript
          sayHello(); // ReferenceError: Cannot access 'sayHello' before initialization

          const sayHello = () => {
            const greeting = "Hello";
            console.log(greeting);
          };
          ```
      - pageTitle: Hoisting order
        isActive: true
        body: |-

          # Hoisting order

          - variable assignments over
          - function declarations over
          - variable declarations

          ```javascript
          function num() {
            console.log("I am a function");
          }
          var num = 6;
          console.log(typeof num); // output: 'number'
          ```

          ```javascript
          var num;
          function num() {
            console.log("I am a function");
          }
          console.log(typeof num); // output: 'function'
          ```
      - pageTitle: Strict mode
        isActive: true
        body: |-

          # Hoisting

          </br>

          <h4>Not in strict mode</h4>

          ```javascript
          console.log(hoist); // undefined
          var hoist = "Hoisted";
          ```

          </br>

          <h4>In strict mode</h4>

          ```javascript
          "use strict";

          console.log(hoist); // output: ReferenceError: hoist is not defined
          hoist = "Hoisted";
          ```
  - sectionTitle: Classes
    isActive: true
    pages:
      - pageTitle: What are classes
        isActive: true
        body: |-

          # Classes

          ES6 classes are just syntactic sugar for function constructors. They offer a more modern syntax.

          ```javascript
          class Person {
            constructor(firstName, birthYear) {
              this.firstName = firstName;
              this.birthYear = birthYear;
            }

            calculateAge() {
              console.log(2022 - this.birthYear);
            }
          }

          const alice = new Person("Alice", 1991);
          ```
      - pageTitle: Classes and constructor functions
        isActive: true
        body: |-

          # What is a constructor function

          A constructor function is just a function.

          ```javascript
          const Person = function () {
            // body
          };
          ```
      - pageTitle: Constructor function conventions
        isActive: true
        body: |-

          # Conventions

          There are two conventions about a constructor function:

          - its name should start with an upper-case first letter
          - a constructor function is always called with the `new` operator
      - pageTitle: How constructor functions work
        isActive: true
        body: |-

          # How constructor functions work

          ```javascript
          const Person = function () {
            console.log(this);
          };

          new Person(); // output: Person {}
          ```

          - a new empty object is created
          - the newly created object is linked to a `prototype` which is the `prototype` property of the function we called, (i.e. `Person`)
          - the value of `this` will be set to the newly created object
          - the constructor function returns that object

          <blockquote className="hint">
            It is implied that in the code snippet above, the this value is returned which equals to the empty object.
          </blockquote>
      - pageTitle: Constructor functions properties
        isActive: true
        body: |-

          # Properties

          ```javascript
          const Person = function (firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;
          };

          const alice = new Person("Alice", 1991);
          const bob = new Person("Bob", 1981);
          console.log(alice); // output: {firstName: 'Alice', birthYear: 1991}
          console.log(bob); // output: {firstName: 'Bob', birthYear: 1981}
          ```

          <blockquote className="hint">
            Think of a constructor function as a blueprint for creating objects of the same type.
          </bloockquote>
      - pageTitle: Constructor function methods
        isActive: true
        body: |-

          # Methods

          A constructor function can also define functions which are called `methods`.

          ```javascript
          const Person = function (firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;

            this.calculateAge = function () {
              console.log(2022 - this.birthYear);
            };
          };

          const alice = new Person("Alice", 1991);
          alice.calculateAge(); // output: 31
          ```

          <blockquote className="danger">
            Creating methods inside a constructor function is considered bad practice.
          </blockquote>
      - pageTitle: Prototypal inheritance
        isActive: true
        body: |-

          # Prototypal inheritance

          In simple words, `prototypal inheritance` is JavaScript's way to access properties from another object.

          In JavaScript, all objects inherit properties and methods from a `prototype`.
      - pageTitle: Prototype
        isActive: true
        body: |-

          # Prototype

          The `prototype` is an object that is associated with every function and object by default in JavaScript.

          The `prototype` object for functions and objects behaves a bit differently:

          - a function's `prototype` property is accessible and modifiable
          - an object's `prototype` property is not visible

          The `prototype` object is being used by the JavaScript engine for two reasons:

          - to implement inheritance
          - to find properties and methods of an object
      - pageTitle: Inheritance step 1
        isActive: true
        body: |-

          # Inheritance

          <h4>Step 1</h4></br>

          In JavaScript, the inheritance concept is not the same as the one in the object oriented programming (OOP). In the classical inheritance, methods from a base class get copied into a derived class.</br></br>

          In JavaScript, inheritance is supported by using the `prototype` object.

          Below, we define a constructor function named `Person` with two properties `firstName` and `birthYear` while in the `Person.prototype` we define a method named `calculateAge`.

          ```javascript
          const Person = function (firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;
          };

          Person.prototype.calculateAge = function () {
            console.log(2022 - this.birthYear);
          };
          ```
      - pageTitle: Inheritance step 2
        isActive: true
        body: |-

          # Inheritance

          <h4>Step 2</h4></br>

          ```javascript
          const Employee = function (firstName, birthYear, profession) {
            Person.call(this, firstName, birthYear);

            this.profession = profession;
          };

          // the Employee.prototype is set to the newly created person object
          // the new keyword:
          // - creates an object of Person
          // - assigns the Person.prototype to new object's prototype object
          // - assigns the newly created object to the Employee.prototype object
          Employee.prototype = new Person();
          Employee.prototype.constructor = Employee;

          const employee = new Employee("Alice", "1991", "Software Engineer");

          console.log(employee.calculateAge()); // output: 31
          console.log(employee instanceof Employee); // output: true
          console.log(employee instanceof Person); // output: true
          ```
      - pageTitle: Accessing properties and methods of an object
        isActive: true
        body: |-

          # Accessing object

          <h4>Properties / methods</h4></br>

          <!-- Remember what happens when a constructor function is called, _the newly created object is linked to a `prototype` which is the `prototype` property of its constructor function_. -->

          ```javascript
          const Person = function (firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;
          };

          // a method named calculateAge is created on the prototype object of the Person constructor function
          Person.prototype.calculateAge = function () {
            console.log(2022 - this.birthYear);
          };
          ```

          ```javascript
          const alice = new Person("Alice", 1991);

          alice.calculateAge(); // output: 31
          console.log(alice); //  output: {firstName: 'Alice', birthyear: 1991}
          ```

          <blockquote className="hint">
            As own properties are considered only those defined directly on the object itself.
          </blockquote>

          ```javascript
          console.log(alice.hasOwnProperty("firstName")); // output: true
          console.log(alice.hasOwnProperty("calculateAge")); // output: false
          ```
      - pageTitle: Prototype chain
        isActive: true
        body: |-

          # Prototype chain

          ![image info](/img/javascript/chain1.png)
          </br>
          These series of links between the objects is what is called prototype chain and Object.prototype is usually the top of the prototype chain which means its prototype is null.
      - pageTitle: Constructor functions exercice
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://classes/exercises/function-constructor-excersice)
      - pageTitle: Classes vs Constructor functions
        isActive: true
        body: |-

          # Classes vs constructor functions

          </br>
          <h4>Constructor function syntax</h4>

          ```javascript
          function Person2(firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;
          }

          Person2.prototype.calculateAge = function () {
            console.log(2022 - this.birthYear);
          };
          ```

          </br>
          <h4>Classes syntax</h4>

          ```javascript
          class Person1 {
            constructor(firstName, birthYear) {
              this.firstName = firstName;
              this.birthYear = birthYear;
            }

            calculateAge() {
              console.log(2022 - this.birthYear);
            }
          }
          ```
      - pageTitle: Classes exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://classes/exercises/classes-excersice)
      - pageTitle: Inheritance between classes
        isActive: true
        body: |-

          # Inheritance between classes

          ```javascript
          class Car {
            constructor(doors, brand) {
              this.doors = doors;
              this.brand = brand;
            }
            printStats() {
              console.log(`${this.brand} has ${this.doors} doors`);
            }
          }

          class Supercar extends Car {
            constructor(doors, brand, cc) {
              super(doors, brand);
              this.cc = cc;
              this.status = "expensive";
            }
            printSupercarStats() {
              console.log(
                `${this.brand} has ${this.cc} cubic capacity and is ${this.status}`
              );
            }
          }

          const mercedes = new Supercar(4, "mercedes", 3000);
          const ferrari = new Supercar(2, "ferrari", 4000);

          console.log(mercedes, ferrari); // output: {doors: 4, brand: mercedes, cc:3000}, {doors: 2, brand: ferrari, cc:4000}
          ferrari.printStats(); // output: ferrari has 2 doors
          mercedes.printSupercarStats(); // mercedes has 3000 cubic capacity and is expensive
          ```
      - pageTitle: Classes inheritance exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://classes/exercises/subclasses-excersice)
      - pageTitle: Static keyword
        isActive: true
        body: |-

          # Static keyword

          The `static` keyword defines static properties and methods for classes.</br>
          Static methods are called directly on the class - without creating an instance/object of the class.

          ```javascript
          class Car {
            constructor(model) {
              this.model = model;
              Car.carsNumber += 1;
            }

            static carsNumber = 0;
          }

          const car1 = new Car("Ford");
          const car2 = new Car("Tesla");

          console.log(Car.carsNumber); // output: 2
          console.log(car2.carsNumber); // output: undefined
          ```

          <blockquote className="hint">
            Static methods behave the same way we described previously.
          </blockquote>
  - sectionTitle: Execution context
    isActive: true
    pages:
      - pageTitle: Global execution context
        isActive: true
        body: |-

          # What is global execution context

          When we execute JavaScript code for the first time, the JavaScript engine loads and parses the code and then creates a global execution context, or in other words an environment where the JavaScript code is evaluated and executed. The global execution context is the default context and it cannot be more than one.</br>
          The JavaScript engine during the creation of the global execution context does among other tasks, the following:

          - creates the global object, i.e. `window` in the browser
          - creates the special `this` keyword, which points to the global object above

      - pageTitle: Function execution context
        isActive: true
        body: |-

          # What is function execution context

          Executing a function is the same as calling a function or running the code inside the function body. Therefore, the function execution context is the environment where a function is called. Each function has its own execution context and a new execution context is created each time a function is invoked.</br>
          During the creation of a function execution context, the following are also created:

          - the [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object, which contains the values of the arguments passed to the function
          - the special `this` keyword</br>
            The value that the `this` keyword receives within a function body when the function is called, is the current execution context

          <blockquote className="hint">
            For JavaScript code that is executed, there can be only one global execution context, though multiple function execution contexts.
          </blockquote>

      - pageTitle: Understanding JavaScript execution context
        isActive: true
        body: |-

          # Function invocation types

          JavaScript has 4 ways of calling a function:

          - regular function invocation
          - method invocation
          - constructor invocation
          - indirect invocation using the `call` and `apply` methods

          Each invocation type defines the execution context differently, so `this` behaves differently depending on the case. Moreover, strict mode also affects the value of `this`.

          <blockquote className="hint">
              The this keyword for an execution context is associated with specific identifiers (variables, function names). This procedure is called binding in JavaScript.
          </blockquote>

      - pageTitle: this in function invocation
        isActive: true
        body: |-

          # `this` in function invocation

          <h4>Default binding</h4></br>

          ```javascript
          function checkThis() {
            console.log(this === window);
          }

          // in a function invocation, including IIFE but not the arrow functions, the value of this is the global object
          // when the execution environment is the browser, the global object is the window object
          checkThis(); // output: true

          // when strict mode is enabled, the value of this is undefined though
          function checkThisStrict() {
            "use strict";
            console.log(this === undefined);
          }

          checkThisStrict(); // output: true
          ```
      - pageTitle: this in method invocation
        isActive: true
        body: |-

          # `this` in method invocation

          <h4>Implicit binding</h4></br>

          ```javascript
          const objContext = {
            checkThis() {
              console.log(this === objContext);
            },
          };
          objContext.checkThis(); // output: true
          ```

          ```javascript
          const objContext = {
            value: "the context is the objContext",
            checkThis() {
              console.log(this === objContext);
              console.log(this.value);
            },
          };
          // in a method invocation, the value of this is the object that owns the method
          objContext.checkThis(); // ouput: true
                                  //        the context is the objContext
          ```
      - pageTitle: this in method invocation - ReferenceError
        isActive: true
        body: |-

          # `this` in method invocation

          <h4>ReferenceError</h4></br>

          ```javascript
          const objContext = {
            value: "the context is the objContext",
            checkThis() {
              console.log(this === objContext);
              // inside the scope of an object's method, we do not automatically have access to other properties of the same object
              console.log(value);
            },
          };

          objContext.checkThis();
          // output:
          // true
          // ReferenceError: value is not defined
          ```
      - pageTitle: this in method invocation tricky cases A
        isActive: true
        body: |-

          # `this` in method invocation

          <h4>Tricky case</h4></br>

          ```javascript
          const objContext = {
            checkInnerThis() {
              console.log(this === objContext);

              function innerFunc() {
                console.log(this === window);
              }

              // a function which is not invoked directly on an object, it will be called in the context of the default object
              // this of the innerFunc function depends only on its own invocation type and not on the fact that it is defined or called inside another function
              innerFunc();
            },
          };

          objContext.checkInnerThis();
          // output:
          // true
          // true
          ```
      - pageTitle: this in method invocation tricky cases B
        isActive: true
        body: |-

          # `this` in method invocation

          <h4>Tricky case</h4></br>

          ```javascript
          const objContext = {
            checkThis() {
              console.log(this === window);
            },
          };

          // a method is extracted from an object and used as a callback
          setTimeout(objContext.checkThis, 1000); // output: true
          ```
      - pageTitle: this in constructor invocation
        isActive: true
        body: |-

          # `this` in constructor invocation

          <h4>Binding with the new operator</h4></br>

          ```javascript
          class Context {
            constructor() {
              this.value = "the context is the objContext";
            }
            checkThis() {
              console.log(this === objContext);
            }
          }

          const objContext = new Context();

          // the new keyword binds the instance as the this value
          console.log(objContext.value); // output: the context is the objContext
          objContext.checkThis(); // output: true
          ```
      - pageTitle: this using the call and apply methods
        isActive: true
        body: |-

          # `this` value configuration

          <h4>Explicit binding, using the call and apply methods</h4></br>

          ```javascript
          const newContext = ["this", "is", "the", "new", "context"];

          function checkThis(firstName, lastName) {
            console.log(this === newContext);
            console.log(`Hello, ${firstName} ${lastName}!`);
          }

          // the first argument is the value to use as this when calling the function
          checkThis.call(newContext, "Sofia", "Incredible");
          // output:
          // true
          // Hello, Sofia Incredible!

          checkThis.apply(newContext, ["Sofia", "Incredible"]);
          // output:
          // true
          // Hello, Sofia Incredible!
          ```
      - pageTitle: Configure this using the bind method
        isActive: true
        body: |-

          # `this` value configuration

          Explicit binding, using the bind method</br>

          ```javascript
          const newContext = ["this", "is", "the", "new", "context"];

          function checkThis(firstName, lastName) {
            console.log(this === newContext);
            onsole.log(`Hello, ${firstName} ${lastName}!`);
          }

          // the first argument is the value to be passed as this to the target function
          const copyCheckThis = checkThis.bind(newContext, "Sofia", "Incredible");

          // the Kostis and Pine arguments are overwritten!
          copyCheckThis("Kostis", "Pine");
          // output:
          // true
          // Hello, Sofia Incredible!
          ```

          <blockquote className="hint">
            The bind method returns a new function, copy of the target function, which is bound to the specified this value and the optional initial arguments, which precede those   provided when the new function is called. The original and bound functions share the same code and scope, but different contexts and arguments on execution.
          </blockquote>
      - pageTitle: Binding order
        isActive: true
        body: |-

          # Binding order

          JavaScript checks the type of binding based on the following order:

          - binding using the `new` keyword
          - explicit binding
          - implicit binding
          - default binding, which is the fallback if none of the other cases is matched

      - pageTitle: This in arrow function invocation
        isActive: true
        body: |-

          # `this` in arrow function invocation

          ```javascript
          const objContext = {
            checkThis() {
              console.log(this === objContext);
              const innerFunc = () => console.log(this === objContext);
              innerFunc();
            },
          };

          // arrow functions resolve this lexically by taking on the context of their parent function
          objContext.checkThis();
          // output:
          // true
          // true
          ```

      - pageTitle: this in arrow function invocation - strict mode
        isActive: true
        body: |-

          # `this` in arrow function invocation

          <h4>Strict mode enabled</h4></br>

          ```javascript
          // when an arrow function is defined in the global scope, the context is always the global object, even when strict mode is enabled.
          const checkThis = () => console.log(this === window);

          checkThis(); // output: true

          const checkThisStrict = () => {
            "use strict";
            console.log(this === window);
          };

          checkThisStrict(); // output: true
          ```

          <blockquote className="danger">
            An arrow function is bound with this once and forever. It cannot be modified, even by using the call, apply or bind methods.
          </blockquote>

      - pageTitle: Execution context exercise
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://execution-context)
  - sectionTitle: Event Loop
    isActive: true
    pages:
      - pageTitle: Asynchronicity in JavaScript
        isActive: true
        body: |-

          # Asynchronicity in JavaScript

          JavaScript is a single-threaded programming language which means it can do one thing at a time.</br>
          In almost all programming languages, there is a built-in data structure that manages the functions that have been invoked, the call stack.

      - pageTitle: What is the call stack
        isActive: true
        body: |-

          # What is the call stack

          `Call stack` is a mechanism that keeps track of the function calls in the code. Any time a function is invoked it is placed, otherwise **pushed**, on the top of the call stack.</br>

          It follows the LIFO principle (Last In, First Out), which means it always processes the call that is on top of the stack first.

          When the execution of a function reaches the `return` keyword or when the function goes out of its scope, the JavaScript interpreter will remove the top item from the stack or in other words the item will be popped out of the stack.</br>

          </br>

          ![gif](/img/javascript/event-loop-1.gif)

      - pageTitle: Maximum call stack size exceeded error
        isActive: true
        body: |-

          # Can one blow the stack?

          There is also a term for blowing the stack. It can happen for example when we have a recursive function without a base case, that means the condition where the recursion ends.

          ```javascript
          const greet = () => greet();

          greet();
          // output:
          // Uncaught RangeError: Maximum call stack size exceeded
          // at greet (<anonymous>:1:21)
          // at greet (<anonymous>:1:21)
          ```

          If you see this kind of error message on your screen, it means that one of your functions has been called too many times. The maximum call stack size ranges from 10 to
          50 thousand calls, so if you exceed that, it is most likely that you have an infinite loop in your code, as it is shown in the next slide.

      - pageTitle: This is the maximum call stack size exceeded error
        isActive: true
        body: |-

          # This is a blown call stack

          ![gif](/img/javascript/event-loop-2.gif)

      - pageTitle: Blocking actions
        isActive: true
        body: |-

          # Blocking actions

          What happens when an action is slow? This can happen due to network requests that take quite some time to complete or huge loops for example, as it is shown below.

          ```javascript
          const slowRequest = function () {
            for (let i = 0; i <= 2500; i++) {
              console.log("Simulate a slow request");
            }
          };

          console.log("Start"); // output: Start
          slowRequest(); // thread will stuck here for a couple of seconds
          console.log("End"); // output: End
          ```
          </br>

          ![gif](/img/javascript/event-loop-3.gif)

          This is a **blocking** behavior and it is a problem because for web applications, this will result in a blocked browser until the long tasks to be completed.
          Therefore if the call stack is not empty - thus it has actions to perform - like the synchronous slowRequest, the browser can perform no further actions.
      - pageTitle: Handling of blocking actions - I
        isActive: true
        body: |-

          # Handling of blocking actions

          <h4>Using the built-in setTimeout function</h4></br>

          ```javascript
          function slowRequest() {
            console.log("I am the slow request");
          }

          console.log("Start!");

          // the slowRequest is passed as argument to the setTimeout function
          setTimeout(slowRequest, 2000);

          console.log("End!");
          ```

          The `slowRequest` will be executed after 2 seconds, as it is shown in the next slide.

      - pageTitle: using setTimeout
        isActive: true
        body: |-

          # Handling of blocking actions

          <h4>Using the setTimetout function</h4></br>

          ![gif](/img/javascript/event-loop-4.gif)

      - pageTitle: Asynchronous behavior
        isActive: true
        body: |-

          # Asynchronous behavior

          Asynchronous behavior is not part of the JavaScript language itself. Rather, it is built on top of the core JavaScript language and it is possible due to exploiting the browser's capabilities and its APIs.

      - pageTitle: The browser
        isActive: true
        body: |-

          # The browser

          Let's explain what the entities of the following image stand for.
          </br>
          ![Browser](/img/javascript/event-loop-5.png)

          - call stack is space that keeps track of the function calls of some code</br>
          - memory heap is a different space for storing data where JavaScript stores objects and functions</br>
          - web APIs are the APIs made available to front-end developers by the browser like DOM, AJAX and setTimeout and with which we can communicate using JavaScript</br>
      - pageTitle: Handling of blocking actions explanation - II
        isActive: true
        body: |-

          # Handling of blocking actions

          <h4>Explanation</h4></br>

          The gif below helps us understand how the event loop mechanism works along with the web APIs, in order to accomplish the asynchrony behavior in JavaScript.

          </br>

          ![Alt Text](/img/javascript/event-loop-6.gif)

          <blockquote className="hint">
              All the web APIs - async-await, DOM event listeners, fetch and others - function the same way, the one just described.
          </blockquote>
      - pageTitle: Event loop example extended
        isActive: true
        body: |-

          # Event loop

          <h4>Extended example</h4></br>

          Let's extend a bit the previous example by adding more asynchronous logic.</br>

          ```javascript
          console.log('Start!);

          setTimeout(function callback1() {
              console.log('I am the callback 1');
          }, 4000);

          setTimeout(function callback2() {
              console.log('I am the callback 2');
          }, 3500);

          setTimeout(function callback3() {
              console.log('I am the callback 3');
          }, 3000);

          console.log('End!');
          ```

      - pageTitle: extended-example-explanation
        isActive: true
        body: |-

          # Event loop

          <h4>Extended example</h4></br>

          ![gif](/img/javascript/event-loop-7.gif)

      - pageTitle: setTimeout explained
        isActive: true
        body: |-

          # `setTimeout` function

          <h4>Fun fact</h4></br>

          The `setTimeout` function is **not** a guaranteed time to execution, it ensures that a minimum amount of time will pass before its argument callback function will be executed.

          </br>

          ![gif](/img/javascript/event-loop-8.gif)

          <blockquote className="hint">
              A non-empty call stack may be the reason for the extra delay.
          </blockquote>
      - pageTitle: Micro-tasks vs micro-tasks
        isActive: true
        body: |-

          # Micro-tasks vs micro-tasks

          Inside the callback queue, the tasks are classified into two categories, micro-tasks (promises, async / await etc) and macro-tasks (setTimeout, setInterval etc).</br>
          Let's just keep in mind that the micro-task queue has higher priority over the macro-task queue.</br>

          ```javascript
          console.log("Start");

          setTimeout(() => {
            console.log("setTimeout");
          });

          Promise.resolve("promise").then((response) => console.log(response));

          console.log("End");

          // output:
          // Start
          // End
          // promise
          // setTimeout
          ```

      - pageTitle: Useful links
        isActive: true
        body: |-

          # Useful links

          Philip Roberts made an [app](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) for visualizing the event loop which is the app we made all the gifs with.
          By clicking the link you can experiment with the event loop and some web APIs.

          For a really nice visualization and in-depth explanation, you could also check out [here](https://towardsdev.com/event-loop-in-javascript-672c07618dc9).

          If you want to see more about the event loop this [link](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=1373s&ab_channel=JSConf) is highly suggested.

  - sectionTitle: Promises
    isActive: true
    pages:
      - pageTitle: What is a promise
        isActive: true
        body: |-

          # What is a promise

          A promise is an object that represents the eventual outcome of an asynchronous operation and its resulting value. In simple words, it is a placeholder for a value that is going to be available sometime later.<br>
      - pageTitle: States of a promise
        isActive: true
        body: |-

          # States of a promise

          A promise can be in one of the following states:

          - **pending**: the initial state</br>
            The operation has not completed yet, it is neither fulfilled nor rejected, and the result is undefined.

          - **fulfilled**: the operation has completed successfully and the promise has a resolved value

          - **rejected**: the operation has failed for a reason and the result is an error

          A pending promise can either be fulfilled or rejected. All promises eventually settle to a single result or error.
      - pageTitle: Promise object creation
        isActive: true
        body: |-

          # Creating a promise object

          ```javascript
          const executorFunction = (resolve, reject) => {
            // async operation logic
            if (asyncOperationIsSuccessful) {
              resolve(value);
            } else {
              reject(error);
            }
          };

          const myPromise = new Promise(executorFunction);
          ```

          - use the new keyword to invoke the Promise constructor

          - a special function, called executor, is passed as an argument into the Promise constructor

          - the executor function is a function that takes up to two callback function parameters, commonly called resolve and reject functions

      - pageTitle: Promise object example
        isActive: true
        body: |-

          # Promise object

          <h4>Example</h4></br>

          <blockquote className="hint">
            To simulate an asynchronous operation in the examples, we use the Web API setTimeout().
          </blockquote>

          ```javascript
          const executorFunction = (resolve, reject) => {
            setTimeout(() => {
              const num = Math.random();
              if (num < 0.5) {
                resolve("I am resolved");
              } else {
                reject("I am rejected");
              }
            }, 1000);
          };

          const myPromise = new Promise(executorFunction);
          ```
      - pageTitle: Consuming a promise
        isActive: true
        body: |-

          # Consuming a promise

          <h4>then method</h4></br>

           When a promise object settles, we can access the result of its completed asynchronous operation using the method then. This method takes up to two callback functions as arguments. We refer to these callbacks as handlers:

          - the first handler is a success handler and describes what needs to happen for the resolved case of the promise

          - the second handler is a failure handler and contains the logic for the rejected case of the promise

          ```javascript
          const executorFunction = (resolve, reject) => {
            // async operation logic
            if (asyncOperationIsSuccessful) {
              resolve(value);
            } else {
              reject(error);
            }
          };

          const myPromise = new Promise(executorFunction);

          myPromise.then(handleSuccess, handleFailure);
          ```
      - pageTitle: Consuming a promise - then example
        isActive: true
        body: |-

          # Consuming a promise

          <h4>then method example</h4></br>

          ```javascript
          const executorFunction = (resolve, reject) => {
            setTimeout(() => {
              const num = Math.random();
              if (num < 0.5) {
                resolve("I am resolved");
              } else {
                reject("I am rejected");
              }
            }, 1000);
          };

          const myPromise = new Promise(executorFunction);

          const handleSuccess = (resolvedValue) => console.log(resolvedValue);

          const handleFailure = (error) => console.log(error);

          myPromise.then(handleSuccess, handleFailure);
          ```
      - pageTitle: Consuming a promise -return value
        isActive: true
        body: |-

          # Consuming a promise

          <h4>then method return value</h4></br>

          If we do not provide a `then` method with the appropriate handlers, for example the failure handler is omitted, `then` will return a promise with the same settled value as the promise to which it was called on.

          ```javascript
          const executorFunction = (resolve, reject) => {
            setTimeout(() => {
              const num = Math.random();
              if (num < 0.5) {
                resolve("I am resolved");
              } else {
                reject("I am rejected");
              }
            }, 1000);
          };

          const myPromise = new Promise(executorFunction);

          const handleSuccess = (resolvedValue) => {
            console.log(resolvedValue);
          };

          // if myPromise resolves, handleSuccess() will be called
          // but if myPromise rejects, the then method will return a new promise with the same error as myPromise
          myPromise.then(handleSuccess);
          ```
      - pageTitle: Consuming a promise - catch
        isActive: true
        body: |-

          # Consuming a promise

          <h4>catch method</h4></br>

          Instead of passing both handlers to the same then method, we can use a different method called catch, in order to handle the rejection reason.

          <blockquote className="danger">
              The then and catch methods always return a new promise object.
          </blockquote>

          ```javascript
          const executorFunction = (resolve, reject) => {
            setTimeout(() => {
              const num = Math.random();
              if (num < 0.5) {
                resolve("I am resolved");
              } else {
                reject("I am rejected");
              }
            }, 1000);
          };

          const myPromise = new Promise(executorFunction);
          const handleSuccess = (resolvedValue) => console.log(resolvedValue);
          const handleFailure = (error) => console.log(error);

          // if myPromise resolves, only the success handler of the then method will be invoked with the resolved value 'I am resolved'
          // if myPromise rejects, the then method will return a new promise with the same rejection reason as myPromise ('I am rejected') and only the failure handler of the catch method will be invoked with that error
          myPromise.then(handleSuccess).catch(handleFailure);
          ```
      - pageTitle: Promises chain
        isActive: true
        body: |-

          # Chain of promises

          If we need to handle multiple dependent asynchronous operations or need to execute them in a specific order, we can chain promises together using multiple then methods.

          ```javascript
          const myPromiseFunc = (num) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                if (num < 5) {
                  resolve(num);
                } else {
                  reject("I am rejected");
                }
              }, 1000);
            });

          myPromiseFunc(2)
            .then((firstResolvedVal) => {
              return firstResolvedVal * 2;
            })
            .then((secondResolvedVal) => {
              console.log(secondResolvedVal); // output: 4
            })
            .catch((error) => {
              console.log(error);
            });
          ```
          <blockquote className="danger">
              In a chain of promises, if any promise in the chain rejects, then the resolving flow jumps to the first catch method, bypassing all the then methods in between.
          </blockquote>

      - pageTitle: Promises quiz
        isActive: true
        body: |-

          # Time for practice!

          [Click here](codesandbox-link://promises)
      - pageTitle: Consuming a promise - finally
        isActive: true
        body: |-

          # Consuming a promise

          <h4>finally method</h4></br>

          ```javascript{1-20}
          const myPromiseFunc = (num) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                if (num < 5) resolve(num);
                else reject("I am rejected");
              }, 1000);
            });

          myPromiseFunc(2)
            .then((firstResolvedVal) => firstResolvedVal * 2)
            .then((secondResolvedVal) => {
              console.log(secondResolvedVal);
            })
            .catch((error) => {
              console.log(error);
            })
            // the finally function is executed when a promise is settled, regardless of whether it is fulfilled or rejected
            // it is not intended to process the result of a promise, so, if it is not used at the end of the chain, it passes through results and errors to the next handler
            // the callback parameter of the finally function accepts neither arguments nor the result of the promise chain and therefore it does not change the resolved value of the promise
            .finally(() => console.log("I cleaned up"));

          /* output:
            4
            I cleaned up
          */
          ```
      - pageTitle: async...await
        isActive: true
        body: |-

          # async...await

          The async...await is an ES8 feature and stands as syntactic sugar for the use of promises.</br>
          It does not introduce new functionality, but allows us to write more readable asynchronous code that resembles the traditional synchronous.
      - pageTitle: async keyword
        isActive: true
        body: |-

          # async keyword

          The async keyword is used before a function definition to wrap the asynchronous logic.

          ```javascript
          // async function declaration
          async function myFunc() {
            // async operation logic
          }

          // async function expression
          const myFunc = async () => {
            // async operation logic
          };
          ```
      - pageTitle: async keyword example
        isActive: true
        body: |-

          # async keyword

          <h4>Example</h4></br>

          The type of function that follows async returns a promise:

          - if there is nothing returned from the function, a promise is returned with a resolved value of undefined

          - if the function returns a non-promise value, then the returned promise will resolve with that value

          - finally, the function can explicitly return a promise

          This also means that we can use all methods of a promise in an async function, such as then, catch, finally etc.

          ```javascript
          async function myFunc() {
            return "I am a promise";
          }

          myFunc().then((resolvedValue) => console.log(resolvedValue)); // output: I am a promise
          ```
      - pageTitle: await keyword
        isActive: true
        body: |-

          # await keyword

          The await keyword is an operator and can only be used within an async function. It pauses the execution of the async function until a given promise is resolved and it returns the resolved value of that promise.

          ```javascript
          async function myAsyncFunc() {
            const resolvedValue = await somePromiseFunc();
          }
          ```
      - pageTitle: await keyword example
        isActive: true
        body: |-

          # await keyword

          <h4>Example</h4></br>

          ```javascript
          const myPromiseFunc = () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve("I am resolved");
              }, 1000);
            });
          };

          async function myAsyncFunc() {
            // without the await keyword, the function execution will not be paused and the console.log() on the following line will be executed before the promise resolves
            const resolvedValue = await myPromiseFunc();
            console.log(resolvedValue);
          }

          myAsyncFunc(); // I am resolved
          ```
      - pageTitle: Await chaining
        isActive: true
        body: |-

          # Await chaining

          We can use as many await statements as we need inside of an async function.

          ```javascript
          const myPromiseFunc = (num) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                if (num < 20) {
                  resolve(num * 2);
                } else {
                  reject("I am rejected");
                }
              }, 1000);
            });

          const myAsyncFunc = async (num) => {
            const firstResolvedVal = await myPromiseFunc(num);
            console.log(firstResolvedVal); // output: 4

            const secondResolvedVal = await myPromiseFunc(firstResolvedVal);
            console.log(secondResolvedVal); // output: 8

            const thirdResolvedVal = await myPromiseFunc(secondResolvedVal);
            console.log(thirdResolvedVal); // output: 16
          };

          myAsyncFunc(2);
          ```
      - pageTitle: Traditional chain
        isActive: true
        body: |-

          # Traditional chaining

          The async...await greatly simplifies handling multiple dependent asynchronous operations.</br>
          This is how the previous code would look like using multiple then methods:

          ```javascript
          myPromiseFunc(2)
            .then((firstResolvedVal) => {
              console.log(firstResolvedVal); // output: 4
              return myPromiseFunc(firstResolvedVal);
            })
            .then((secondResolvedVal) => {
              console.log(secondResolvedVal); // output: 8
              return myPromiseFunc(secondResolvedVal);
            })
            .then((thirdResolvedVal) => {
              console.log(thirdResolvedVal); // output: 16
            });
          ```
      - pageTitle: async..await benefits
        isActive: true
        body: |-

          # async...await

          Async...await syntax:

          - resembles synchronous code which is easier to read and understand
          - helps us maintain and debug our code
          - makes it easy to store and refer to resolved values from promises further back in our chain

      - pageTitle: try...catch block
        isActive: true
        body: |-

          # try...catch block

          If a promise rejects while being awaited, we can easily catch the error within an async function, by wrapping the await promise into a try...catch block.

          ```javascript
          const myAsyncFunc = async (num) => {
            try {
              const firstResolvedVal = await myPromiseFunc(num);
              console.log(firstResolvedVal);

              const secondResolvedVal = await myPromiseFunc(firstResolvedVal);
              console.log(secondResolvedVal);

              const thirdResolvedVal = await myPromiseFunc(secondResolvedVal);
              console.log(thirdResolvedVal);
            } catch (error) {
              // catches any errors in the try block
              console.log(error);
            }
          };

          myAsyncFunc(5);
          // output:
          // 10
          // 20
          // I am rejected
          ```
---
