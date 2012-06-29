Node Figlet
========
ASCII art for node.js.

Example
=======

````javascript

    var figlet = require('figlet')
    figlet("Take Off!",["-c"], function (ascii){
        console.log(ascii.toString());    
    });

````
Output:

                     _____     _           ___   __  __   _
                    |_   _|_ _| | _____   / _ \ / _|/ _| | |
                      | |/ _` | |/ / _ \ | | | | |_| |_  | |
                      | | (_| |   <  __/ | |_| |  _|  _| |_|
                      |_|\__,_|_|\_\___|  \___/|_| |_|   (_)
                                                            


install
=======

With [npm](http://npmjs.org) do:

```
npm install node-figlet   
```

Prerequisite:
Figlet from http://www.figlet.org or your favorite package manager that is not NPM.

Ubuntu:

```
sudo apt-get install figlet

```