1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
\*\*getElementById()
-- It will selecting one element
-- Uses id  
-- Id should be unique
-- It will returns is single element object or null if not found

\*\*getElementsByClassName()
-- It will selecting multiple element
-- Uses class name
-- It will returns you HTMLCollection

\*\*querySelector
-- querySelector will selecting which element comes first  
-- Uses CSS selector (id, class, tag ,etc)
--It will returning you single element object and or null if not found

\*\*querySelectorAll()
-- It will selecting all matching elements
-- It will returns you NodeList

2.How do you create and insert a new element into the DOM?

Answer:
To create and add a new element using element to the DOM , three are followed :

1. Creating the element using createElement()
2. Add content or attributes to it
3. Insert it into the DOM using methods like appendsChild() or append()

The process allows JavaScript to dynamically update the webpage reloading it

3.What is Event Bubbling and how does it work?

Answer:
Event Bubbling is a process where an event starts from the target element and then moves upward through its parent elements in the DOM hierarchy .

For a example, when a button inside a div is clicked:

-- the button's event runs first
-- then the div's event runs
-- then the body and document events follow

This upward flow of events is known as event bubbling and it is the default behavior in JavaScript

4.What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event Delegation is technique where a single event listener is added to parent element instead of adding separate listeners to multiple child elements .

The parent element listens for events and determines which child will be triggered the event .

It is useful because :
-- Improves performance
-- Reduce code repetition
-- Works with dynamically added elements
-- Easier to maintain all and manage all child elements

Event delegation takes advantage of event bubbling to handle events efficiently .

5.What is the difference between preventDefault() and stopPropagation() methods?

Answer:
\*\*preventDefault()
Stops the browser's default behavior for an event
Example: Preventing a form from submitting or stopping link a from opening

\*\*stopPropagation()
Stops the event from bubbling up to parent elements. If say in bangla very understandable (ইভেন্টটি অভিভাবকের কাছে বুদবুদ হওয়া বন্ধ করে 😁😁)

If see there key difference are :
--preventDefault() --> stops browser action
--stopPropagation() --> stops event flow
