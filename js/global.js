tocbot.init({
	// Where to render the table of contents.
	tocSelector: '.toc-body',
	// Where to grab the headings to build the table of contents.
	contentSelector: '.article-body',
	// Which headings to grab inside of the contentSelector element.
	headingSelector: 'h3',
});

function tocToggle() {
	var x = document.getElementById("toc");
	if (x.style.display === "none") {
		x.style.display = "block";
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}