difference between a method and a function is that a method is something that an object can do. So it has to be associated with an object.

html에서 태그를 제외한 <>에 들어있는 모든것은 Attribute이고,  
`document.querySelector("a").setAttribute("href", "https://google.com");` 2가지 인자를 받는다

### defer

The `defer` attribute tells the browser not to wait for the script.  
Instead, the browser will continue to process the HTML, build DOM.  
The script loads “in the background”, and then runs when the DOM is fully built.

- Scripts with `defer` never block the page
- Scripts with `defer` always execute when the DOM is ready (but before `DOMContentLoaded` event).

## Scope

Scope means where these variables are available for use.  
They are all hoisted to the top of their scope.

- `var`

  - global scope when it is declared outside a function
  - function scope when it is declared within a function
  - can be re-declared and updated
  - var variables are hoisted to the top of their scope
  - call it before declaration, it is hoisted and initialized with a value of `undefined`

- `let`

  - block scope (inside of curly braces)
  - can be updated but not re-declared
  - let declarations are hoisted to the top
  - use a let variable before declaration, you will get a `Reference Error` (`TDZ` : Temporal Dead Zone)

- `const`
  - block scope
  - can not be updated (immutable) or changed once it is declared
  - must be initialized at the time of declaration
