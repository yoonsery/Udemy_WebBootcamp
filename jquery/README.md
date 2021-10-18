## jQuery

javascript library

`$`sign is same as `document.querySelector`, `document.querySelectorAll`

### manipulating styles with jQuery

add below code at html  
`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>`

add this code at js  
`$('h1').css('color', 'orange');`

but changing code about styles at js is not right  
`$('h1').addClass('big-title');` it is more appropriate to add a class name  
To remove, use `.removeClass`

you can add multiple class name  
`$('h1').addClass('big-title anoter-class');`

`$('h1').hasClass('className')` return true or false depending on whether or not  
the element has that class applied

### manipulating text with jQuery

`$('h1').text('newMessage')` // h1's text will be changes to newMessage  
`$('button').html('<em>Hey</em>');` // same as `innerHTML`

### manipulating Attributes with jQuery

`$('img').attr('src');`  
`$('a').attr('href', 'https://www.google.com');`

- one input: **get** the value of the attribute
- second input: **set** the value of the attribute

### Adding Event Listeners with jQuery

`$('h1').click(() => { $('h1').css('color', 'blue'); });` : click event  
`$('input').keypress((e) => { console.log(e.key); });` : keypress event

`.on('param1, param2')` : access to any of the events

- `param1` : the event that you're looking to listen for
- `param2` : callback function

### Adding & Removing Elements with jQuery

`$('h1').before('<button>New</button>');` create HTML elements

instead of `.before`, can use `.after`, `.prepend`, `.append`

- difference between before and prepend (and after - append)
  - using `prepend` : add new HTML element into the selected item just after the opening tag (so, after `<h1>` tag, but before the h1 tag's textContent! )

`$('button').remove();` remove all of the button elements

### Website Animations with jQuery

`.hide()`, `.show(), .toggle()`  
`$('button').click(() => { $('h1').toggle(); });` this is a very sudden sort of disappearance and appearance

`.fadeOut();` : reduce the opacity of selected item, then hide it  
`.fadeIn()`, `.fadeToggle()`

`.slideUp()`, `.slideDown()`, `.slideToggle()`: collapses selected elements. be useful for a drop down menu

`.animate()` : define some custom CSS that you want to gradually animate towards  
`$('button').click(() => { $('h1').animate({ opacity: 0.5 }); });`  
animate method is that in between the curly braces, you can only add the CSS rules that  
have a `numeric value`.

`$('button').click(() => { $('h1').animate({ margin: '20%' }); });` 🙆🏻‍♀️ (include it as a string!), number `20` means 20px
`$('button').click(() => { $('h1').animate({ color: red }); });` 🙅🏻‍♀️ impossible

animations happen more than one -> chain them together

```
$('button').click(() => {
  $('h1').slideUp().slideDown().animate({ opacity: 0.5 });
});
```
