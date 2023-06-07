let indicator = document.querySelector('.prog-bar');

let documentHeight = document.documentElement.scrollHeight;
/* `let viewportHeight = document.documentElement.clientHeight;` is assigning the height of the
viewport (the visible area of the web page) to the variable `viewportHeight`. The
`document.documentElement.clientHeight` property returns the height of the viewport in pixels,
including the height of the horizontal scrollbar (if present). */
// let viewportHeight = document.documentElement.clientHeight;

window.onscroll = function() {
  let percentageScrolled = (scrollY / (documentHeight - window.innerHeight)) * 100;

  indicator.style.width = percentageScrolled + '%';
}