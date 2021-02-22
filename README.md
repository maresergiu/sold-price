
# sold-price
This solution is built with the word enterprise in mind.
Is a web solution which is built with Nuxt.js.

## back end
The data which is needed by the interface is fetched by using an API.
The API is build with express and connected to Nuxt.
The API cater only for GET requests, does a validation of the queries.
If the queries are valid, the API will read the data from a file, I'm mocking here the database.
The data from the file is retrieved and provided to the fron-end.

## front end
The interface is built using Vue.js.
The file structure is suitable for when the validation has to scale in complexity.
The UI has one layout, one page and three components.
The page is connecting to a service helper function which does a http get request to the API.
The data provided is given to the Pricer component which renders it.
From a CSS point of view, I've choose to do it using SCSS. The arhitecture of the folder /assets/scss is suitable for scalability.

## unit test
You'll find unit tests for every major part of this application.
The front end has unit tests for the components.
The helper functions have unit tests.
The service has unit test.
The API is tested using nuxt.

## database
The database is mocked using a folder 'db'.

## build setup
This webs solution was build with Nuxt.js
Nuxt.js is the SSR framework for Vue. Beside the SSR functionality it offers other adavantages, like creating API's easily.

In order to make the run the solution please follow the bellow steps:
- generate an env file based on the file .env.template
- open the command line in the root source of the project and run `npm i`

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

