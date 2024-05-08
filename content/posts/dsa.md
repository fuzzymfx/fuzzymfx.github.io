---
title: 'DSA for cbrtl'
date: "01-05-2024"
description: "A short, concise guide to starting with Data Structures and Algorithms in c++"
draft: false
index: false
tag: "tech"
---

Before starting with this, I wanted to ensure that if at any point you feel that you're not able to understand or grasp what is written on this page, that is **totally understandable**. These concepts are better understood when practised, not theoretically. So, if you're not able to understand something, don't worry, we'll be coding using these in the next few days, and you'll get a hang of it.

This guide has been written keeping in mind that you have a basic understanding of C++ and have written some code in it. If you haven't, I would recommend you to [start with that first](/blog/c++.html). Although the language used is C++, the concepts are the same in any language, so you can follow along with any language you're comfortable with. The syntax might change, but the concepts remain the same.

Data Structures and Algorithms are the building blocks of any program. They help you write efficient code and solve complex problems. They are essentially structures that hold data.


## Time Complexity

Time complexity is a measure of the amount of time an algorithm takes to run as a function of the length of the input. It is used to analyze the efficiency of an algorithm. The time complexity of an algorithm is usually expressed using Big O notation. Big O notation describes the upper bound of the time complexity of an algorithm. It is used to describe the worst-case scenario of an algorithm. Other notations include Big Omega and Big Theta, which describe the lower bound and average case of an algorithm, respectively. 

1. O(1) - Constant time complexity
2. O(log n) - Logarithmic time complexity
3. O(n) - Linear time complexity
4. O(n log n) - Linearithmic time complexity
5. O(n^2) - Quadratic time complexity
6. O(n^3) - Cubic time complexity

Algorithms with lesser time complexity are more efficient than those with higher time complexity. For example, an algorithm with O(1) time complexity is more efficient than an algorithm with O(n) time complexity. We would want our tasks to be completed quickly, like in a sec, rather than waiting for n seconds.

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

As the name suggests, the linear data structures can store data in a linear dimension. There are two types of linear data structures: 

1. Static
2. Dynamic

Elements are stored sequentially. These include:

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

2. **Vectors** - Vectors are similar to arrays, but they are dynamic. You can change the size of the vector once declared. They are implemented using arrays. They are part of the Standard Template Library (STL) in C++.

	```cpp
	#include <vector>
	vector<int> v = {1, 2, 3, 4, 5};
	cout<<"The last element is:"<<v[v.size()-1]<<endl;

	v.push_back(6);
	```

	The benefit of using vectors is that you don't have to worry about the size of the vector, you can keep adding elements to it. Usually, the size is always doubled when the vector is full.

3. **Linked Lists** - Linked lists are a collection of elements called nodes. Each node contains data and a pointer to the next node. They are dynamic. There are three types of linked lists:

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
	Stacks are used in applications where the order of elements is important, such as in compilers, browsers, etc. In compilers, the stack is used to store the operators and operands of an expression, and the order in which they are popped determines the order of evaluation. [*Refer*](https://www.geeksforgeeks.org/expression-evaluation/) to this link for more information. A function call is also implemented using a stack. When a function is called, the address of the next instruction is pushed onto the stack, and when the function returns, the address is popped from the stack. All of this becomes clear when you start coding.

	The std::stack in C++ is implemented using a deque (double-ended queue). A deque is a type of queue where elements can be added or removed from both the front and the rear. It is implemented using arrays. The std::stack is a wrapper around the std::deque.

	Stacks - O(1) to access the top element, O(1) to insert an element, O(1) to delete an element

5. **Queues** - Queues are a collection of elements that follow the First In First Out (FIFO) principle. They have two main operations: enqueue and dequeue. The enqueue operation adds an element to the rear of the queue, and the dequeue operation removes the front element from the queue. (A queue of people waiting at Comicon, a book signing by JKR, a queue of cars at a toll booth, etc.)

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
	Queues are also used when the order of elements is important, such as in printers, operating systems, etc. In printers, the queue is used to store the print jobs, and the order in which they are dequeued determines the order of printing. In operating systems, the queue is used to store the processes, and the order in which they are dequeued determines the order of execution.

	The std::queue in C++ is implemented using a deque (double-ended queue). A deque is a type of queue where elements can be added or removed from both the front and the rear. It is implemented using arrays. The std::queue is a wrapper around the std::deque.

	Queues - O(1) to access the front element, O(1) to insert an element, O(n) to delete an element

	1. **Priority Queues** - Priority queues are a type of queue where each element has a priority associated with it. The element with the highest priority is dequeued first. They are implemented using heaps. Heaps are a type of binary tree where the parent node is greater than the child nodes. They are used in Dijkstra's algorithm, Prim's algorithm, etc.

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

	2. **Deques** - Deques(Double-ended queues) are a type of queue where elements can be added or removed from both the front and the rear. They are implemented using arrays. They are used in applications where elements need to be added or removed from both ends, such as in a sliding window, etc.

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

6. **Hash Tables** - Hash tables are a type of data structure that stores key-value pairs. They are implemented using hash functions. The key is hashed to generate a unique index, and the value is stored at that index. They are used in applications where fast access to elements is required, such as in databases, compilers, etc.

	1. **Unordered Map** - There is no order maintained in the keys. The keys are hashed to generate a unique index, and the value is stored at that index. The keys are unique.

		```cpp
		#include <unordered_map>
		unordered_map<int, string> um;
		um[1] = "one";
		um[2] = "two";
		um[3] = "three";
		cout<<"The value of key 2 is:"<<um[2]<<endl;
		```

		Hash Tables - O(1) to access an element, O(1) to insert an element, O(1) to delete an element

	2. **Ordered Map** - The keys are ordered based on the key values.

		```cpp
		#include <map>
		map<int, string> m;
		m[1] = "one";
		m[2] = "two";
		m[3] = "three";
		cout<<"The value of key 2 is:"<<m[2]<<endl;
		```

		Ordered Maps - O(log n) to access an element, O(log n) to insert an element, O(log n) to delete an element

	3. Unordered/ Ordered Set: A set is a collection of unique elements. Same as the other, but with unique elements.

7. **Tree** - A tree is a collection of nodes(vertices) connected by edges. The nodes are arranged in a hierarchical order.

	1. **Binary Tree** - A tree where each node has at most two children.

		```cpp
		struct Node {
			int data;
			Node* left;
			Node* right;
		};
		```

	2. **Binary Search Tree** - A type of binary tree where the left child is smaller than the parent node, and the right child is greater than the parent node. The binary search tree is used to search for elements in O(log n) time complexity. The binary search tree can be traversed in three ways:

	3. AVL Tree - A type of binary search tree where the difference in height between the left and right subtrees of each node is at most one. The AVL tree is used to maintain the balance of the tree. The AVL tree is used in applications where the height of the tree needs to be minimized, such as in databases, etc.

	4. Red-Black Tree - A type of binary search tree where each node is colored red or black. The red-black tree is used to maintain the balance of the tree. The red-black tree is used in applications where the height of the tree needs to be minimized, such as in databases, etc.

	5. B-Tree - A type of tree where each node can have more than two children. The B-tree is used to maintain the balance of the tree. The B-tree is used in applications where the height of the tree needs to be minimized, such as in databases, etc.

	6. **Trie (Prefix Tree)** - A trie is a type of tree where each node represents a character. The trie is used to store strings. The trie is used in applications where the search for strings is important, such as in dictionaries, etc.

	7. **Segment Tree** - A segment tree is a type of tree where each node represents a range of elements. The segment tree is used to perform range queries on an array. The segment tree is used in applications where range queries are important, such as in databases, etc.

	8. Fenwick Tree - A Fenwick tree is a type of tree where each node represents a range of elements. The Fenwick tree is used to perform range queries on an array. The Fenwick tree is used in applications where range queries are important, such as in databases, etc.

	9. Suffix Tree - A suffix tree is a type of tree where each node represents a suffix of a string. The suffix tree is used to store strings. The suffix tree is used in applications where the search for strings is important, such as in dictionaries, etc.

	10. Binary Indexed Tree - A binary indexed tree is a type of tree where each node represents a range of elements. The binary indexed tree is used to perform range queries on an array. The binary indexed tree is used in applications where range queries are important, such as in databases, etc.

	11. Huffman Tree - A Huffman tree is a type of tree where each node represents a character and its frequency. The Huffman tree is used to compress data. The Huffman tree is used in applications where data compression is important, such as in file compression, etc.

	12. Quad Tree - A quadtree is a type of tree where each node represents a quadrant of a 2D space. It tree is used to partition a 2D space. The quadtree is used in applications where the partitioning of a 2D space is important, such as in image processing, etc.

	13. Octree - An octree is a type of tree where each node represents an octant of a 3D space. The octree is used to partition a 3D space. The octree is used in applications where the partitioning of a 3D space is important, such as in 3D graphics, etc.

	14. **Heap** - A heap is a type of tree where each node is greater than or equal to its children. The heap is used to maintain the maximum or minimum element at the root node. The heap is used in applications where the maximum or minimum element needs to be maintained, such as in priority queues, etc.

	Trees are used in applications where the hierarchical relationship between elements is important, such as in file systems, family trees, etc.

	Trees - O(log n) to search for an element, O(log n) to insert an element, O(log n) to delete an element


8. **Graph** - A graph is a collection of nodes(vertices) and edges. The edges connect the nodes. There are two types of graphs:

	1. Directed Graph - The edges have a direction associated with them. The direction is from one node to another. *Tree* is a type of directed graph.
	2. Undirected Graph - The edges do not have a direction associated with them. The direction is bidirectional.

	There are two ways to represent a graph:

	1. **Adjacency Matrix** - An adjacency matrix is a 2D array where the rows represent the source nodes and the columns represent the destination nodes. The value at the intersection of the row and column represents the weight of the edge between the source and destination nodes.

		```cpp
		int adj[5][5] = {
			{0, 1, 0, 1, 0},
			{1, 0, 1, 0, 0},
			{0, 1, 0, 1, 1},
			{1, 0, 1, 0, 0},
			{0, 0, 1, 0, 0}
		};
		```

	2. **Adjacency List** - An adjacency list is a collection of linked lists where each node has a list of its adjacent nodes. The linked list can be implemented using vectors or linked lists.

		```cpp
		#include <vector>
		vector<int> adj[5];
		adj[0].push_back(1);
		adj[0].push_back(3);
		adj[1].push_back(0);
		adj[1].push_back(2);
		adj[2].push_back(1);
		adj[2].push_back(3);
		adj[2].push_back(4);
		adj[3].push_back(0);
		adj[3].push_back(2);
		adj[4].push_back(2);
		```

		Graphs are used in applications where the relationship between elements is important, such as in social networks, maps, etc.
		Graphs - O(n) to search for an element, O(1) to insert an element, O(1) to delete an element


9. **Suffix Array** - A type of array where each element represents a suffix of a string. The suffix array is used to store strings. The suffix array is used in applications where the search for strings is important, such as in dictionaries, etc.

10. Bloom Filter - A bloom filter is a type of data structure that tests whether an element is a member of a set. The bloom filter is used to test the membership of an element in a set. The bloom filter is used in applications where the membership of an element needs to be tested, such as in spell checkers, etc.

11. Skip List - A data structure that allows for fast search, insertion, and deletion of elements. The skip list is used to store elements. The skip list is used in applications where fast search, insertion, and deletion of elements are important, such as in databases, etc.

#### Next?

There is a lot of information in these pages, half of which you probably won't need. The important data structures are marked with \b font-weight. The rest are just for your information. You can always come back to this page if you need to refer to any data structure. Again, it is completely understandable if this becomes too much for you to understand all at once. The best way to understand these is to code them. I will keep updating this page, adding more information as we go along.