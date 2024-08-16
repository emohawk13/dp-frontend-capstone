set to react 17.0.2

Capstone Project
Completion requirements
Welcome to the Front End Web Development Capstone! As a developer you will need key items for your portfolio. These key items should your skills, your professional delivery and work ethic. Your goal with this project should be to produce quality code and professional output that you wish to show potential employers.

The requirements are likely more open-ended than you are used to. This is on purpose. This will allow you flexibility to produce a solution that you can design on your own. However, make sure that your solution meets all of the requirements. Please feel free to ask clarifying questions so that you fully understand the requirements.

IMPORTANT: The requirements provided below are non-inclusive. Everything provided in the list is required. Any feedback provided by an instructor must be added to your capstone. The instructor will not change or remove any of the requirements below unless it is formally removed from the document. The feedback will also be used in assessing and providing a final grade.

HINT: This project is sizable and can seem overwhelming. This is true of almost any project we will encounter “in the wild”. Start by breaking the project down into smaller pieces, like classes, functions or smaller snippets of code. This will help you keep moving forward and not being stuck.

HINT: Start with what you know. There may be some parts of the project that you are struggling to know where to start. Start by working through the parts that you do know. It will most likely help you understand the parts you aren’t as familiar with and it always feels better to accomplish something than to become frustrated with what you don’t yet know.

Capstone Overview
In this capstone you will create an E-commerce application. An e-commerce application is a website that allows users to purchase an item online. Your application will allow users to browse products, add them to a shopping list, and remove them from the shopping list

Include the following in your E-commerce application:

Overall
General

Use the fake store API for each product in the e-commerce store: Fake API Store
Create a React application using version 17 in VSCode using CRA
Import the library react-router-dom@5
Import the library react-modal
Everything in the application should be scalable, reusable and easily readable.
Reusable/Scalable: All parts should be optimized to be only created once and then called in every place needed
Readable: All naming conventions and logic should be easily read by someone not familiar with the code base

Folder Structure

The general structure of your application should be professionally organized. The application could include the following structure. Your application could include more than the structure provided. You should be able to describe why your folder structure is optimal and appropriate for the capstone if asked.
Have a node_modules folder (comes with React, do not change anything)
All components should be in a component folder
All styles should be in a styles folder
All images and other media should be in the assets folder
All helping components and functions should be in the helpers folder

Public Folder

Application should have a custom favicon.ico (shows in the browser tab)
Should be the logo for the application as well
Planning
Wire Frame
Wire frame can be done in figma or on paper.
Keep it simple (boxes for containers and lines for text)
provide lines between pages to show navigation
Styling
Style with the SCSS (sass npm library) and responsive design (in full-screen and mobile).
All styles should be imported into a main.scss file and the main.scss file should be importaed into the index.js file
All styles should be organized by page, helper or feature that they affect
Media queries should be used when a page, helper or feature breaks based on screen-size.
Links
default visited and styles should only be used when appropriate (remove the underline and different colors based on visited or not-visited)
Buttons
Cursor must become a pointer when when hovering over the button
Must have a another hover effect that shows the user that if they click the button's action will be performed
Header and Footer
Header

Logo for the Company
Navigation
Must be sticky (stays at the top of the screen, even while scrolling)
Navigation routes navigate to the intended pages
Becomes a hamburger menu in mobile-view

Footer

Footer with fake address, phone and store name at the bottom of each page
Must stay at the bottom of page, even when the data on the page does not fill in the screen's height.
Error-Handling and Conditional Rendering
A font awesome icon should display whenever data is not ready to render. The icon should have an animation of some sort. (Use throttling in the developer tools to check). This should be either the entire page or the individual component, whichever is most appropriate.
No errors should be logged to the console
Fetching should use .then(), .catch() and .finally() appropriately to render each component in an aesthetic and clear way
A 404 Page should render when an incorrect route is hit.
The 404 Page should include a link to return back to the previous page
Pages
Your application should include at the least the following pages:

Home Page

Hero Image
Background Image
Slogan of the e-commerce website
Positioned and designed aesthetically

Products Page

Filters

Categories should be fetched from the api (refer to the documentation)
4 checkboxes (one for each category)
All items from a category should be populated on the page when their category's checkbox is checked
When no checkboxes are checked no products should show
When all checkboxes are checked all products should show

Sort

Two dropdowns should be provided
One dropdown for the type
Should determine what is being sorted (whether by id, title, price or category)
One dropdown for the id
Should determine how to order what is being sorted (whether ascending or descending)

Products should have individual cards. Each card should include:

title, image and price of product
buttons to increase the amount of product being added to the cart and an Add to Cart button
A decrease button should remove items from being added to the cart, but should not go below 0.
should be a link to the Product's individual page
cursor should change to a pointer
card should have a hover effect when the pointer is hovering

Product Page

Include the following information:
title
category
image
price
description (truncated, should have a show more... button that will show the entire description. Should become show less... to return to the truncation)
rating and the number of reviews
same Add to Cart functionality used in the Products page

Cart Page

The contents of the cart must
List all products currently in the cart
Remove a product from cart button for each added item
A button to decrease or iancrease the amount of a product in cart for each added item (cannot go below 1)
Checkout Button that should clear the cart (which does not have to process any payment)
Total price with subtotal and shipping
The Remove and Checkout Buttons should open a modal:
Must be mounted when button is pressed
Overlays the current page (all other actions on the page should not be clickable)
Must be positioned directly in the center of the page
All buttons in the modal should perform their action and close the modal.

Contact Page

All fields are required (and the form should be marked in a way that the user knows it is required)
A prompt should appear stating something is missing (or the submit button should be disabled until all information has been provided)
Contact form (non-functional) that asks for the following:
First Name
Last Name
Email
Message (textarea)
Submit Button (information does not have to be sent anywhere) should do the following:
Create a popup message that state the message was sent
Clears the form

About Page

Explain the process of your capstone (and provide a link to the fake store api documentation)
Explain struggles you experienced throughout the frontend course and how you solved them
Explain your favorite languages and why
Each should be divided into their own section on the page with space and styling that is clear and aesthetic.
NOTE: While writing your reflection for the about page you want to sound like a developer. While reflecting on the course use each term or concept we discussed in class, define each term, and connect it to how it improved your project.

NOTE: Employers want to see your journey in the about page. Vulnerability is a strong skill employers will connect with. Be proud of each failure that brought you to the correct answer. Write your reflection in a narrative (or story) format. Speak about the challenges and do not connect them to yourself. For example, don’t say: “I struggled with properly sizing the input box”. Rather, say: “Because of the positioning of the left menu, the input box had to be resized in a new way.” This will showcase your vulnerability as a strength to continue finding solutions rather than showcasing what weaknesses you might bring to your future employment.
