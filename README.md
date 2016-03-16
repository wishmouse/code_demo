# Full-stack

## Concepts

Number | Name
-------|-------------------
1.     | [Server setup](http://www.fullstacktraining.com/articles/how-to-serve-static-files-with-express)
2.     | [Task Automation with npm run](http://substack.net/task_automation_with_npm_run)
3.     | [Browserify handbook](https://github.com/substack/browserify-handbook#watchify)
4.     | [supertest](https://www.npmjs.com/package/supertest)
5.     | [Jquery from a cdn](https://developers.google.com/speed/libraries/)
6.     | [Full stack](http://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/)

## Intro

Today we'll walk through the steps of a simple full-stack JavaScript app.

Clone this repo and cd into it. Run `npm init -y` to create a package.json.

## Release 0: Static file server.

1. Create an server.js file in th root and a `client` folder and `client/index.html` with some basic content. This will be your server.
1. Install `express` locally. Require express into index.js and [follow the instructions](http://www.fullstacktraining.com/articles/how-to-serve-static-files-with-express) to set up a basic server for your file.


## Release 1: Client-side JavaScript

1. Add a `<script>` tag that imports [Jquery from a cdn](https://developers.google.com/speed/libraries/) into the `<head>` of your index.html.
1. Create a JavaScript file `client/app.js`. Import it into your html by  adding it to the `<head>` just below Jquery.
1. Write some basic Jquery DOM manipulation in app.js. You will need to need to use Jquery's `$( document ).ready` or similar to make sure your JavaScript executes after the page is loaded.
1. Restart your server and sever your client-side Javascript.

## Release 2: Browserified client-side JavaScript.

1. Create a `src/` folder in root (another common name is `lib/`).
1. Now write the same client-side javascript in Release 1 with node-style requires (install and require JQuery locallly). Place it in `src/index.js`.
1. Use browserify to transform it into `client/bundle.js` and adjust your script tags (delete the jquery cdn script tag).

## Release 3: Add a JSON API to your server

Now we'll adjust your express server (`./server.js`) to serve a JSON array.

1. create a REST route `/api/v1/students` that listens for GET requests in your **your server** and responds with an array of classmate names.

Hint: `res.json()`.

Navigate your browser to localhost:[PORT]/api/v1/students to see the response in the browser, or use Postman to do the same.

## Release 4: Client-server messaging with ajax

Add a button to your html. In your **client-side** JavaScript setup an event listener on the button and executes an ajax GET request to **server** `localhost:[PORT]/api/vi/students`

Write some view code that displays the results of the server response in a list (time box this).

Hint: you may want to add the Jquery cdn script tag back into your html. This will allow you to paste you jquery code into the browser console to debug it.

## Release 5: Finesse

Now we're going to set things up so that we don't have to keep restarting the server or re-bundling our client JavaScript each time we make a change.

1. Install [node-dev](https://www.npmjs.com/package/node-dev) and [watchify](https://www.npmjs.com/package/watchify) with `npm install watchify node-dev --save-dev`
1. Create two scripts in your package.json: "serve" and "watch-client".
1. In "serve" add "node-dev [your server]"
1. In "watch-client" add "watchify src/index.js -o client/bundle.js -dv"

Now you should be able to run `npm run serve` in one terminal and `npm run wach-client` in another. When you change the your client/app.js it will be automatically re-bundled (you will still need to re-start the server to re-serve the fresh bundle.js).

When you make changes to your `server.js` and save it will automatically restart.


Background:

 * [Task Automation with npm run](http://substack.net/task_automation_with_npm_run)

 * [Browserify handbook](https://github.com/substack/browserify-handbook#watchify)


## Release 6: File-system persistance

At the moment our server just serves data defined in our server and held jn memory. Let's use the file system to persist our data.

1. Create a directory `data/` and a file `data/db.json`
1. db.json should have a key "students" the value of which is an array of student names.
1. Use `fs.readFile` to retrieve the db.json and the students *when the clientrequests them* (inside the `app.get('/api/v1/students',`  callback).


## Release 7: Test-driven

Refer to [super-duper-browser](https://github.com/kakapo-2016/super-duper/tree/es5-tape/test) for an example of how to set up a server tests.

1. Create a folder `test/` and a file `test/api-tests.js`.
1. Install [supertest](https://www.npmjs.com/package/supertest) `npm install tape supertest --save-dev`
1. You will need to export the app in server.js. Create a new file `index.js and require your server app into it. Setup the app.listen() in index.js. This file will be the entry point for your server.
1. Adjust the "serve" script in package.json so that points to `index.js`.
1. In `test/api-test.js require supertest and your server:

```js
var test = require('tape')
var server = require('../server')
var request = require('supertest')
```

Follow the example in [super-duper] to write a test for your existing route `api/v1/students.

Remember:

1. Arrange: setup your fake data and expected results.
2. Action: make a get request to your JSON API using supertest (request).
2. Assert: does the repsonse match what you expect?

Because the app is so simple at this point this will feel superfluous. Just get used to the practice of setting up a test.

Now right a very similar test in your `api-test.js` but for teachers rather than students `api/v1/teachers`.

make the test pass  coding another route in `server.js`.

Finally add a test for retrieving a student by id. You may use the index in the array of students or you may use an array of objects where each object has an `id` property.

The route you are testing will look like this `/api/v1/students/:id`. Make the test pass.


## Release 8: Local networking.


Now we'll split it the server.js into 2 and introduce an external API. In your pair decide who will serve the teachers and who will server the students.

1. Add and commit your changes and push them to the repo.
1. One person will clone the repo and branch off the pair's branch.
1. Both of you will need to find your own ip address on the local network
1. Setup your server's so that one of you has the teachers and the other the students in your db.json.
1. When a server recieves a GET for `/users` it will make a GET to your partner's server and respond to the client with both teachers and students.











