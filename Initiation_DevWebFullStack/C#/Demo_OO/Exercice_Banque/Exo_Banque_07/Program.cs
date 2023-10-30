
#region Énoncé
/*
1. Ajoutez, dans la classe « Compte », deux constructeurs prenant en paramètre :
    1. Le numéro et le titulaire
    2. Le numéro, le titulaire et le solde (pour le cas d’une base de données)
2. Le cas échéant, ajoutez le ou les constructeurs aux classes « Courant » et « Epargne ».
3. Ajouter à la classe « Courant » un constructeur recevant en paramètre le numéro, le titulaire et la ligne de crédit.
4. Changer l’encapsulation des propriétés des classes « Personne », « Compte » et « Epargne » afin de spécifier leur mutateur en « private ».
5. Définir ce qu’il manque pour que le programme continue à tourner.
*/
#endregion

// TESTS 
using Exo_Banque_07.Classes;
using Exo_Banque_07.Interfaces;

Personne titulaire1 = new Personne("Anne", "Onyme", new DateTime(1982, 1, 1));

Console.WriteLine($"Titulaire 1 : {titulaire1.Prenom} {titulaire1.Nom} est né(e) le {titulaire1.DateNaiss.ToShortDateString()}");

Courant courant1 = new Courant("0000000001", titulaire1, 250);
//courant1.Solde = 10000000; Interdit
Console.WriteLine($"Compte courant 1 : \nNumero : {courant1.Numero}\nLigne De Crédit : {courant1.LigneDeCredit}\nSolde : {courant1.Solde}\nTitulaire : {courant1.Titulaire.Prenom}");

courant1.Depot(-100);
courant1.Depot(100);
courant1.Retrait(-100);
courant1.Retrait(351);
courant1.Retrait(150);
Console.WriteLine();

//*************************************************************************
Banque banque = new Banque();
banque.Nom = "Techni Banque";
banque.Ajouter(courant1);

Personne titulaire2 = new Personne("Della", "Duck", new DateTime(1988, 6, 13));

Courant compteDella1 = new Courant("4200000001", titulaire2);
compteDella1.Depot(3_500);
banque.Ajouter(compteDella1);

Courant compteDella2 = new Courant("4200000002", titulaire2, 1_000);
compteDella2.Retrait(500);
banque.Ajouter(compteDella2);

double avoirDella1 = banque.AvoirDesComptes(titulaire2);
Console.WriteLine($"Avoir de {titulaire2.Prenom} {titulaire2.Nom} : {avoirDella1}");


Personne titulaire2bis = new Personne("Della", "Duck", new DateTime(1988, 6, 13));

double avoirDella2 = banque.AvoirDesComptes(titulaire2bis);
Console.WriteLine($"Avoir de {titulaire2bis.Prenom} {titulaire2bis.Nom} : {avoirDella2}");


//*************************************************************************

Compte cpt1 = new Epargne("2400000002", titulaire2, 3_000, null);
cpt1.Retrait(1_000);

if (cpt1 is Epargne)
{
    Epargne e1 = (Epargne)cpt1;
    DateTime? t1 = e1.DateDernierRetrait;
}

if (cpt1 is Epargne e2)
{
    DateTime? t2 = e2.DateDernierRetrait;
}

Epargne? e3 = cpt1 as Epargne;
if (e3 != null)
{
    DateTime? t3 = e3.DateDernierRetrait;
}

Console.WriteLine(cpt1.AppliquerInteret());
Console.WriteLine(compteDella1.AppliquerInteret());


//*************************************************************************

ICustomer customer = compteDella2;
customer.Depot(500);

IBanker banker = compteDella2;
banker.Retrait(499);
double m1 = banker.AppliquerInteret();


object o1 = new Courant("4200000003", titulaire2, 1_000);

if (o1 is IBanker)
{
    IBanker b1 = (IBanker)o1;
    b1.Depot(1_000_000);
}

Console.WriteLine("");
