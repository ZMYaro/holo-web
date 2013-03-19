#Holo Web

Holo Web is a few stylesheets that attempt to imitate the Android 4 “Holo” themes.


##Holo-ify your site
If you want to Holo-ify HTML elements on your page, you just need to include two files:
* “holo-base-elements.css”, which defines the sizes of the elements
* “holo-light-elements.css” OR “holo-dark-elements.css”, which will color the page like the corresponding Holo theme

##Add Holo widgets
You can use widgets like action bars (currently available) and tabs (coming soon) by adding other stylesheets and specifying classes:
* “holo-base-widgets.css”, which defines the sizes of the elements
* “holo-light-widgets.css” OR “holo-dark-widgets.css”, which will color the widgets like the corresponding Holo theme
* To add an action bar, add a `<header>` element with the class `holo-actionBar`: `<header class="holo-actionBar">` (use a `<footer>` element for a bottom action bar)
Note: adding the base stylesheet will automatically add padding for action bars

##Make it work on mobile
One great use of Holo Web is to make mobile web sites look like native Android apps.  Holo Web includes a script to make sure all widgets respond to touch properly in mobile WebKit (Mobile Safari, Android Browser, Chrome for Android).
* Make sure you include the “holo-touch.js” file
* Add a script tag to your page: `<script type="text/javascript" src="holo-touch.js"></script>`

##Mix and match
You do not need to keep all the CSS as it is.  You can pull out just the styles you want or merge the stylesheets into one file.  It is all up to you how you use this (although I would appreciate it if you gave me credit).

##The Roboto Font
holo-base-elements.css imports basic Roboto by default.  If you need more weights or character sets, you can load them through [Google Web Fonts](http://google.com/fonts#UsePlace:use/Collection:Roboto).

##Known issues
* Certain form elements (checkboxes, radio buttons) are only properly themed in WebKit-based browsers (e.g. Safari, Chrome) and partially themed in Presto (older Opera) and the latest version of Trident (IE10).
* Range sliders are not supported in the the stable and beta versions of Firefox as of 2013-03-18.

The above issues are the result of browser limitations or lack of documented solutions.