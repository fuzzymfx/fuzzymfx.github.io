---
title: 'DSA for cbrtl *(under construction)*'
date: "01-05-2024"
description: "A short, concise guide to starting with Data Structures and Algorithms in c++"
draft: false
index: false
tag: "tech"
---

Before starting with this, I wanted to ensure that if at any point you feel that you're not able to undetstand or grasp what is written in this page, that is **totally understandable**. These concepts are better understood when practiced, not theoretically. So, if you're not able to understand something, don't worry, we'll be coding using these in the next few days, and you'll get a hang of it.

This guide has been written keeping in mind that you have a basic understanding of c++ and have written some code in it. If you haven't, I would recommend you to [start with that first](/blog/c++.html). Although the language used is C++, the concepts are the same in any language, so you can follow along with any language you're comfortable with. The syntax might change, but the concepts remain the same.

Data Structures and Algorithms are the building blocks of any program. They help you write efficient code and solve complex problems. They are essentially structures that hold data.


## Time Complexity

Time complexity is a measure of the amount of time an algorithm takes to run as a function of the length of the input. It is used to analyze the efficiency of an algorithm. The time complexity of an algorithm is usually expressed using Big O notation. Big O notation describes the upper bound of the time complexity of an algorithm. It is used to describe the worst-case scenario of an algorithm. Other notations include Big Omega and Big Theta, which describe the lower bound and average case of an algorithm, respectively. 

1. O(1) - Constant time complexity
2. O(log n) - Logarithmic time complexity
3. O(n) - Linear time complexity
4. O(n log n) - Linearithmic time complexity
5. O(n^2) - Quadratic time complexity
6. O(n^3) - Cubic time complexity

Algorithms with lesser time complexity are more efficient than those with higher time complexity. For example, an algorithm with O(1) time complexity is more efficient than an algorithm with O(n) time complexity. We would want our tasks to be completed quickly, like in a sec, rather than waiting for n secs.

## Primitive Data Structures

Primitive data structures allow you to store a single data value. These include:

1. Integers
2. Floats
3. Characters
4. Booleans
5. Pointers


## Non-Primitive Data Structures

Non-primitive data structures allow you to store multiple data types. There are two types of non-primitive data structures:

1. Linear Data Structures
2. Non-Linear Data Structures

### Linear Data Structures

As the name suggest, the linear data structures can store data in a linear dimension. There are two types of linear data structures: 

1. Static
2. Dynamic

Elements are stored in a sequential manner. These include:

1. Arrays - *Static*
2. Vectors - *Dynamic*
3. Linked Lists - *Dynamic*
4. Stacks - *Dynamic*
5. Queues - *Dynamic*

### Non-Linear Data Structures

Elements are stored in a non-sequential manner. These include:

1. Trees
2. Graphs
3. Hash Tables
4. Heaps
5. Tries  
etc.


#### Data Structures in C++

1. **Arrays** - Arrays are a collection of elements of the same data type. They are static in nature, meaning that the size of the array is fixed; you can't change it once declared. The elements are stored in contiguous memory locations. The index of the first element is 0.

	```cpp
	int arr[5] = {1, 2, 3, 4, 5};
	cout<<"The first element is:"<<arr[0]<<endl;
	```

2. **Vectors** - Vectors are similar to arrays, but they are dynamic in nature. You can change the size of the vector once declared. They are implemented using arrays. They are part of the Standard Template Library (STL) in C++.

	```cpp
	#include <vector>
	vector<int> v = {1, 2, 3, 4, 5};
	cout<<"The last element is:"<<v[v.size()-1]<<endl;

	v.push_back(6);
	```

	The benifit of using vectors is that you don't have to worry about the size of the vector, you can keep adding elements to it. Usually, the size is always doubled when the vector is full.

3. **Linked Lists** - Linked lists are a collection of elements called nodes. Each node contains data and a pointer to the next node. They are dynamic in nature. There are three types of linked lists:

	1. Singly Linked List - Each node contains data and a pointer to the next node. The last node points to NULL. It can be traversed only in one direction.

		Here is an example of a singly linked list:

		```cpp
		struct Node {
			int data;
			Node* next;
		};
		int main() {
			//Creating a linked list
			Node* head = new Node();
			head->data = 1;
			head->next = NULL;
			//Adding elements to the linked list
			for(int i = 2; i<=5; i++) {
				Node* temp = new Node();
				temp->data = i;
				temp->next = NULL;
				Node* temp1 = head;
				while(temp1->next!=NULL) {
					temp1 = temp1->next;
				}
				temp1->next = temp;
			}
		}
		```

	2. Doubly Linked List - Each node contains data, a pointer to the next node, and a pointer to the previous node. It can be traversed in both directions.

		```cpp
		struct Node {
			int data;
			Node* next;
			Node* prev;
		};
		```

	3. Circular Linked List - The last node points to the first node. It can be traversed in both directions.

		```cpp
		struct Node {
			int data;
			Node* next;
		};
		int main(){
			//Creating a circular linked list
			Node* head = new Node();
			head->data = 1;
			head->next = head;
			//Adding elements to the circular linked list
			for(int i = 2; i<=5; i++) {
				Node* temp = new Node();
				temp->data = i;
				temp->next = head;
				Node* temp1 = head;
				while(temp1->next!=head) {
					temp1 = temp1->next;
				}
				temp1->next = temp;
			}
		}
		```

	Linked Lists allow you to insert and delete elements in O(1) time complexity, whereas arrays or vectors take O(n) time complexity. The disadvantage of linked lists is that you can't access elements randomly, you have to traverse the list to access an element.

	Arrays/ Vectors: O(1) to access an element, O(n) to insert/delete an element
	Linked Lists: O(n) to access an element, O(1) to insert/delete an element

	In almost all cases, **vectors** are preferred over arrays and linked lists because of their dynamic nature and the ability to access elements randomly.

4. **Stacks** - Stacks are a collection of elements that follow the Last In First Out (LIFO) principle. They have two main operations: push and pop. The push operation adds an element to the top of the stack, and the pop operation removes the top element from the stack. (A stack of PS5 CDs, a stack of papers, etc.)

	```cpp
	#include <stack>
	stack<int> s;
	s.push(1);
	s.push(2);
	s.push(3);
	cout<<"The top element is:"<<s.top()<<endl;
	s.pop();
	cout<<"The top element is:"<<s.top()<<endl;
	```
	You can also use vectors/ arrays/ linked lists to implement stacks manually. Try implementing a stack using vectors.
	Stacks are used in applications where the order of elements is important, such as in compilers, browsers, etc. In compilers, the stack is used to store the operators and operands of an expression, and the order in which they are popped determines the order of evaluation. [*Refer*](https://www.geeksforgeeks.org/expression-evaluation/) this link for more information. A function call is also implemented using a stack. When a function is called, the address of the next instruction is pushed onto the stack, and when the function returns, the address is popped from the stack. All of this becomes clear when you start coding.

	The std::stack in C++ is implemented using a deque (double-ended queue). A deque is a type of queue where elements can be added or removed from both the front and the rear. It is implemented using arrays. The std::stack is a wrapper around the std::deque.

	Stacks - O(1) to access the top element, O(1) to insert an element, O(1) to delete an element

5. **Queues** - Queues are a collection of elements that follow the First In First Out (FIFO) principle. They have two main operations: enqueue and dequeue. The enqueue operation adds an element to the rear of the queue, and the dequeue operation removes the front element from the queue. (A queue of people waiting at Comicon, or a book signing by JKR, a queue of cars at a toll booth, etc.)

	```cpp
	#include <queue>
	queue<int> q;
	q.push(1);
	q.push(2);
	q.push(3);
	cout<<"The front element is:"<<q.front()<<endl;
	q.pop();
	cout<<"The front element is:"<<q.front()<<endl;
	```

	Try implementing a queue using vectors/ arrays/ linked lists.
	Queues are also used when the order of elements is important, such as in printers, operating systems, etc. In printers, the queue is used tostore the print jobs, and the order in which they are dequeued determines the order of printing. In operating systems, the queue is used tostore the processes, and the order in which they are dequeued determines the order of execution.

	The std::queue in C++ is implemented using a deque (double-ended queue). A deque is a type of queue where elements can be added or removed from both the front and the rear. It is implemented using arrays. The std::queue is a wrapper around the std::deque.

	Queues - O(1) to access the front element, O(1) to insert an element, O(n) to delete an element

	1. **Priority Queues** - Priority queues are a type of queue where each element has a priority associated with it. The element with thehighest priority is dequeued first. They are implemented using heaps. Heaps are a type of binary tree where the parent node is greaterthan the child nodes. They are used in Dijkstra's algorithm, Prim's algorithm, etc.

		```cpp
		#include <queue>
		priority_queue<int> pq;
		pq.push(1);
		pq.push(2);
		pq.push(3);
		cout<<"The top element is:"<<pq.top()<<endl;
		pq.pop();
		cout<<"The top element is:"<<pq.top()<<endl;
		```

	2. **Deques** - Deques(Double ended queues) are a type of queue where elements can be added or removed from both the front and the rear. They are implemented using arrays. They are used in applications where elements need to be added or removed from both ends, such as in a sliding window, etc.

		```cpp
		#include <deque>
		deque<int> dq;
		dq.push_front(1);
		dq.push_back(2);
		dq.push_front(3);
		cout<<"The front element is:"<<dq.front()<<endl;
		cout<<"The rear element is:"<<dq.back()<<endl;
		```
	3. **Circular Queues** - Circular queues are a type of queue where the rear of the queue is connected to the front of the queue. They are implemented using arrays. They are used in applications where the queue needs to be circular, such as in a round-robin scheduling algorithm, etc.

		```cpp
		#include <queue>
		queue<int> q;
		q.push(1);
		q.push(2);
		q.push(3);
		cout<<"The front element is:"<<q.front()<<endl;
		q.pop();
		cout<<"The front element is:"<<q.front()<<endl;
		```
6. Trees: *To be continued...*


#### Next?

Again, I would like to make this known that it is totaly fine if you get stuck somewhere, do not understand *classes*, *objects*, *pointers*, *references*, etc. You'll start getting a hang of it as you start writing code.
