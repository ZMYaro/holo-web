window.addEventListener("load", function(e) {
	// Do not run the script on Chrome 32 or higher.
	/*if(/Chrome\/[3-9][2-9]/.test(navigator.userAgent)) {
		return;
	}*/
	
	// Create an array of all input elements.
	var inputElems = Array.prototype.slice.call(document.getElementsByTagName("button")).concat(
		Array.prototype.slice.call(document.getElementsByTagName("select"))).concat(
		Array.prototype.slice.call(document.getElementsByTagName("input")));
	
	var elemTypes = ["button", "select"];
	var inputTypes = ["button", "checkbox", "radio", "range", "reset", "submit"];
	
	for(var i = 0; i < inputElems.length; i++) {
		if(elemTypes.indexOf(inputElems[i].tagName.toLowerCase()) != -1 || inputTypes.indexOf(inputElems[i].type.toLowerCase()) != -1) {
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

