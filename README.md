
# LABS 36–39: FULL STACK APPLICATION
[![Build Status](https://travis-ci.org/LizabethPetersen/36-40-fullstack-app.svg?branch=master)](https://travis-ci.org/LizabethPetersen/36-40-fullstack-app)

## DOCUMENTATION
ThE goal of this lab is to teach "the big picture" behind building a full stack application, by incrementally adding functionality to a user-facing front end, based on a previously built back-end server for authenticating a user and creating a profile (Lab 18).

### Lab 36: Async Actions with Signup and Login
Builds the initial state of the front-end, with Signup and Login links takig the user to a form with input fields for username, password, and email as requirements. The goals are to sign up and create a new account, with data saved in a MongoDB database, and the subsequent ability to log in. The front-facing visual is a generic "dashboard".

##### Components:
Root = Home page
Signup = Signup form
Login = Login form
Dashboard = Generic page with no functionality yet other than to show we have succeeded
Landing = Contains the JSX for the links to sign up and log in
Navbar = Contains the JSX for showing the links to the different signup options

### Lab 37: Cookies and Profile Creation
Builds in a cookie for session storage. Adds a profile route and form for user to input a bio and their name. Adds a navigation bar for ease in functionality.

### Lab 38: Google Authentication
Includes a button that links to the Google+ API to allow a user to sign up using their google account.