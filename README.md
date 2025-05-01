# React E-Commerce Website

This is a fully functional and visually appealing **e-commerce frontend application** built using **React.js** and **Tailwind CSS**. It includes a responsive layout, dynamic product listing, cart management system (mini and full cart), dark mode toggle, search functionality, and beautiful animations.

---

## Project Overview

The goal of this project is to simulate a modern e-commerce store with essential user features:

- Product browsing
- Cart functionality (add, remove, quantity)
- Dynamic search
- Dark/light mode support
- Stylish UI with animations and gradients
- Responsive design for mobile and desktop

---

## 🛠 Technologies Used

| Technology    | Purpose                              |
|---------------|---------------------------------------|
| React.js      | Component-based frontend framework    |
| Tailwind CSS  | Utility-first CSS for fast styling    |
| React Icons   | Icons used in cart and delete buttons |
| Context API   | Global cart state management          |
| Vite / CRA    | (depending on setup) React bundler    |

---

##  Features Summary

###  UI & Styling
- Full-page background image that stays fixed
- Scrollable foreground over the image
- Radial gradient and animated headings
- Hover effects with glowing border and card highlight

###  Cart Functionality
- Add items to cart with a button
- Mini cart on the header that shows selected items
- Full cart page showing item quantity, total price, and delete option
- Clicking outside the mini cart closes it automatically

###  Dark Mode
- Dark/light toggle that updates the full theme using Tailwind’s `dark:` utilities

###  Search
- Live search filtering products as user types

---

##  Folder Structure

src/ │ ├── assets/ # Images (background, logo, empty-cart GIF) ├── components/ # Header, Footer, Hero, Cart components │ ├── Header.js │ ├── Footer.js │ ├── Hero.js │ ├── FullCartPage.js │ └── MiniCart.js │ ├── context/ │ └── CartContext.js # React Context API for managing cart state │ ├── pages/ │ └── Products.js # Main product listing with search support │ ├── App.js # Root app, routes all components └── index.js # Entry point

--- Key Components
Header.js
Contains search bar, dark mode toggle, and mini cart icon

Clicking outside the mini cart closes it automatically

Hero.js
Displays welcome message with gradient text and animation

ProductListingPage.js
Maps through products and displays cards with Add to Cart functionality

FullCartPage.js
Shows all items in the cart with quantity, price, and delete option

MiniCart.js
Small floating cart view from the header

Finally to deploy using npm run build and again with the use of netlify to show the webiste.