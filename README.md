# Udacity FEND: Optimization Assignment

Navigate to https://github.com/codemansam/udacity-assignment-8 to download project and open index.html with your browser.

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

Navigate to views/dist/pizza.html.

# Images
- Reduced image size using gimp and then got optimised version of pizzeria.jpg from the google pagespeed insights tool.

# CSS

- Added backface-visibility: hidden attribute to .mover class. 
- used gulp to concatenate and minify style.css and bootstrap.css into bundle.css.

# Javascript

- Moved calculations out of for loop of function changePizzaSizes (main.js 453). 
- Changed selector to getElementsByClassName instead of querySelectorAll. 
- Made array to store the 5 values phase can be (main.js 519). Prevented unnessarily recalculating those values.
- Used style.transform: translateX (main.js 534). 
- Uncoupled updatePositions from scroll event.  Instead made Function onScroll (main.js 534) to keep track of mouse scrolling and use it to call requestAnimate (main.js 567) much less often than it was originally.  This function was then using requestAnimationFrame for even better efficiency.  Now updatePositions runs less often and when it does run it does so when it is efficient for the browswer to do so.
- Used screen.height and screen.width to create an appropriate number of pizzas depending on the screen size.
# HTML

- Inlined concatenated and minified css.
- Inlined minified javascript.
- Minified pizza.html.
