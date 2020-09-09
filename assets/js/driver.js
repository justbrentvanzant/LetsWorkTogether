// Made by Brent VanZant for anyone to use :).

//GLOBALS
const DATA_URL = 'https://docs.google.com/spreadsheets/d/1VXLRll-7_SS42bSLpAOQdpl2Epq0UFdSSQoZNuZMl64/edit?usp=sharing'
let internships;
let internshipsToShow;

function init(){
  initDataRetrevial();
}


//initializes reading and render of event info
function initDataRetrevial() {
  Tabletop.init( { key: DATA_URL,
                   callback: startPage,
                   simpleSheet: true } )
}

function startPage(data, tabletop) {
  
  // Store the data in variables scoped to this file.
  storeData(data);

  // Render the data.
  var body = document.getElementById("infoWrapper");
  renderData(body);
}

function storeData(data){
  internships = data;
  internshipsToShow = internships;
}

function addDisplayEntry(parentElement, dataId) {
	var item = document.createElement("div"); 
	var company = document.createElement("div"); 
	company.innerHTML = internshipsToShow[dataId].company;	
	var title = document.createElement("div"); 
	title.innerHTML = internshipsToShow[dataId].title;
	var tags = document.createElement("div"); 
	tags.innerHTML = internshipsToShow[dataId].tags;
	var link = document.createElement("div");
	link.innerHTML= internshipsToShow[dataId].link;
	item.appendChild(company);
	item.appendChild(title);
	item.appendChild(tags);
	item.appendChild(link);
	parentElement.appendChild(item);
}

function renderData(parentElement){
	while (parentElement.firstChild) {
    	parentElement.removeChild(parentElement.firstChild);
  	}
  	for (var i = 0; i < internships.length; i++) {
		addDisplayEntry(parentElement,i);
	}
}

window.addEventListener('DOMContentLoaded', init);
