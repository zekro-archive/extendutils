 <div align="center">
     <h1>~ extendutils ~</h1>
     <strong>A small library for extended string and array functions</strong><br><br>
     <a href="https://www.npmjs.com/package/extendutils" ><img src="https://img.shields.io/npm/v/extendutils.svg" /></a>&nbsp;
     <a href="https://www.npmjs.com/package/extendutils" ><img src="https://img.shields.io/npm/dt/extendutils.svg" /></a>

 </div>

---

```
npm install extendutils --save
```

---

# Usage


### `String.prototype.contains(content, *casesensitive)`

> Tests if the string contains another string or a string of an array.

| Parameter | Type | Optional (Default) | Description |
|-----------|------|--------------------|-------------|
| content | string / string[] | no | sequence / array which needs to be containing |
| csasesensitive | boolean | yes (false) | check content case sensitive or not |

Returns: **`boolean`**
*Containing state*

---

### `String.prototype.replaceAny(oldstring, *newstring)`

> Replace all entered strings with new strings or remove strings when no new string is defined.

| Parameter | Type | Optional (Default) | Description |
|-----------|------|--------------------|-------------|
| oldstring | string | no | String that should be replaced |
| newstring | string | yes (`""` *remove*) | Replace with |

Returns: **`string`**
*String with replaced string sequences*

---

### `Array.prototype.contains(content, *casesensitive)`

> Tests if the array contains a string or a string of another array. Atention: It returns true if the input array contains ANY string of the query, and not the specific sequence of it!

| Parameter | Type | Optional (Default) | Description |
|-----------|------|--------------------|-------------|
| content | string / string[] | no | sequence / array which needs to be containing |
| csasesensitive | boolean | yes (false) | check content case sensitive or not |

Returns: **`boolean`**
*Containing state*
