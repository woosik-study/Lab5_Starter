# Expand

1. **Why is it important to put thought into your IDs & Classes when it comes to technology intersections?**

IDs and Classes are what connect HTML, CSS, and JS together. If you name them carelessly, things break fast, change a class name in HTML and forget to update it in CSS or JS, and everything stops working. Good naming keeps all three in sync.

2. **What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?**

Data attributes let you store extra info on HTML elements using the `data-` prefix, like `data-id="123"`. They're useful for attaching metadata without affecting styling. Access them in JS with `element.dataset.attributeName`. Don't store sensitive info though since they're visible in the source. They're also not the same as semantic microdata like Schema.org, so mixing them up can get messy.

3. **What is a DOM fragment? Why are they powerful?**

A DOM fragment is an invisible in-memory container. You build elements inside it, then insert them all into the DOM at once, only one reflow instead of one per element. Much faster.

4. **What is the point of a "Virtual DOM"? What do you gain? What do you lose?**

The Virtual DOM is an in-memory copy of the real DOM. React uses it to find what changed before updating the real DOM. You gain performance and simpler code. You lose direct control and add some overhead, overkill for small projects.

5. **In JavaScript, why is the class attribute accessed as className?**

Because `class` is a reserved keyword in JavaScript. To avoid conflicts, the HTML `class` attribute is accessed as `className` in JS.

6. **What is the difference between using addEventListener() and something like onClick()? What are the advantages / disadvantages of both?**

`addEventListener()` lets you attach multiple handlers to one element and keeps JS separate from HTML. `onClick` only holds one handler at a time, setting it again overwrites the previous one. `onClick` is simpler but less flexible. `addEventListener()` is cleaner and better for maintainable code.