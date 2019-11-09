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

## Nested grid

```html
<section>

<div class="a">A</div>
<div class="b">B</div>
<div class="c">C</div>

<!------Nested grid------>
<div class="d">D
<div class="e">E</div>    
<div class="f">F</div>  
<div class="g">G</div>  
</div>
    
</section>

```

```css
section {
display: grid;
grid-gap: 0.2em;
grid-template-columns: repeat(6, [name]);
/* instead of "1fr" I write name*/
grid-template-rows: repeat(2, [name2] auto);
background: #bdc3c7;
height: 40em;
}

/*
SPAN: item will span accross provided nummber of tracks
(shorthand for grid-colum-start / grid-column-end)
*/

.a {
grid-column: name / span 2; /*START: "name" and its END will be: span 2 (accros 2 tracks)*/
grid-row: name2; /*first row*/
}

.b {
grid-column: name 3 / span 3; /*START: "name" 3 (span 3 to span accross 3 tracks (should be 2))*/
grid-row: name2; /* also first row*/
background: lime;
}

.c {
grid-column: name / span 2;
grid-row: name2 2; /* second row */
background: orange;
}

.d {
grid-column: name 3 / span 2;
grid-row: name2 2; /* also the second row */
background: cornflowerblue;
}

/*------------------------nested grid------------------------*/
.d {
display: grid;
grid-gap: 1em;
grid-column: name 3 / span 2;
grid-row: name2 2;
grid-template-columns: 1fr 1fr;
}

.e {
/*START: 1, END: 3 (span through 2 columns)*/
grid-column: 1 / 3;
grid-row: 1;
}

.f {
grid-column: 1;
grid-row: 2;
}

.g {
grid-column: 2;
grid-row: 2;
}

/*--------------------------------APPEARANCE STYLES--------------------------------*/
* {
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
}

div {
background: #1abc9c;
padding: 1.2em;
font-size: 1.5em;
color: white;
}

.d > * {
background: white;
color: black;
}
```

