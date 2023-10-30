
#region Énoncé
//Créer une classe « Banque » qui gérera les comptes de la banque
//Cette classe devra implémenter :
// - Les propriétés :
//  • Nom (string) - Nom de la banque
// - Un indexeur retournant un compte sur base de son numéro.
// - Les méthodes :
//  • void Ajouter(Courant compte)
//  • void Supprimer(string Numero)
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
