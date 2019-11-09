# CSS Grid

## Terminology
* Grid lines - created when you define grid, can be accessed by the number
* Grid tracks - space between 2 grid lines, defined by grid template columns / rows
* Grid cells - space between grid lines
* Grid areas - consists of grid cells
* Grid gap - gap between cells
* Gutters - spacing between tracks


## Photo Gallery
```css
section {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
/*OR repeat(3, 1fr);*/
grid-gap: 1em;
}
```

```css
@media only screen and (max-width: 30em) {
section{
grid-template-columns: 1fr;
}
img{
width: 80%;
margin-left: auto;
margin-right: auto;
}
}

```


## Custome template
* Here we define custom areas using grid-area, and managing layout by changing letters in grid-template-area.
* Layout is set to 7 columns, and there are 7 letters in grid-template-areas
* Dot instead of the letter creates an empty cell

```html
<div class="wrapper">
   <div class="item1">3</div>
   <div class="item2">1</div>
    <div class="item3">3</div>
</div>
```

```css
.wrapper > div {
border: 2px solid #e67e22;
padding: 1em;
color: #fff;
}
.wrapper {
display: grid;
grid-template-columns: repeat(7,1fr);
grid-template-rows: 100px 100px;
grid-template-areas:
"a a a b c c c"
"a a a b c c c";
background: #9EBDD5;
}

.item1 {
grid-area: a;
}
.item2 {
grid-area: b;
}
.item3{
grid-area: c;
}
```

