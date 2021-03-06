# lzy.js - The littlest lazy loader
A teeny lazy loader for images to make your site more performant, by only loading them as they approach the viewport.

30 lines of code, vanilla JavaScript only, and under 300 bytes when minified & gzipped.

Written by [Adam](https://github.com/adamduncan) and [Neef](https://github.com/neefrehman)


## Features
* Very small! 30 lines and under 300 bytes when minified and gzipped
* Written in vanilla JS (ES2015+), with no other dependencies
* Will take a `data-src` attribute and load in an `src` for images
* If not on an `img` element, `lzy.js` will fallback to applying `background-image` to the element's style
* Will remove the `data-src` attribute once loading is done
* Can pass in an `offset` value, which controls how far the images are from the viewport before being loaded. By default this is 200px
* Uses the `IntersectionObserver` API, with a super easy polyfill method for unsupported browsers near the [bottom of this Readme](#polyfill-for-intersection-observer)


## Usage
To use `lzy.js` download the file and add it to your project folder, and include the script in your html file with it's correct path, for example (using the minified version):
```html
<script src="javascript/lzy.min.js> </script>
 ```


### Setup
Ensure all the elements you want lazily-loaded have a `data-src` attribute, with the path to the image you want to use.
```html
<img data-src="path_to_image.jpg">
```
This will resolve to the following as the element enters the offset region
```html
<img src="path_to_image.jpg">
```

Or for any non `img` element it would resove to
```html
<div style="background-image: url("path_to_image.jpg);"> </div>
```


### Calling
To call `lzy`, add the following function at the bottom of the `lzy.js` file, or in a script that's loaded afterwards if you want more control.
```javascript
lzy();
 ```


### Options
The only option in `lzy.js` is the `offset` value, which controls how far the images are from the viewport before being loaded, which by default is 200px. To customise this value, include it as an argument when calling `lzy`. The following example will load images as they get 500px from the viewport.
```javascript
lzy(500);
 ```


### Polyfill for Intersection Observer
`lzy.js` uses the `IntersectionObserver` API, which at the time of writing [doesn't have an amazing amount](https://caniuse.com/#feat=intersectionobserver) of browser support. To ensure support for all browsers, add the following [polyfill.io](https://polyfill.io/) script to your html file, before including the script for `lzy.js`.
```html
<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"> </script>
 ```


## License
Licensed under the The MIT License (MIT).
