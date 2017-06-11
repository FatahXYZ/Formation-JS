var tab=[];

//on "remplit" le tableau
for (var i = 0; i < 10; i++) {
	tab[i] = i;
}


//Math.random() renvoie un nombre aléatoire entre 0 et 1
//Math.floor() donne la partie entière (pas chiffre après la virgule)
var x = Math.floor(Math.random()*10); 
var y = Math.floor(Math.random()*10); 





switch(x){
	case 0: console.log("x est nul");
	break;

	case 1: console.log("x vaut un");
	break;

	default: console.log("J'ai la flemme de lister les autres cas...");
}

 

while(y != x) {
	var text = (y < x)? "y est plus petit que x": "y est plus grand que x";
	console.log(text);
	y = Math.floor(Math.random()*10); 

}

console.log("Aaaah : x et y sont enfin égaux et valent " + x);



//boucle infinie

/*
do{
	console.log("truc")
} while (true);
*/


//création d'un objet
var obj = {};

obj['nom'] = 'Joe';
obj['age'] = 25;
obj['adresse'] = {
	'numero' : 7,
	'rue' : 'rue de la télé en panne',
	'code postal' : 75020,
	'Ville' : 'Paris'
}

console.log();
console.log(obj);






































