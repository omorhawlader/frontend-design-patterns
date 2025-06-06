# 🔶 What is the __Module Pattern?__

The __Module Pattern__ is a way to __organize your code__ into __separate parts (modules)__. Each part has its own job and doesn’t interfere with other parts. It helps in:

- 📦 __Organizing code neatly__

- 🛡️ __Protecting variables/functions__ from outside access

- ❌ __Avoiding name conflicts__

# 🔹 Why use __Module Pattern?__

Imagine a **big house** (your app) with many rooms (features). You don’t want **everyone entering every room**. You want __private things hidden and only expose what is needed__. This is what modules do in code.

## ✅ Benefits:
- Keeps code **clean**

- Makes maintenance __easier__

- Avoids global variables

- Helps you write **scalable** and __reusable__ code

# 🔹 Types of __Module Patterns__

1. 🔁 __IIFE__ (Immediately Invoked Function Expression)
2. 📦 __ES6 Modules__ (ECMAScript Modules)
3. 👁️‍🗨️ __Revealing Module Pattern__

# ✅ 1. IIFE (Immediately Invoked Function Expression)

## 🔸 What it is:

A function that runs **immediately after it is defined.**

## 🔸 When to use:

In __older JavaScript (before ES6).__

When you want to __hide variables and avoid polluting the global scope.__

### What Does "Polluting the Global Scope" Mean?

- When you declare **variables/functions in the global scope**, they become **properties of the window object** (in browsers).

- This can lead to:

  - **Naming collisions** (if two scripts use the same variable name)

  - **Unintended modifications** (any script can change your variables)

  - **Memory leaks** (variables stay in memory unnecessarily)

## 🔸 How to use:

```js
    const  Counter = (function (){
        const let count = 0; //private

        return {
            getCount(){
                return count;
            },
            increment(){
                count++;
                console.log(count);
            },
            decrement(){
                if(count > 0){
                    count--;
                    console.log(count);
                }else{
                    count = 0;
                    console.log(count,"count must >= 0");
                }
            },
            reset(){
                count = 0;
                console.log("::Reset to", count);
            }
        }
    })();

```

# 🔸 __Real-World Example:__

Imagine a **step counter app**. You don’t want the user to directly **change count**. You **expose** only the actions:

```js
    Counter.getCount()   // 0
    Counter.increment(); // 1
    Counter.increment(); // 2
    Counter.decrement(); // 1
    Counter.reset();     // Reset to 0

```

# ✅ 2. ES Modules (Modern JavaScript)
## 🔸 What it is:

A native way to create modules using export and import. Works only in modern browsers or Node.js.

## 🔸 When to use:

- In modern projects using **React, Vue, Node.js**, etc.

- When you want **clean separation of files**

## 🔸 How to use:

`mathUtils.js` (Module File)

```js
    export function add(a, b) {
    return a + b;
    }

    export const PI = 3.14159;
```

`main.js` (Another File)

```js
    import { add, PI } from './mathUtils.js';
    console.log(add(3, 4)); // 7
    console.log(PI);        // 3.14159
```
# **🔸 Real-World Example:**

- In an **eCommerce app**, you might have:

    - **cart.js**: handles shopping cart

    - **auth.js**: handles login/logout

    - **payment.js**: handles payment processing

Each file is its **own module, cleanly separated**.

## ✅ 3. **Revealing Module Pattern**

# 🔸 What it is:

A version of IIFE that returns only the parts you want to make public (revealing them).

# 🔸 When to use:

- To clearly show what is public and private

- When you want better code readability

# 🔸 How to use:

```js
    const UserModule = (function(){
        let username = 'guest' //private

        function login(name){
           username = name;
           console.log(`Logged in as ${username}.`);
        }
        function logout(){
            username = 'guest';
            console.log(`Logged out`)
        }

        // only expose login and logout
        return {
            login,
            logout
        }

    })();

```
# 🔸 Real-World Example:

In a website *login system*, you want to **hide how you store the username** but allow the user to **login/logout**.

```js
    UserModule.login("Omar");   // Logged in as Omar
    UserModule.logout();        // Logged  out
```

# IIFE vs Module Comparison

## Key Differences

| Feature       | IIFE                      | Module                    |
|--------------|---------------------------|---------------------------|
| **Execution**  | Immediately when parsed   | Deferred by default       |
| **Scope**      | Creates its own scope     | Has module scope          |
| **Order**      | Runs in document order    | Runs after parsing        |
| **Dependencies** | None                     | Waits for imports         |
