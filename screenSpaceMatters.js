//document.body.style.border = "5px solid blue";
function deleteStuff() {
	var aTags = document.getElementsByTagName("a");
	var found = null;
	for (var i=0; i<aTags.length; i++) {
		if (aTags[i].href == "https://support.eji.org/give/153413/#!/donation/checkout") {
			found=aTags[i];
		} else {
			console.log(aTags[i].href);
		}
	}
	found.parentElement.parentElement.style.display='none';
	document.getElementsByClassName('css-8fn7rc')[0].style.marginTop='0px';
}

setInterval(deleteStuff, 100);
