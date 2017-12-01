 <div align="center">
     <h1>~ extendutils ~</h1>
     <strong>A small library for extended string and array functions</strong><br><br>
     <a href="https://www.npmjs.com/package/extendutils" ><img src="https://img.shields.io/npm/v/extendutils.svg" /></a>&nbsp;
     <a href="https://www.npmjs.com/package/extendutils" ><img src="https://img.shields.io/npm/dt/extendutils.svg" /></a>&nbsp;

 </div>

---

```
npm install extendutils --save
```

---

# Usage

```js
require('extendutils')

// Check if a string contains a string!
"One String".contains("Another String")
// > returns true

// Or do it case sensitive!
"One String".contains("Another string", true)
// > returns false

//  Or with arrays! (can also be case sensitive)
"One String".contains(["Another", "String"])
// > returns true

// Or check strings in arrays! (can also be case sensitive)
["Hey", "Ho"].contains("Hey")
// > returns true

// Or check if an array contains a string of an array! (can also be case sensitive)
["Hey", "Ho"].contains(["Yo", "Mo", "Ho"])
// > returns true
```
