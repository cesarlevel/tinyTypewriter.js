# tinyTypewriter.js

tinyTypewriter.js is just a small (1kb) piece of vanilla javascript that generates a typewriter effect.

## How to use

### HTML
```
<head>
  <script src="tinyTypewriter.js"></script>
</head>;
...
<h1>tiny<span id="typewritter">Your fallback text</span></h1>
```
### JS
```
const typewritter = document.querySelector("#typewriter");
tinyTypewriter(typewritter, {
  items: ['Size', 'Typewriter.js']  
});
```

### npm
```
npm install tiny-typewriter
```

## Options
| Option         | Default      |
| :------------- | :----------: |
| items | [] |
| typeSpeed | 500 |
| deleteSpeed | 50 |
| delayBetweenItems | 2000 |
| loop | true |
| startDelay | 0 |
| startsAtIndex | 0 |
| cursorChar | "|" |
| cursorCharBlinkSpeed | 500 |
| cursorCharBlinkTransitionSpeed | 0.15 |
| startOnView | true |
| startOnViewOffset | 0 |


```
tinyTypewriter(el, {
  items: ['Size', 'Typewritter.js'],
  typeSpeed: 100,
  deleteSpeed: 50,
  delayBetweenItems: 2000,
  loop: true,
  startDelay: 0,
  startsAtIndex: 0,
  cursor: true,
  cursorChar: "|",
  cursorCharBlinkSpeed: 500,
  cursorCharBlinkTransitionSpeed: 0.15,
  startOnView: true,
  startOnViewOffset: 0,
});
```
