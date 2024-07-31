//code taken from this site! https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript//

function toggleTheme() {
	var sheet = document.getElementsByClassName("theme")[0];
	if (sheet.getAttribute("href") == "/blog/light.css") {
		sheet.setAttribute("href", "/blog/dark.css");
		localStorage.setItem("theme", "/blog/dark.css");
	} else {
		sheet.setAttribute("href", "/blog/light.css");
		localStorage.setItem("theme", "/blog/light.css");
	}
}

window.onload = checkTheme();

function checkTheme() {
	var sheet = document.getElementsByClassName("theme")[0];
	var localTheme = localStorage.getItem("theme");
	sheet.setAttribute("href", localTheme);
	if (localTheme == null) {
		sheet.setAttribute("href", "/blog/light.css");
	}
}
