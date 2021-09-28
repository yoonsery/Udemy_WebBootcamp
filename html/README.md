## HTML

HTML is the foundation of all websites  
HTML stands for Hypertext `Markup` Language

XML: Extensible Markup Language  
GML: Generalised Markup Language

HTML, XML, GML share a common history.

You can specify the layout and structure of your website by using HTML tags.

MDN: Mozilla Developer Network

recomment site to look up [devdocs.io](https://devdocs.io)

HTML Attribute: gives more information to the browser to specify modifications to that HTML

```html
<hr size="3" />
```

`size="3"`is HTML Attribute

The meta elements give extra metadata or associated data to HTML document

for the structure reason use `em` than `i` tag (same as use `strong` rather than `b`)

`tr` means table row, `td` means table data

```html
<table>
  <thead>
    <tr>
      <th>Dates</th>
      <th>Work</th>
    </tr>
  </thead>
  <tbody></tbody>
  <tfoot></tfoot>
  <tr>
    <td>2010 - 2013</td>
    <td>Hotel management</td>
  </tr>
  <tr>
    <td>2009</td>
    <td>Concert Assistant Director</td>
  </tr>
</table>
```

위처럼 `<thead>`에 넣지않고 `<table>`태그에 넣어도 똑같은 양식으로 보여준다 `<th>`태그때문에  
`<thead>`를 쓰는 이유는 만약 테이블이 길어서 스크롤을 해야한다면 `<thead>`에 있는 `<th>`는 위에 고정되어있는 역할을 한다

```html
<table>
  <tr>
    <th>Dates</th>
    <th>Work</th>
  </tr>
  <tr>
    <td>2010 - 2013</td>
    <td>Hotel management</td>
  </tr>
  <tr>
    <td>2009</td>
    <td>Concert Assistant Director</td>
  </tr>
</table>
```
