# bistek-javascript-repository
 packages ig idk

## how do i use
simple, just include this code in your html file
```html
<script>
const bjrPackages = ["package1","package2"]
</script>
<script src="https://cdn.jsdelivr.net/gh/bistek/bistek-javascript-respository/recieve.js">
```

## how do i upload my packages
just open a pr and add your package name and a link to it in the `packages.json` file.

this is the format
```json
"packagename": [
    "source code (one line with semicolons)/cdn link (using jsdeliver or something)",
    0 // set this to 0 if you're using one line javascript source (use terser to minify it or something) and 1 if you put in a cdn link
]
```

make sure you always put backslashes before quotation marks if you're putting the source code directly in the json file otherwise it will break the string