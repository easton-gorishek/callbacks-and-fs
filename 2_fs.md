# File System

The [fs](https://nodejs.org/api/fs.html) module provides functions
to interact with the file system. It is a built in module
(you **DON'T** need to install it).

## Read from a file

Read a file and print out its content.

* create a `readFile.js` file
* require [fs](https://nodejs.org/api/fs.html)
  * i.e. `const fs = require('fs');`
* use `fs.readFile` to read the contents of LAB.md
  * `fs.readFile('./LAB.md', (err, data) => {})`
* print LAB.md to the console
  * `console.log(data)`
* run your script with `node readFile.js`
* [specify encoding](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
  * if you don't specify an encoding `readFile` will pass
    your callback the raw bytes of the file
  * the encoding should be `utf8` (Unicode)

## Write a new file

Write a string into a new file.

* create a `writeFile.js` file
* require [fs](https://nodejs.org/api/fs.html)
* use `fs.writeFile` to write "I am writing!!!" to writing.txt
* run your script with `node writeFile.js`

## Copy a file

Copy a file by using `readFile` and passing its contents to `writeFile`.

* create a `copyFile.js` file
* require [fs](https://nodejs.org/api/fs.html)
* use `fs.readFile` to read the contents of LAB.md
* using the contents from `fs.readFile` use `fs.writeFile`
  to write LAB-copy.md
* run your script with `node copyFile.js`

## Copy file function

Extract the copy logic into a reusable and testable function.

* create a `copy.test.js` and `copy.js` file
* write a `copy(src, dst, callback)`
  function
  * src is the path to an existing file
  * dst is the path to put the copied file
  * write a failing test
    * call copy with a known src and dst
    * use `fs.readFile` to check that dst now contains file
    * `afterEach` use `fs.unlink` to delete the file created during testing
  * implement the `copy` function
* BONUS: write a
  `copyDir(src, dst, callback)` function
  * HINT: use `fs.readdir`

## Write json to file

* create a `jsonFs.js` and `jsonFs.test.js` file
  * write a `readJSON(pathToFile, callback)` function
    * Write a failing test
      * use `JSON.stringify` to turn JSON into a string
      * Use `fs.writeFile` to write JSON string to a file.
      * invoke the `readJSON` function and expect the written json
    * implement `readJSON`
      * use `fs.readFile` to read a file
      * use `JSON.parse` to parse JSON
      * invoke the callback function with the parsed JSON
  * write a `writeJSON(pathToFile, obj, callback)` function
    * Write a failing test
      * invoke the `writeJSON` function to create a new file
      * use `readJSON` to read the written file
      * expect the written JSON to equal the read JSON
    * implement `writeJSON`
      * use `JSON.stringify` to create a string from `obj`
      * use `fs.writeFile` to save the stringified object to `pathToFile`
      * invoke the callback function
* BONUS: handle errors
  * `readJSON`
    * what if the file doesn't exist?
    * what if the file doesn't include JSON?
    * what if `fs.readFile` errors
  * `writeJSON`
    * what if `obj` isn't JSON?
    * what if `fs.writeFile` errors
