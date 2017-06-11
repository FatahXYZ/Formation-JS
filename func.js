




//définition de la fonction (version 1)
function truc(){
	console.log("truc");
}



//définition d'une fonction avec paramètres/arguments (version 1)

var addition = function(a,b){
	return a+b;
}

//définition d'une fonction avec paramètres/arguments (version 2)

function multiplication(a,b){ return a*b;}


//appel de la fonction
//truc();

//bonjour();

var resultat = addition(10,4);
//console.log(resultat);

resultat = multiplication(5,9);
//console.log(resultat);




var f; //var f = null;

if (!f) console.log('f n\'a pas de valeur : c\'est la raison '
	+'pour laquelle ce message s\'affiche');



var x;

//on suppose qu'on utilise un formulaire pour avoir la valeur de x


x = x || 12; //au cas où x = null, on lui impose une valeur de 12 par défaut



if(x) console.log(x);









function lineaire(a,b){
	function f(x){return a*x + b}
	return f;
}

console.log(lineaire(2,5)(10));




//fonctions anonymes


//définition de la fonction (version 2)
var Bonjour = function(){
	console.log("Bonjour!");
}


function auRevoir(){
	console.log("Au revoir");
}

var salut = function(f,g){
	if(f) f();
	console.log('Ca va?');
}


var test = function(){
	console.log('test')
}

console.log();
console.log();


var jabbaTheHut = {
 rire : function() { console.log("ho ho ho ho"); }
}
jabbaTheHut.rire();


var scooter = {
	name : 't-max',
	year : 2010,
	price : 12000.00,
	roar: function(){return 'vroum';},
	speech : function(feature, price){
		return 'Ce scooter bénéficie du ' + feature 
			+ ' et vaut donc '+ price+ ' euros.';
	}
}

console.log(scooter.roar());

console.log();
console.log();

console.log(scooter.speech('kit piéton', 20000));











































