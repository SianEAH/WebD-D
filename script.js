/*Sian*/
function changeColour (){
	document.getElementById("topheading").style.backgroundColor = "DarkOliveGreen";
}

/*Sian*/
function openForm (){
	document.getElementById("form").style.display = "block";
}

/*Sian*/
var options = ["Turn off anything you are not using", "Switch to LED light bulbs", "Switch to energy-efficient appliances", "Consider switching to renewable energy resources", "Walk, cycle or take public transport more", "Consider an electric vehicle, if you do drive", "Make sure you put your waste in the correct bins", "Eat less meat", "Try and waste less food", "Push your governments for action", "Reduce unnecessary flying", "Have a garden or plants, if that is an option", "Invest in insulation, to prevent energy loss and reduce spending", "Invest in high efficiency windows, to prevent energy loss in your home", "If you can not invest in high efficiency windows, try things like reflective blinds, insulated curtains or window film/tape. This is done to prevent drafts and energy loss in your house", "Have a programmable thermostat installed", "Shorten your shower time and reduce baths", "Wash your clothes on a cooler setting", "Bundle your online purchases", "Upcycle your clothing", "Learn about the practices of the companies you buy from and possibly reconsider", "Repair your clothing, instead of throwing it away", "Eat seasonally" ];
/*Sian*/
function randomOption () {
	var randomChoice = Math.floor(Math.random() * options.length);
	var climateHelp = options[randomChoice];
	document.getElementById("givenChoice").innerHTML = climateHelp;
}
