## CSS

`<link rel="stylesheet" href="css/style.css"` : exists in the css folder at the same hierarchical level as index.html  
`<link rel="stylesheet" href="/css/style.css"` : it is looking for the root of the website

if we specify CSS rules for the same property in different places which one is more important?  
`inline css` (inside of html tag) > `internal css` (style tag inside of html) > `external css` (style.css)

#### `z-index`

- `z-index` only works if your elements are positioned
- when you have an element that is not positioned,(haven't set it to absolute, relative or fixed,)  
  then the `z-index` does not apply

#### media query

- `@media <type> <feature>`
- `@media statement` it evaluate whether it's true or false, if it is true then inside of code will get carried out

## code refactoring

1. Readability
2. Modularity
3. Efficiency
4. Length

### Pick & Mix Selectors

- Multiple Selectors

```css
selector1,
selector2 {
}
```

- Hierarchical Selectors

```css
selector1 .selector2 {
}
```

- Combined Selectors

```css
selector1.selector2 {
}
```
