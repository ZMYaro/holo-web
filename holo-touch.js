function addEvents() {
	var inputs = Array.prototype.slice.call(document.getElementsByTagName("button")).concat(Array.prototype.slice.call(document.getElementsByTagName("input")));
	for(var i = 0; i < inputs.length; i++) {
//		if(inputs[i].tagName.toLowerCase() == "button" || inputs[i].type.toLowerCase() == "button" || inputs[i].type.toLowerCase() == "submit" || inputs[i].type.toLowerCase() == "reset") {
			inputs[i].addEventListener("touchstart", function(e) {
			//inputs[i].ontouchstart = function(e) {
				//e.srcElement.classList.add("active");
				e.srcElement.className += " active";
			}, false);
			//};
			//inputs[i].addEventListener("touchend", function(e) {
			inputs[i].ontouchend = function(e) {
				//e.srcElement.classList.remove("active");
				//e.srcElement.className.replace(/\s*active/g, "");
				e.srcElement.className = "";
			//}, false);
			};
//		}
	}
}

window.addEventListener("load", addEvents, false);
