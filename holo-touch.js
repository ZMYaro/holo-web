function addEvents() {
	var inputs = Array.prototype.slice.call(document.getElementsByTagName("button")).concat(Array.prototype.slice.call(document.getElementsByTagName("input")));
	for(var i = 0; i < inputs.length; i++) {
		if(["button","select"].indexOf(inputs[i].tagName.toLowerCase()) != -1 || ["button","submit","reset","radio","checkbox"].indexOf(inputs[i].type.toLowerCase()) != -1) {
			inputs[i].addEventListener("touchstart", function(e) {
				if(!!e.srcElement.classList) { // use classList API if available
					e.srcElement.classList.add("active");
				} else {
					e.srcElement.className += " active";
				}
			}, false);
			inputs[i].addEventListener("touchend", function(e) {
				if(!!e.srcElement.classList) { // use classList API if available
					e.srcElement.classList.remove("active");
				} else {
					//e.srcElement.className.replace(/\s*active/g, "");
					e.srcElement.className = "";
				}
			}, false);
		}
	}
}

window.addEventListener("load", addEvents, false);
