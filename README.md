Blog Web App — Node.js + Express + EJS<br>
A minimal blog-style web application built using Node.js, Express.js, and EJS. Users can
create, view, edit, and delete posts. No database is used; all posts are stored in memory during
runtime. Includes responsive styling for a smooth user experience.

Features
    ● Create Posts – Users can submit new blog posts.
    ● View Posts – All posts are displayed on the home page.
    ● Edit & Delete Posts – Users can update or remove existing posts.
    ● Responsive UI – Styled with CSS to look good on both desktop and mobile.
    
Technologies Used
    ● Node.js – Server-side environment
    ● Express.js – Routing and server logic
    ● EJS – Template engine for dynamic HTML
    ● CSS – Styling and layout
    
Guide for development
  Views (EJS Templates)
      ● All UI templates are located in the /views directory
      ● Create or modify EJS files such as:
          ○ index.ejs — home page showing posts
          ○ addpost.ejs — form to create new posts
          ○ readpost.ejs — form to view existing posts
      
  Routes
      ● All routes are defined in the /routes directory
      ● Routes include:
          ○ GET home page
          ○ POST create a post
          ○ GET edit page
          ○ POST update post
          ○ POST delete post
          
  Controllers
      ● Contains logic for:
          ○ Adding new posts
          ○ Updating a post
          ○ Deleting a post
          ○ Rendering pages with EJS
            
  Styles
      ● All styling is located in /public/styles.css
      ● Add responsive layout for both desktop and mobile
      ● Customize typography and spacing for a clean reading experience

      
How to Run
  1. Install dependencies:
    npm install
  2. Start the server:
    node index.js
  3. Open in browser:
    http://localhost:3000

Notes
  ● Posts do not persist; restarting the server resets all data.
  ● Ideal starter project for learning Express.js + EJS + basic routing flow.
