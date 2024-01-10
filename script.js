const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	addEventListener.keydown
	console.log(index.fruit)
	
//I want this to give the result back that the user selects from the array
//have an event listener that autofills suggestions as you go
//then have it return after the user enters

	// TODO
	//I need it to start to autofill with the different characters and as the index match the car
	//and then the chars will auto suggest based upon the things you are typing

	return results;
}
const search= [
	{name:'Apple'},
	{name:'Blueberry'},
	{name:'Grapes'},
	{name:'Oranges'}
	{name:'Pinneapple'},
	{name:'Bananas'},
	{name:'Peaches'},
	{name:'Pears'}
	{name:'Cantalope'}
	{name:'Parsimmons'},
	{name:'Figs'},
	{name:'Dates'},
	{name:'Pomegranate'}
	];
	
	const rechercheInput=document.getElementById('rechercheInput');
	rechercheInput.addEventListener('keyup',function(){
	const input = rechercheInput.value;
	const result = 
	articles.filter(item=>item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
	let suggestion ='';
	
	if(input != ''){
		result.forEach(resultItem =>
			suggestion += `<div class="suggestion">${resultItem.name}</div>`
			)
	}
	document.getElementById('suggestions').innerHTML=suggestion;
	})


function searchHandler(e) {
	"runsearchHandler()" {
		console.log(NAME OF SEARCH VARIABLE ENTERED) 
	}
}

function showSuggestions(results, inputVal) {

	const listed = results.map((result) =>{						//map "results" array into new "listed" array where each element is converted into HTML <li> elements containing each fruit string
		if(inputVal !== ''){								//only if the input value is not an empty string
		return "<li>" + result + "</li>";					//concatenate the <li> tags to the given element
		}
	});
suggestions.innerHTML = "<ul>" + listed.join('') + "</ul>";	//create and NEST (innerHTML) a <ul> element in the "suggestions" <div> that will contain the entire "listed" array of <li>'s, use join('') to remove commas
};

function useSuggestion(e) {
	input.value = e.target.innerText;							//when a suggestion is chosen and clicked, the target suggestion replaces the user input
	suggestions.innerHTML = '';									//clear the suggestions <div> after a suggestion is chosen
}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);



/I need an inline HTML form that then presents options, right? 