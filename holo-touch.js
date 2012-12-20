window.addEventListener("load", function(e) {
	var inputElems = Array.prototype.slice.call(document.getElementsByTagName("button")).concat(
		Array.prototype.slice.call(document.getElementsByTagName("select"))).concat(
		Array.prototype.slice.call(document.getElementsByTagName("input")));
	
	var elemTypes = ["button", "select"];
	var inputTypes = ["button", "checkbox", "radio", "range", "reset", "submit"];
	
	for(var i = 0; i < inputElems.length; i++) {
		if(elemTypes.indexOf(inputElems[i].tagName.toLowerCase()) != -1 || inputTypes.indexOf(inputElems[i].type.toLowerCase()) != -1) {
			inputElems[i].addEventListener("touchstart", function(e) {
				if(!!e.srcElement.classList) { // use classList API if available
					e.srcElement.classList.add("active");
				} else {
					e.srcElement.className += " active";
				}
			}, false);
			inputElems[i].addEventListener("touchend", function(e) {
				if(!!e.srcElement.classList) { // use classList API if available
					e.srcElement.classList.remove("active");
				} else {
					e.srcElement.className = e.srcElement.className.replace(/\s*active/g, "");
				}
			}, false);
		}
	}
}, false);
