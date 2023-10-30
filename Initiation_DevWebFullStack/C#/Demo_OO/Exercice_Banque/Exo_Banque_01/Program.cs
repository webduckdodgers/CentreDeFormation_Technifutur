
#region Énoncé
// 1. Créer une classe « Personne » qui devra implémenter
//◼ Les propriétés publiques :
//◼ Nom(string)
//◼ Prenom(string)
//◼ DateNaiss(DateTime) - date de naissance
// 2. Créer une classe « Courant » permettant la gestion d’un compte courant qui devra implémenter
//◼ Les propriétés publiques :
//◼ Numéro(string)
//◼ Solde(double) - Lecture seule
//◼ LigneDeCredit (double) -représentant la limite négative du compte strictement supérieur ou égale à 0
//◼ Titulaire (Personne)
//◼ Les méthodes publiques :
//◼ void Retrait(double Montant) //+Verif montant +Verif non dépassement ligne crédit
//◼ void Depot(double Montant) //+Verif montant
#endregion

// TESTS 
using Exo_Banque_01.Classes;

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
