difference between a method and a function is that a method is something that an object can do. So it has to be associated with an object.

html에서 태그를 제외한 <>에 들어있는 모든것은 Attribute이고,  
`document.querySelector("a").setAttribute("href", "https://google.com");` 2가지 인자를 받는다

#### defer

The `defer` attribute tells the browser not to wait for the script.  
Instead, the browser will continue to process the HTML, build DOM.  
The script loads “in the background”, and then runs when the DOM is fully built.

- Scripts with `defer` never block the page
- Scripts with `defer` always execute when the DOM is ready (but before `DOMContentLoaded` event).
