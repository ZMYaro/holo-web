#Holo Web

Holo Web is a few stylesheets that attempt to imitate the Android 4 “Holo” themes.


##Holo-ify your site
If you want to Holo-ify HTML elements on your page, you just need to include two files:
* “holo-base-elements.css”, which defines the sizes of the elements
* “holo-light-elements.css” OR “holo-dark-elements.css”, which will color the page like the corresponding Holo theme
Note: Certain form elements (checkboxes, radio buttons) are only themed in WebKit-based browsers (e.g. Safari, Chrome).  This is due to limitations in other browsers.

##Add Holo widgets
You can use widgets like action bars (currently available) and tabs (coming soon) by adding other stylesheets and specifying classes:
* “holo-base-widgets.css”, which defines the sizes of the elements
* “holo-light-widgets.css” OR “holo-dark-widgets.css”, which will color the widgets like the corresponding Holo theme
* To add an action bar, add a ```<header>``` element with the class “actionBar”: ```<header class="actionBar">``` (use a ```<footer>``` element for a bottom action bar)
Note: adding the base stylesheet will automatically add padding for action bars

##Make it work on mobile
One great use of Holo Web is to make mobile web sites look like native Android apps.  Adding this script 
* Make sure you include the “holo-touch.js” file
* Add a script tag to your page: ```<script type="text/javascript" src="holo-touch.js"></script>```

##Mix and match
You do not need to keep all the CSS as it is.  You can pull out just the styles you want or merge the stylesheets into one file.  It is all up to you how you use this (although I would appreciate it if you gave me credit).


##The Roboto Font
You can also include “roboto.css” and the “roboto” folder if you want the Android 4 “Roboto” font used on your Holo-themed page.  This will import the font if the user does not have it installed.

Enjoy!
