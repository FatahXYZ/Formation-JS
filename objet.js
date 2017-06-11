





function usine(nbObjets)
{
	var scooter = [];

	for (var i = 0; i <= nbObjets; i++) {
	
	scooter[i] = {
		marque : 'Piaggio',
		modèle : 't-max',
		année : 2010,
		couleur : 'rouge',
		prix : 12000.00 + i,
		tabPrix : [18000, 17000, 16000, 12000]
	}
}
	return scooter;

}

var tab = usine(10);

console.log(usine(10)[9]);

//console.log(usine(10)[9]);