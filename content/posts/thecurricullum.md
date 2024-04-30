---
title: 'Becoming a Software Engineer: A coursework'
date: "01-05-2024"
description: "This is how I would go about teaching software engineering, if I were to teach it."
draft: true
tag: "tech"
---

I recently stumbled upon an interesting offer to start something new; build a platform that aims at sharing my experience of getting into software engineering. While fundamentally I want to impart knowledge for free, I also do not have enough time to sit with everybody and teach them. Hence, this idea of crafting a self-sustaining curriculum capable of imparting software engineering skills to anyone keen on learning seemed apt.

This became the guiding principle behind *backendhire*, the platform I was asked to build.

This curriculum is designed to be self-sustaining; a collection of resources freely available on the internet. The idea is to curate these resources and present them in a structured manner. The entire point of this article is to share what exactly I did that landed me in the position that I am in now. Comprehend this however you will; a guide to getting a job, or becoming a better engineer in general. **This is how I became a software engineer.**

One more thing to note is that this is designed in the *ultimate*, *hard-tier* difficulty. The platform, on the other hand, has variable difficulty levels, and you could choose the one that suits you the best. 

## The Curriculum

1. **The Basics**: Familiarize yourself with the basics; programming languages, data structures, and algorithms, design patterns, etc. Not knowing how to drive, but buying a GT3 RS is a waste of money. Learning to drive in a Hyundai would be a good start. The job market is cruel, it makes you emphasize Nuxt, React, Node, Pandas, Django, Kafka, and what-not, but it wouldn't help until you know how to parse a column in *Pandas dataframe* as *Datetime* and process it, or how to push async messages in a queue and handle them in a worker thread. We would start off with an online platform like [LeetCode](https://leetcode.com)/ HackerRank[https://hackerrank.com], and then move on to building stuff.

	You can become a god-tier Python or TS dev, writing clean, efficient, and maintainable code, writing lambda functions, higher-order functions and closures while working with tech like databases, web development/ machine learning. With the basics cleared, it wouldn't be difficult to comprehend these. They start off scary but are pretty simple once you get the hang of it.

	This step also requires you to start building stuff parallelly. React may look like it's just `npx create-react-app`, `npm start`, and a bunch of useless `useStates`, `useEffects`, and `props`, but it's not. It's about building a component library, a design system, with a bunch of hooks, a bunch of context providers, and a full-fledged application that can handle a million users.

2. **The Advanced**: After you've built your first to-do app, you feel contempt and proud, wiping the sweat off your forehead. You'd want to post on LinkedIn, share your code, manage it on GitHub, and show it off to your friends. This is where it gets more interesting.

	This is where you start to think about the architecture of your application, and how to make it scalable, fault-tolerant, and secure. You'd want to monitor your application, and make sure it's running smoothly. You would not want anybody accessing your data, securing them, and allowing only a selected few to access it. The differences between a monolith and a microservice architecture help.

The difference between the platform I am building, and this curriculum is that I would be writing code, building this right with you, and you'd be able to live the entire process from two perspectives and gain much more insight from start to finish. While following this curriculum, you'd be doing it yourself. I'd still be available to help you out in any way I could.

- [Languages](#languages)
  - [C++](#c)
- [Problem Solving/ Data Structures](#problem-solving-data-structures)
- [Building](#building)
	- [Clean, efficient code](#clean-code)
	- [Libraries & Frameworks](#libraries-frameworks)
	- [Design & Architecture](#design-architecture)
- [Databases](#databases)
- [Deploying](#deploying)
- [Scaling](#scaling)
- [Networking & Security](#networking)
- [Monitoring](#monitoring)
- [Next?](#next)

### Clean, efficient code

We'd start by learning to write code. This involves you to learn the basics of a programming language, and start solving a few problems to get the hang of it.

I'd be choosing *C++* here. Despite being categorized as a high-level language, it retains a lower-level essence when compared to the likes of Python or JavaScript/TypeScript. With its manual memory management and requirement to construct everything from scratch, C++ fosters a deeper understanding of coding principles. You become less reliant on pre-existing libraries and functions, thereby honing your coding prowess.

This doesn't mean that choosing anything else makes you lethargic. You could still choose what you want and proceed to write everything yourself, and not use built-in functions or libraries, it wouldn't matter. I choose C++ because it is the first programming language that I have learnt.

#### Languages

**Pick up a language, and stick to it**. Python, JavaScript, Java *(well, not Java, that is shit. "But, but, but....." shhhhhhh.)*, C++, Go, Rust, etc. are all good choices. In the long run, it doesn't matter which language you pick. Real-world applications require you to know the basics and learn the rest on the go.

We start by getting into the [documentation](https://devdocs.io/cpp/), learning the basics, and then moving on to practising. There are a ton of tutorials on YouTube that help you learn C++. I am sharing a few here that I followed while I was learning to code:

- [C++ Tutorial for Beginners - Learn C++ in 1 Hour](https://youtu.be/ZzaPdXTrSb8?si=hD1z12yg6trfLPrs)
- [C++ Crash Course For Beginners](https://www.youtube.com/watch?v=1v_4dL8l8pQ&t=4s&pp=ygUQYysrIGNyYXNoIGNvdXJzZQ%3D%3D)
- [C++ Tutorial for Beginners - Full Course](https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=528s&pp=ygUQYysrIGNyYXNoIGNvdXJzZQ%3D%3D)  
[*More...*](https://www.youtube.com/results?search_query=c%2B%2B+full+course)  
[*...*](https://www.youtube.com/results?search_query=c%2B%2B+crash+course)  

Here is one that teaches you Data Structures using C++:
- [C++ Full Course | C++ Tutorial | Data Structures & Algorithms](https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ)

We'd not be following anything mentioned above. The problem with visual-based learning is that it is **inherently slow**; I am trying to make this process faster and more efficient by sharing everything you need to know to get started. Here's a comprehensive guide on `C++`, and `stdlib`:

##### C++

You can use any IDE (playgrounds to experiment with your code in your machine), or any online compiler (online playground) you're comfortable with. I'd recommend using [Repl.it](https://repl.it) for the time being. It's free, and you can run your code without any hassle.

```cpp
#include <iostream>

int main() {
  std::cout << "Hello, World!\n";
}
```

##### Getting started

C++ is a statically typed, compiled, general-purpose, case-sensitive, free-form programming language that supports procedural, object-oriented, and generic programming. C++ is regarded as a middle-level language, as it comprises a combination of both high-level and low-level language features.

- Statically typed: data types are checked at compile time
- Compiled: code is translated into machine code before execution
- *Interpreted: code is translated into machine code during execution. Eg: Python, JavaScript, Ruby, etc.*
- General-purpose: can be used to develop a wide range of applications, such as operating systems, games, and software applications
- Case-sensitive: variable names are case-sensitive, e.g. x and X are different variables
- Free-form: does not require the use of specific indentation or spacing, e.g. Python requires indentation
- Object-oriented: supports object-oriented programming (OOP) features, such as classes and objects, but also supports procedural programming
- Generic programming: supports generic programming features, such as templates
- *Functional programming: supports functional programming features, such as lambda expressions, but is not a functional programming language. Eg: Haskell, Lisp, etc.*

All of this would start making more sense as we move on. Like Inception.

##### Syntax

The syntax of C++ is this set of magical rules that tells the compiler what to do. Computers understand only 0's and 1's, and the syntax is the set of rules that tells the compiler how to convert the code you write into 0's and 1's. 

Here's an example:

```cpp
#include <iostream> // Preprocessor directive: This is a header file that contains the definition for the input/output stream objects
#include <string> // There can be multiple header files in a program
// Comments: Comments are used to explain the code. They are ignored by the compiler

// This is a single-line comment

/*
This is a multi-line comment
*/

int main() { // The main function that runs when the program is executed
/* In C++, the main() function serves as the entry point, and it's always called when the program starts executing.
The int before the main() function indicates that the function returns an integer value. */
	std::cout << "Hello, World!\n"; // This is a statement
	return 0; // This is also a statement
}

```

Having a defined boundary of rules makes it possible for the compiler to have a clear understanding of what you're trying to do. This is why we cannot write code in plain English and expect the compiler to understand it. C++ requires you to end the statement with a semicolon `;`, this tells the compiler that the statement has ended.


##### Variables

Variables are used to store data. In C++, you need to declare a variable before you can use it. Here's an example:

```cpp
	int x = 5; // Declaring a variable named x and assigning it the value 5
	// x is an integer variable of size 4 bytes
```

##### Data Types

Each data in C++ has a type which determines the size and layout of the data stored in memory, the range of values that can be stored, and the set of operations that can be applied to the data. The basic data types in C++ are:

- `int`: Integer (whole number) e.g. 5, 10, 15 etc.: 4 bytes
- `char`: Character e.g. 'a', 'b', 'c' etc.: 1 byte
- `float`: Floating point e.g. 1.2, 3.4, 5.6 etc.: 4 bytes
- `double`: Double precision floating point e.g. 1.234, 5.678 etc.: 8 bytes
- `bool`: Boolean e.g. true, false: 1 byte
- `void`: Valueless: 1 byte


These are called primitive data types. The non-primitive data types in C++ are:

- Arrays: A collection of elements of the same data type
- Strings: A collection of characters
- Pointers: A variable that stores the memory address of another variable
- References: An alias for a variable
- Structures: A user-defined data type that can store multiple data types
- Classes: A user-defined data type that can store data and functions
- Enumerations: A user-defined data type that consists of a set of named integer constants


##### Constants

Constants are like variables, except that their values cannot be changed after they are defined. Constants can be used to make your code more readable and maintainable. In C++, you can define a constant using the `const` keyword. Here's an example:

```cpp
const int x = 5; // Declaring a constant named x and assigning it the value 5
```

##### Operators

Operators are used to perform operations on variables and values. C++ has the following types of operators:

- Arithmetic operators: +, -, *, /, %
- Assignment operators: =, +=, -=, *=, /=, %=
- Comparison operators: ==, !=, >, <, >=, <=
- Logical operators: &&, ||, !
- Bitwise operators: &, |, ^, ~, <<, >>

##### Control Structures

Control structures are used to control the flow of a program. C++ has the following control structures:

- `if` statement: Used to execute a block of code if a condition is true
- `else` statement: Used to execute a block of code if the same condition is false
- `else if` statement: Used to specify a new condition if the first condition is false
- `switch` statement: Used to select one of many code blocks to be executed
- `for` loop: Used to execute a block of code a specified number of times
- `while` loop: Used to execute a block of code as long as a condition is true
- `do...while` loop: Used to execute a block of code once, and then repeat the loop as long as a condition is true (it's like a while loop, but the condition is checked after the block of code is executed, so the block of code is always executed at least once) (not used much)
- `break` statement: Used to break out of a loop
- `continue` statement: Used to skip the current iteration of a loop
- `goto` statement: Used to jump to a specific label
- `return` statement: Used to return a value from a function
- `try`, `catch`, `throw`: Used to handle exceptions
- `using namespace` statement: Used to include a namespace in the program

##### Functions

Functions are used to perform a specific task. You can define a function to perform a task and then call that function whenever you need to perform the task. Here's an example:

```cpp
void myFunction() { // Defining a function named myFunction
	std::cout << "Hello, World!\n"; // This is a statement
}

int main() {
	myFunction(); // Calling the function named myFunction
	return 0;
}
```

##### Memory Management

When the program executes, it requires memory to store data and execute code. The memory is divided into two parts: the **stack** and the **heap**. The stack is used to store variables that are declared inside functions, and the heap is used to store variables that are declared using `new`.

The `stack` is a region of memory that is used to store variables that are declared inside functions. The stack is a LIFO (Last In First Out) data structure. Imagine a stack of PS5 CDs. The last CD that was put on the stack is the first one to be removed. The `heap` is a region of memory that is used to store variables that are declared using `new`. The heap is like a glob of memory that can be used to store variables that are not declared inside functions.

When a function is called, a block of memory is allocated on the stack for the function's variables. When the function returns, the block of memory is deallocated by the compiler. This is done automatically by the compiler, and you don't have to worry about it. 

Unlike Python and JavaScript, C++ requires you to manually manage memory that is allocated on the heap. This is done using `new` and `delete` operators. The `new` operator is used to allocate memory, and the `delete` operator is used to deallocate memory. 

We are not going to be using the `new` and `delete` operators in our code. Mostly because it is unnecessary. For the code we write, this would not be coming up much. While we move on and build applications, we'd be using libraries that handle memory management for us. There might be instances where we'd have to manually manage memory, but that would be rare.

Also, we'd not be extensively using C++ for building applications. We'd be using Python, JavaScript, or TypeScript. C++ is just a way to get the hang of programming, to understand the basics, and to write clean, efficient code.


##### Object Oriented Programming

Object-oriented programming (OOP) is a programming paradigm that uses "objects" to design applications and computer programs. It is based on the concept of "objects," which can contain data in the form of fields (often known as attributes or properties) and code in the form of procedures (often known as methods).

In C++, classes are used to define objects. A class is a user-defined data type that contains data members (variables) and member functions (methods). Here's an example:

```cpp
class Animal { // Defining a class named MyClass
public: // Access specifier
	std::string name; // Data member (variable)
	void bark() { // Member function (method)
		std::cout << "Woof!\n"; // This is a statement
	}
};

int main() {
	Animal myDog; // Creating an object of the class MyClass
	myDog.name = "Buddy"; // Accessing the data member name of the object myDog
	myDog.bark(); // Calling the member function bark() on the object myDog
	return 0;
}
```

This might be confusing now, but it'd make sense when we start writing code.

##### Standard Library

The C++ Standard Library is a collection of classes and functions that are part of the C++ ISO Standard. The Standard Library is divided into two parts: the Standard Library and the Standard Template Library (STL). The Standard Library contains classes and functions that are used to perform common tasks, such as input/output, string manipulation, and memory management. The STL contains classes and functions that are used to perform more complex tasks, such as sorting, searching, and using data structures.

We'll come across this while writing code. We'd be using the `iostream` library to print stuff to the console, and the `string` library to work with strings. We'd also be using the `vector` library to work with arrays, and the `map` library to work with key-value pairs.

While it's true that languages like Python and JavaScript are often preferred for certain types of applications like web development and data science, C++ remains widely used in many domains, including systems programming, game development, and high-performance computing. Learning C++ can open up a wide range of opportunities for you as a software engineer.

#### Problem Solving/ Data Structures

To get the hang of C++, let's start with HackerRank or Leetcode Each platform has multiple levels, and each level is associated with a difficulty jump.

Once you are `5 stared` at HackerRank or have solved 40-50+ easy problems on LeetCode, you'd be good to move on.

We should be good to move on to **problem-solving and critical thinking**, and there are multiple ways to develop this. You could go ahead and follow the [industry standard](https://leetcode.com), or do [what I did](https://github.com/fuzzymx).

We'd be doing a mix of both. We'd start off with LeetCode, and then parallelly move on to building stuff.

##### LeetCode

Some of the most popular sought-after LeetCode problems are:

- [This 200 list of problems I found somewhere on the internet](https://github.com/fuzzymfx/LC-200/blob/main/Leetcode%20Questions%20-%20200.xlsx)
- [SDE sheet by Striver](https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/)
- [450 questions by Love Babbar](https://github.com/fuzzymfx/DSA-450/blob/main/Final-450.pdf)

There's no particular order in which you should solve these problems. You could start with the easy ones, and then move on to the hard ones. The idea is to get the hang of it, and then move on to building stuff. With our curriculum, we'd be following a curated mix of all of these; we'd be solving some problems from all of these lists. The number depends on the target you set. We could cover 250+ problems, or 100, or 50. It's up to you. There's no single way to do this.

I haven't completed all, this also essentially helps me as well. I could try solving the unsolved at my end in real-time with you. Here are my repos for the same:

- [LC200](https://github.com/fuzzymfx/LC-200/)
- [DSA450](https://github.com/fuzzymfx/DSA-450/)
- [Striver's SDE Sheet](https://github.com/fuzzymfx/SDE-sheet)

Parallelly, we'd be doing what I initially did to get into the industry. Build.

### Building

We'd be looking at building entirely new applications from scratch, deploying them to a server, making them accessible through the internet, or maybe using a serverless architecture. We can get a domain, and host it on a server, or use a cloud provider like AWS, GCP, or Azure, if you want.

I have curated a list of 9-12 projects that we could build together. The list keeps on changing, the same as with the DSA list. All of these can be found on the internet. I'd be explaining one here, and we could do the rest together.