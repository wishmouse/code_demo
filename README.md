# full-stack

## Intro 

Today we'll walk through the staeps of a simple full-stack JavaScript app.

Clone this repo and cd into it. Run `npm init -y` to create a package.json.

## Release 0: Static file server.

1. Create an index.js file in th root and a `static` folder and `static/index.html` with some basic content. 
1. Install `express` locally. Require express into index.js and follow the instructions [here](http://www.fullstacktraining.com/articles/how-to-serve-static-files-with-express) to set up a basic server for your file.


## Release 1: Client-side JavaScript

1. Add a `<script>` tag that imports [Jquery from a cdn](https://developers.google.com/speed/libraries/) into the `<head>` of your index.html. 
1. Create a JavaScript file `static/app.js`. Import it into your html by  adding it to the `<head>` just below Jquery. 
1. Write some basic Jquery DOM manipulation in app.js. You will need to need to use Jquery's `$( document ).ready` or similar to make sure your JavaScript executes after the page is loaded.
1. Restart your server and sever your client-side Javascript.

## Release 2: Browserified client-side JavaScript.

1. Create a `src/` folder in root.
1. Now write the same client-side javascript in Release 1 with node-style requires (install and require JQuery locallly). Place it in `src/index.js`. 
1. Use browserify to transform it into `bundle.js` and adjust your script tags (delete the jquery cdn).

