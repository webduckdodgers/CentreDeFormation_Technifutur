
#region Énoncé
//Dans la classe « Compte » :
//1.Supprimez la déclaration du type délégué « PassageEnNegatifDelegate »
//2. Changez le type de l’événement appelé « PassageEnNégatifEvent » en utilisant les délégué « Action » ou « Func » afin que notre code continue à fonctionner.
#endregion

// TESTS 
using Exo_Banque_10.Classes;
using Exo_Banque_10.Exceptions;
using Exo_Banque_10.Interfaces;

Personne titulaire1 = new Personne("Anne", "Onyme", new DateTime(1982, 1, 1));

Console.WriteLine($"Titulaire 1 : {titulaire1.Prenom} {titulaire1.Nom} est né(e) le {titulaire1.DateNaiss.ToShortDateString()}");

Courant courant1 = new Courant("0000000001", titulaire1, 250);
//courant1.Solde = 10000000; Interdit
Console.WriteLine($"Compte courant 1 : \nNumero : {courant1.Numero}\nLigne De Crédit : {courant1.LigneDeCredit}\nSolde : {courant1.Solde}\nTitulaire : {courant1.Titulaire.Prenom}");

try
{
    courant1.Depot(-100);
}
catch (SoldeInsuffisantException e)
{
    Console.WriteLine($"SoldeInsuffisantException : {e.Message}");
}
catch (ArgumentOutOfRangeException e)
{
    Console.WriteLine($"ArgumentOutOfRangeException : {e.Message}");
}

courant1.Depot(100);

try
{
    courant1.Retrait(351);
}
catch (SoldeInsuffisantException e)
{
    Console.WriteLine($"SoldeInsuffisantException : {e.Message}");
}
catch (ArgumentOutOfRangeException e)
{
    Console.WriteLine($"ArgumentOutOfRangeException : {e.Message}");
}

courant1.Depot(100);
courant1.Retrait(150);
Console.WriteLine();

//*************************************************************************
Banque banque = new Banque();
banque.Nom = "Techni Banque";
banque.Ajouter(courant1);

Personne titulaire2 = new Personne("Della", "Duck", new DateTime(1988, 6, 13));

Courant compteDella1 = new Courant("4200000001", titulaire2, 500);
banque.Ajouter(compteDella1);
compteDella1.Depot(3_500);

Courant compteDella2 = new Courant("4200000002", titulaire2, 1_000);
banque.Ajouter(compteDella2);
compteDella2.Retrait(500);

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
banker.Retrait(200);


object o1 = new Courant("4200000003", titulaire2, 1_000);

if (o1 is IBanker)
{
    IBanker b1 = (IBanker)o1;
    b1.Depot(1_000_000);
}

Console.WriteLine("");
