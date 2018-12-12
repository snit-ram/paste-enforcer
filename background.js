'use strict';

function readClipboard() {
	let input = document.createElement("input");
	document.body.appendChild(input);
	input.focus();
	
	document.execCommand("paste");
	let value = input.value;
	document.body.removeChild(input);
	return value
}

chrome.contextMenus.onClicked.addListener(function(info, tab){
	chrome.tabs.sendMessage(tab.id, {action: "paste", text: readClipboard()});
});

chrome.contextMenus.create({
	id: "paste",
	title: "Force paste!", 
	contexts:["editable"],
});