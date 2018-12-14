# lzy.js - The littlest lazy loader
A teeny lazy loader to make your site more performant, by only loading images as they get near the viewport. 33 lines of code, 863 bytes of data (460 when minified), vanilla JavaScript only.

Written by [Adam](https://adamduncandesigns.com) and [Neef](https://neef.co)

## Features
* Written in Vanilla JS, no other dependencies
* Will take `data-src` attribute and load in an `src` attribute for images
* If `data-src` is not on an `img`, lzy.js will fallback to applying `background-image` to element's style
* Will remove the `data-src` attribute once loading is done
* Can pass in an `offset` value which controls how far the images are from the viewport before being loaded. By default this is 200px
* Uses the `IntersectionObserver` API, with a polyfill method for unsupported browsers near [the bottom of this Readme](https://github.com/neefrehman/lzy/blob/master/README.md#polyfill-for-intersection-observer)

## Usage
To use lzy.js include the script in your html file
```html
<script src="lzy.js> </script>
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
 
### Trigger
To trigger it, add the following function at the bottom of lzy.js, or in script that's loaded afterwards if you want more control.
```javascript
lzy();
 ```
 
### Options
To customise the `offset` value, call it like below. This scenario will load images as they get 500px from the viewport.
```javascript
lzy({
   offset: 500
});
 ```

### Polyfill for Intersection Observer
lzy.js uses the `IntersectionObserver` API, which currently [doesn't have an amazing amount](https://caniuse.com/#feat=intersectionobserver) of browser support. [pollyfill.io](https://pollyfill.io) to the rescue! To add support, add the following script to your html file, before `lazy.js`
```html
<script> if (!window.IntersectionObserver) document.write('<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"> <\/script>'); </script>
 ```
 
## License
Licensed under the The MIT License (MIT).
