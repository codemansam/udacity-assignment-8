# Udacity FEND: Optimization Assignment

Navigate to https://codemansam.github.io/ to visit my optimized site or if running locally open index.html with your browser.

# Optimizations for Portfolio website

# Images

- Got optimised versions of images from google pagespeed insights tool.

# CSS

- Added google web fonts styles to work with the web font loader script.
- Concatenated, minified and inlined css.

# Javascript
- Inlined all existing javascript.
- Set analytics javascript to async.
- Added web font loading script so that fonts will load asynchronously.

# Optimizations for Pizza Website

Navigate to https://codemansam.github.io/views/dist/pizza.html or if running locally open views/dist/pizza.html.

# Images
- Reduced image size using gimp and then got optimised version of pizzeria.jpg from the google pagespeed insights tool.

# CSS

- Added backface-visibility: hidden attribute to .mover class. 
- used gulp to concatenate and minify style.css and bootstrap.css into bundle.css.

# Javascript

- Moved calculations out of for loop of function changePizzaSizes (main.js 453). 
- Changed selector to getElementsByClassName instead of querySelectorAll. 
- Made array to store the 5 values phase can be (main.js 519). Prevented unnessarily recalculating those values.
- Used style.transform: translate3d (main.js 534). 
- Uncoupled updatePositions from scroll event.  Instead made Function onScroll (main.js 534) to keep track of mouse scrolling and use it to call requestAnimate (main.js 567) much less often than it was originally.  This function was then using requestAnimationFrame for even better efficiency.  Now updatePositions runs less often and when it does run it does so when it is efficient for the browswer to do so.
- Reduced the number of generated pizzas (main.js 578) from 200 to 50.  200 was a lot more than needed and weren't visible on screen so they were being generated at a cost for no visible reason.

# HTML

- Inlined concatenated and minified css.
- Inlined minified javascript.
- Minified pizza.html.
