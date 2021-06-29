# tinyTypewriter.js

tinyTypewriter.js is just a small (1kb) piece of vanilla javascript that generates a typewriter effect.

## How to use

### CDN
```HTML
<head>
  <script src="https://unpkg.com/tiny-typewriter@latest/dist/tinyTypewriter.min.js"></script>
</head>
...
<h1>tiny<span id="typewritter">Your fallback text</span></h1>
```
```javascript
const typewritter = document.querySelector("#typewriter");
tinyTypewriter(typewritter, {
  items: ['Size', 'Typewriter.js']  
});
```

### NPM
```
npm install tiny-typewriter
```
```javascript
import tinyTypewriter from 'tiny-typewriter';

const typewritter = document.querySelector("#typewriter");
tinyTypewriter(typewritter, {
  items: ['Size', 'Typewriter.js']  
});
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
| cursorChar | "\|" |
| cursorCharBlinkSpeed | 500 |
| cursorCharBlinkTransitionSpeed | 0.15 |
| startOnView | true |
| startOnViewOffset | 0 |

### Example
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
