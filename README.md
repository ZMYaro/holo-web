#Holo Web

Holo Web is a few stylesheets that attempt to imitate the Android 4 “Holo” themes.


##Holo-ify your site
If you want to Holo-ify HTML elements on your page, you just need to include two files:
* “holo-base-elements.css”, which defines the sizes of the elements
* One of the following, which will color the page like the corresponding Holo theme:
    - “holo-hc-dark-elements.css” (Honeycomb Holo Dark)
    - “holo-hc-light-elements.css” (Honeycomb Holo Light)
    - “holo-ics-dark-elements.css” (Ice Cream Sandwich Holo Dark)
    - “holo-ics-light-elements.css” (Ice Cream Sandwich Holo Light)

##Add Holo widgets
You can use widgets like action bars (currently available) and tabs (coming soon) by adding other stylesheets and specifying classes:
* “holo-base-widgets.css”, which defines the sizes of the elements
* One of the following, which will color the widgets like the corresponding Holo theme:
    - “holo-hc-dark-widgets.css” (Honeycomb Holo Dark)
    - “holo-hc-light-widgets.css” (Honeycomb Holo Light)
    - “holo-ics-dark-widgets.css” (Ice Cream Sandwich Holo Dark)
    - “holo-ics-light-widgets.css” (Ice Cream Sandwich Holo Light)
* To add an action bar, add a `<header>` element with the class `holo-actionBar`: `<header class="holo-actionBar">` (use a `<footer>` element for a bottom action bar)
Note: adding the base stylesheet will automatically add padding for action bars

##Make it work on older mobile browsers
One great use of Holo Web is to make mobile web sites look like native Android apps.  Holo Web includes a script to make sure all widgets respond to touch properly in mobile WebKit (Mobile Safari, Android Browser, Chrome for Android).
* Make sure you include the “holo-touch.js” file
* Add a script tag to your page: `<script type="text/javascript" src="holo-touch.js"></script>`

##The Roboto Font
holo-base-elements.css imports basic Roboto by default.  If you need more weights or character sets, you can load them through [Google Web Fonts](http://google.com/fonts#UsePlace:use/Collection:Roboto).

##Known issues
* Certain form elements (checkboxes, radio buttons) are only properly themed in WebKit-based browsers (e.g. Safari, Chrome) and partially themed in Presto (older Opera) and the latest version of Trident (IE10).
* Range sliders are not supported in the the stable and beta versions of Firefox as of 2013-03-18.

The above issues are the result of browser limitations or lack of documented solutions.

##Contributing to Holo Web
Contributions to this project are welcome.  Please follow standard [commit guidelines](http://git-scm.com/book/ch5-2.html#Commit-Guidelines).
