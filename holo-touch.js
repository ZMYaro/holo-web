/* Script for triggering element active states when touched
 * Supplement to the Holo Web CSS library
 *
 * Copyright 2012-2015 Zachary Yaro
 * Released under the MIT license
 * http://holo.zmyaro.com/LICENSE.txt
 */

window.addEventListener("load", function(e) {
	// Do not run the script on Chrome 32 or higher.
	/*if(/Chrome\/[3-9][2-9]/.test(navigator.userAgent)) {
		return;
	}*/
	
	// Create an array of all input elements.
	var inputElems = Array.prototype.slice.call(document.getElementsByTagName("button")).concat(
		Array.prototype.slice.call(document.getElementsByTagName("select"))).concat(
		Array.prototype.slice.call(document.getElementsByTagName("input")));
	
	// If they can be found, identify all elements with role="button".
	if(document.querySelectorAll) {
		inputElems = inputElems.concat(
			Array.prototype.slice.call(document.querySelectorAll("*[role=\"button\"]")));
	}
	
	var elemTypes = ["button", "select"];
	var inputTypes = ["button", "checkbox", "radio", "range", "reset", "submit"];
	
	for(var i = 0; i < inputElems.length; i++) {
		// If the element is a supported form element,
		if(elemTypes.indexOf(inputElems[i].tagName.toLowerCase()) !== -1 ||
				// Or the element is a supported <input> type, 
				inputTypes.indexOf(inputElems[i].type.toLowerCase()) !== -1 ||
				// Or the element has role="button",
				(inputElems[i].getAttribute("role") && inputElems[i].getAttribute("role").toLowerCase() === "button")) {
			// Add the touch event listeners.
			inputElems[i].addEventListener("touchstart", makeActive, false);
			inputElems[i].addEventListener("touchend", makeInactive, false);
			inputElems[i].addEventListener("touchcancel", makeInactive, false);
		}
	}
	
	
	/**
	 * Adds the “active” class to the touched element
	 * @param {TouchEvent} e
	 */
	function makeActive(e) {
		if(!!e.srcElement.classList) { // use classList API if available
			e.srcElement.classList.add("active");
		} else {
			e.srcElement.className += " active";
		}
		
	}
	
	/**
	 * Removes the “active” class from the touched element
	 * @param {TouchEvent} e
	 */
	function makeInactive(e) {
		if(!!e.srcElement.classList) { // use classList API if available
			e.srcElement.classList.remove("active");
		} else {
			e.srcElement.className = e.srcElement.className.replace(/\s*active/g, "");
		}
		
	}
}, false);

