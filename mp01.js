//question 1

var tab = [];

for (var i=1; i <= 20; i++){

	if (i<=10) tab[i-1] = i;
	if (i > 10) tab[i-1] = i + ''; 
}

console.log(tab);
console.log();



//question 2
var chaine = tab.join(';');

console.log(chaine);


//question 3

var newTab = chaine.split(';');

console.log();
console.log(newTab);

var newTab2 = [];
for (var i = 0; i < newTab.length; i++) {
	newTab2[i] = parseInt(newTab[i]);
}

console.log();
console.log(newTab2);


//question 4
var tabPaire = [],
	tabImpaire = [];

for (var i = 0; i < tab.length; i++) {
	if (i%2 == 0) tabPaire.push(newTab2[i]);
	if (i%2 == 1) tabImpaire.push(newTab2[i]);
}

//Définition fonction croissant
function croissant(a,b){
	if (a < b) return -1;
	if (b < a) return 1;
	else return 0;
}



tabPaire = tabPaire.sort(croissant);
tabImpaire = tabImpaire.reverse();

console.log(tabPaire);
console.log(tabImpaire);


for (var i = 0; i < tab.length; i++) {
	tab[i] = (i%2 == 0) ? tabPaire.shift() : tabImpaire.shift();
}


console.log();
console.log(tab);


