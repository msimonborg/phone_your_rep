import ReactDOM from 'react-dom';
import CardList from './CardList';
import './apiInfo';


var apiData;

document.getElementById("submit").addEventListener("click", submit);

function submit(e){

	var lat = document.getElementById('lat').value;
	var lng = document.getElementById('lng').value;

	var container = document.getElementById('root');
	container.innerHTML = "";
	getURL(lat, lng);
}

function getURL(lat, lng){
	var request = new XMLHttpRequest();
	var url = `${apiUrl}reps?&lat=${lat}&long=${lng}`;

	request.open("GET", url);
	request.addEventListener("load", onLoad);
	request.addEventListener("error", onError);
	request.send();
}

function onLoad(){
	console.log("Success :)");
	apiData = JSON.parse(this.response);
	// Fixes US House of Representatives STATE-District to US House
	apiData.forEach((card) => {
		if(card.role.substring(0, 28) == "United States Representative"){ card.role = "United States Representative";}
	});

	// Render Card List!
	ReactDOM.render(
		<CardList data={apiData}/>,
		document.getElementById('root')
	);
}
function onError(){
	console.log("Failure :(");
}
