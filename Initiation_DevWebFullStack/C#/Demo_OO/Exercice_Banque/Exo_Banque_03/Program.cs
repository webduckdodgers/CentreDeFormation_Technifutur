
#region Énoncé
//Surcharger l’opérateur « + » de la classe « Courant » afin qu’il retourne la somme, de type double, des soldes. Cependant, les soldes négatifs ne doivent pas être pris en compte.
//
//Ajouter une méthode « AvoirDesComptes » à la classe « Banque » recevant en paramètre le titulaire (Personne) qui calculera les avoirs de tous ses comptes en utilisant l’opérateur « + ».
#endregion

// TESTS 
using Exo_Banque_04.Classes;

Personne titulaire1 = new Personne();
titulaire1.Prenom = "Anne";
titulaire1.Nom = "Onyme";
titulaire1.DateNaiss = new DateTime(1982, 1, 1);

Console.WriteLine($"Titulaire 1 : {titulaire1.Prenom} {titulaire1.Nom} est né(e) le {titulaire1.DateNaiss.ToShortDateString()}");

Courant courant1 = new Courant();
courant1.Numero = "0000000001";
// Va afficher le message d'erreur et setup LigneDeCredit à 0
//courant1.LigneDeCredit = -2;
courant1.LigneDeCredit = 250;
courant1.Titulaire = titulaire1;
//courant1.Solde = 10000000; Interdit
Console.WriteLine($"Compte courant 1 : \nNumero : {courant1.Numero}\nLigne De Crédit : {courant1.LigneDeCredit}\nSolde : {courant1.Solde}\nTitulaire : {courant1.Titulaire.Prenom}");

courant1.Depot(-100);
courant1.Depot(100);
courant1.Retrait(-100);
courant1.Retrait(351);
courant1.Retrait(150);


//*************************************************************************
Banque banque = new Banque();
banque.Nom = "Techni Banque";
banque.Ajouter(courant1);

Personne titulaire2 = new Personne();
titulaire2.Prenom = "Della";
titulaire2.Nom = "Duck";
titulaire2.DateNaiss = new DateTime(1988, 6, 13);

Courant compteDella1 = new Courant();
compteDella1.Numero = "4200000001";
compteDella1.Titulaire = titulaire2;
compteDella1.Depot(3_500);
banque.Ajouter(compteDella1);

Courant compteDella2 = new Courant();
compteDella2.Numero = "4200000002";
compteDella2.Titulaire = titulaire2;
compteDella2.Depot(-500);
banque.Ajouter(compteDella2);

double avoirDella1 = banque.AvoirDesComptes(titulaire2);
Console.WriteLine($"Avoir de {titulaire2.Prenom} {titulaire2.Nom} : {avoirDella1}");


Personne titulaire2bis = new Personne();
titulaire2bis.Prenom = "Della";
titulaire2bis.Nom = "Duck";
titulaire2bis.DateNaiss = new DateTime(1988, 6, 13);

double avoirDella2 = banque.AvoirDesComptes(titulaire2bis);
Console.WriteLine($"Avoir de {titulaire2bis.Prenom} {titulaire2bis.Nom} : {avoirDella2}");
