# Egram Backend

**Description**  
Egram is a social media web application which users can post texts and images on the main page for everyone to see. 

Installing the app(Not recommended):  
Installing the app will take a lot of steps, which includes installing node, npm, installing the front end, the backend and setting up a local database.

This is a good starting point:  
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Using the app:
Since it is very time consuming to install the application you can go through the included files or look at the code on Github. We are using Github pages which uses the branch “master” to build the web application. The submission time can be checked by the last commit made on both the repositories any code changes will easily be available through “git diff”.

**To use the app visit:**
https://aakarshs.github.io/EgramClient/

**Link to the backend code is:** 
https://github.com/thuythai/CS345

**Link to the front-end code is:** 
https://github.com/Aakarshs/egramClient

**How to use the app:**
At the top, you can enter your name, include a message to the main page, and enter a URL to upload an image. Your name, the message, and the URL will be shared on the main page.

**On the right, you can see top posts and top posters.**
Top posts are determined by the most number of likes a post has.
**(Redundant)Top posters are determined by the number of likes a person's post has gotten.**

On the main page, you can see other posts.

## Documentation of the files:    
There are no files that we adapted from existing code.
The default way to start writing a ReactJs app is to use “create-react app”. More on this here:
https://github.com/facebook/create-react-app

**“Create React App” creates some default files for us. Those files are:**
public/index.html
public/manifest.json
src/apiFunctions/serviceWorker.js
package.json
package-lock.json
index.js

All the other files are written/created by us.

## Folders:  
**src/apiFunctions :** Contains the functions used by the app as well as the functions that call the endpoints.  
**src/components:** Contains the individual components used to build the app.  
**src/styles:** Contains style sheets for the app.   
**src/assets:** Contains images and icons used in the application.  

## Important Files:  
**app.js:** This is the main application.  
**src/apiFunctions/httpApi.js:** Contains functions that call the endpoints to transmit data to the backend.  
**src/apiFunctions/functions.js:** Contains functions that perform various frontend operations on the application. (Such as refreshing state and get data on render.)  


