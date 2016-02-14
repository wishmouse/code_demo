# full-stack

## Intro 

Today we'll walk through the steps of a simple full-stack JavaScript app.

Clone this repo and cd into it. Run `npm init -y` to create a package.json.

## Release 0: Static file server.

1. Create an server.js file in th root and a `client` folder and `client/index.html` with some basic content. This will be your server. 
1. Install `express` locally. Require express into index.js and follow the instructions [here](http://www.fullstacktraining.com/articles/how-to-serve-static-files-with-express) to set up a basic server for your file.


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

Now we'll adjust your express server (`./index.js`) to serve a JSON array.

1. create a REST route `/api/v1/students` that listens for GET requests in your **your server** and responds with an array of classmate names.

Hint: `res.json()`.

Navigate your browser to localhost:[PORT]/api/v1/students to see the response in the browser, or use Postman to do the same.

## Release 4: Client-server messaging with ajax

Add a button to your html. In your **client-side** JavaScript setup an event listener on the button and executes an ajax GET request to **server** `localhost:[PORT]/api/vi/students`

Write some view code that displays the results of the server response in a list. 

## Release 5: Finesse

Now we're going to set things up so that we don't have to keep restarting the server or re-bundling our client JavaScript each time we make a change.

1. Install [node-dev](https://www.npmjs.com/package/node-dev) and [watchify](https://www.npmjs.com/package/watchify) with `npm install watchify node-dev --save-dev`
1. Create two scripts in your package.json: "serve" and "watch-client". 
1. In "serve" add "node-dev [your server]"
1. In "watch-client" add "watchify [your server].js -o [your bundle].js -dv" 

Now you should be able to run `npm run serve` in one terminal and `npm run wach-client` in another. When you change the your client/app.js it will be automatically re-bundled (you will still need to re-start the server to re-serve the fresh bundle.js). 

When you make changes to your `server.js` and save it will automatically restart.   


Background: 

 * [Task Automation with npm run](http://substack.net/task_automation_with_npm_run)

 * [Browserify handbook](https://github.com/substack/browserify-handbook#watchify)

