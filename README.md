# Fullstack Boilerplate - NextJS, Express, ReactJS, Redux and MySQL
Fullstack boilerplate using NextJS, NodeJS, Express, ReactJS, Redux, and MySQL, features include activity logger, crash logger, rate limiter, and much more...
### V1.1.0 Changes:
- Added the ability to call async redux actions from within getInitialProps

## Libraries:
- [create-next-app](https://www.npmjs.com/package/create-next-app) - react framework with built-in router, SSR, SSG and more
- [express](https://www.npmjs.com/package/express) - minimal framework for NodeJS
- [mysql](https://www.npmjs.com/package/mysql) - NodeJS driver for MySQL
- [dotenv](https://www.npmjs.com/package/dotenv) - easily adds the .env consts to the process object
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) - additional rate limiting tool
- [helmet](https://www.npmjs.com/package/helmet) - additional security mainly for response headers
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - easily parsing cookies
- [morgan](https://www.npmjs.com/package/morgan) - used as activity logger
- [nodemon](https://www.npmjs.com/package/nodemon) - used for development
- [redux](https://www.npmjs.com/package/redux) - state container
- [react-redux](https://www.npmjs.com/package/react-redux) - binder for react and redux
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) - async actions for redux (redux middleware)
- [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper) - higher order component that make a deeper connection between Redux and NextJS - used in this project for dispatching actions from getInitialProps
- [node-sass](https://www.npmjs.com/package/node-sass) - add SCSS support
- [react-icons](https://www.npmjs.com/package/react-icons) - multiple icon libraries in one

## Project Structure:
    .
    ├── ...
    ├── public                      //public files
    ├── src
    │   ├── express                 //express app & api routes
    │   │   ├── actions             //DB actions
    │   │   ├── controllers         //routes' controllers
    │   │   ├── routes
    │   │   │   └── api
    │   │   │       ├── main        //main API files (one main file for each API version)
    │   │   │       └── v1          //all the API routers for that API version
    │   │   └── utils
    │   ├── nextjs                  //nextjs & react app
    │   │   ├── components          //reusable components
    │   │   ├── pages               //all the pages of the web app
    │   │   │   ├── _app.js         //base component that's wrapping each and every page
    │   │   │   └── 404.js          //custom 404 page
    │   │   ├── store               //redux storage
    │   │   │   ├── actions
    │   │   │   ├── reducers
    │   │   │   └── types
    │   │   └── styles
    │   │   │   ├── components      //component specific styles
    │   │   │   ├── pages           //page specific styles
    │   │   │   └── index.scss      //main style file that's included with all the pages
    │   ├── app.js
    │   └── server.js
    └── ...

## Quick Start
1. Change the .env file consts to your proper values
2. Run ```npm install``` to install the dependencies
3. Run the MySQL migration script ```npm run migrate```
4. Run ```npm start``` to start the development server
5. Go to ```localhost:3000``` to see the react app, or try to test the CRUD functions by making API calls to the following endpoints:
    1. Create example row:
        
        ```
        POST /api/v1/examples
        Content-Type: application/json
        {
            "column1": <String>, 
            "column2": <String>
        }
        ```
    3. Get example row by ID:
        
        ```
        GET /api/v1/examples/:id
        Content-Type: application/json
        ```
    4. Get all example rows:
        
        ```
        GET /api/v1/examples
        Content-Type: application/json
        ```
    5. Update example row:
        
        ```
        PATCH /api/v1/examples
        Content-Type: application/json
        {
            "id": <Integer>, 
            "column1": <String>, 
            "column2": <String>
        }
        ```
    6. Delete example row:
        
        ```
        DELETE /api/v1/examples/:id
        Content-Type: application/json
        ```