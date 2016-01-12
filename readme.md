# Overview

This is a simple "site" that I build that allow you to find the name of Dutch county based on the postal code.

# Developing
**This project asumes that you have grunt *globally* installed. If this is not the case please execute the following command:** 
(*On Unix based systems you need root rights*)

`npm install -g grunt` 

During development you should execute `grunt build`. This copies everything from the source to the build folder. I reccomend starting a http-server in the build folder. To autoamate this processes, execute `grunt watch`.

If you want to create your own minified version for production, exectute `grunt dist`.

# Credits

This project uses the [Metro theme](http://metroui.org.ua/) by Sergey Pimenov. The photo in the background was taken by [Anthony Delanoix](https://stocksnap.io/photo/GEJ6ML9NHQ). This project also relies on the jQuery framework.