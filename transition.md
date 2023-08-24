## index.html

```html
<head>
    <meta name="view-transition" content="same-origin">
    <link rel="stylesheet" href="transition.css">
</head>

<h1>Transition</h1>

<a href="child.html">Child
<img class="img" src="https://images.macrumors.com/t/7d6Cybt3UieMpVSex6FyqO07VJg=/1600x900/smart/article-new/2022/02/foldable-macbook-astropad.jpg"/>
</a>

<style>
    img {
        width: 200px;
    }

    /*22:06:59 uncomment*/
</style>
```


## child.html

```html
<head>
    <meta name="view-transition" content="same-origin">
    <link rel="stylesheet" href="transition.css">
</head>

<h1>Detail</h1>
<img class="img detailImg" src="https://images.macrumors.com/t/7d6Cybt3UieMpVSex6FyqO07VJg=/1600x900/smart/article-new/2022/02/foldable-macbook-astropad.jpg"/>

<style>
    img {
        width: 800px;
    }
</style>
```



## transition.css

```css


@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fade-out {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@keyframes slide-to-left {
    from {
        transform: translateX(-4rem);
    }

    to {
        transform: translateX(0rem);
    }
}
/*22:18:00*/
@keyframes slide-to-right {
    from {
        transform: translateX(-4rem);
    }

    to {
        transform: translateX(0rem);
    }
}


.img {
    view-transition-name: card;
}

.detailImg {
    view-transition-name: card;
}


::view-transition-old(card){
    mix-blend-mode: normal;
}

::view-transition-new(card){
    mix-blend-mode: normal;
}

::view-transition-old(root){
    animation: fade-out 350ms cubic-bezier(0, 0, 0.2, 1), 
    slide-to-right 350ms cubic-bezier(0, 0, 0.2, 1);
}

::view-transition-new(root){
    animation: fade-in 350ms cubic-bezier(0, 0, 0.2, 1), 
    slide-to-left 350ms cubic-bezier(0, 0, 0.2, 1);
    mix-blend-mode: normal;
}





```
