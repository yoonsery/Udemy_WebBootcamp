### express에서 html 태그 보내는 방법

```js
res.write(`<h1>Heading Text</h1>`);
res.write(`<p>blah blah blah~</>`);

res.send();

// res.write를 여러개 쓰고 send를 마지막에 붙여주면 여러개의 html 태그를 보낼 수 있다
```

But keep using `res.write` or `res.sendFile` is painful 😔

## [EJS (Embedded JavaScript Templating)](https://ejs.co/)

Template EJS (SSR)  
⚠️ html 파일만 제공하는 서버로, 브라우저 클라이언트 외에 다른 클라이언트는 사용할 수 없다

### Tags

- `<%` : 'Scriptlet' tag, for control-flow, no output
- `<%_` : ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
- `<%=` : Outputs the value into the template (HTML escaped)
- `<%-` : Outputs the unescaped value into the template
- `<%#` : Comment tag, no execution, no output
- `<%%` : Outputs a literal '<%'
- `%>` : Plain ending tag
- `-%>` : Trim-mode ('newline slurp') tag, trims following newline
- `_%>` : ‘Whitespace Slurping’ ending tag, removes all whitespace after it
