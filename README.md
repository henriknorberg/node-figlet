Node Figlet
========

    _    ____   ____ ___ ___      _    ____ _____ 
   / \  / ___| / ___|_ _|_ _|    / \  |  _ \_   _|
  / _ \ \___ \| |    | | | |    / _ \ | |_) || |  
 / ___ \ ___) | |___ | | | |   / ___ \|  _ < | |  
/_/   \_\____/ \____|___|___| /_/   \_\_| \_\|_|  
                                                  
for node.js. 

Remember to install Figlet from http://www.figlet.org or your favourite package manager that is not NPM. 

Ubuntu:

```
sudo apt-get install figlet

```

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