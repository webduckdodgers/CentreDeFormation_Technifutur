using Exo_Linq_Context;
using System.Linq;

Console.WriteLine("Exercice Linq");
Console.WriteLine("*************");
Console.WriteLine();

DataContext DB = new DataContext();

#region Exo 1.1
/*  
    Ecrire une requête pour présenter, pour chaque étudiant, le nom de l’étudiant,
    la date de naissance, le login et le résultat pour l’année de l’ensemble des étudiants.
*/

Console.Clear();

var requete_1 = from e in DB.Students
                select new
              {
                e.First_Name,
                e.Last_Name,
                e.BirthDate,
                e.Login,
                e.Year_Result
              };

foreach (var montrer in requete_1)
{
    Console.WriteLine($"Nom: {montrer.First_Name.ToUpper()} {montrer.Last_Name}");
    Console.WriteLine($"Date de naissance: {montrer.BirthDate.ToShortDateString()}");
    Console.WriteLine($"Login: {montrer.Login}");
    Console.WriteLine($"Résultat pour l'année: {montrer.Year_Result}");
    Console.WriteLine();
}
#endregion

#region Exo 1.2
/*  
    Ecrire une requête pour présenter, pour chaque étudiant, son nom complet (nom
    et prénom séparés par un espace), son id et sa date de naissance.
*/

Console.Clear();

var requete_2 = from e in DB.Students
                select new
              {
                  e.Section_ID,
                  e.First_Name,
                  e.Last_Name,
                  e.BirthDate,
              };

foreach (var montrer in requete_2)
{
    Console.WriteLine($"ID: {montrer.Section_ID}");
    Console.WriteLine($"Nom: {montrer.First_Name.ToUpper()} {montrer.Last_Name}");
    Console.WriteLine($"Date de naissance: {montrer.BirthDate.ToLongDateString()}");
    Console.WriteLine();
}
#endregion

#region Exo 1.3
/*  
    Ecrire une requête pour présenter, pour chaque étudiant, dans une seule chaine de
    caractère l’ensemble des données relatives à un étudiant séparées par le symbole |.
*/

Console.Clear();

var requete_3 = from e in DB.Students
                select new
                {
                    e.Section_ID,
                    e.First_Name,
                    e.Last_Name,
                    e.BirthDate,
                };

foreach (var montrer in requete_3)
{
    Console.WriteLine
        (
            "ID: "+montrer.Section_ID+" | " +
            "Nom: "+montrer.First_Name.ToUpper()+" "+montrer.Last_Name+" | " +
            "Date de naissance: "+montrer.BirthDate.ToShortDateString()
        );
    Console.WriteLine();
}
#endregion

#region Exo 2.1
/*  
    Pour chaque étudiant né avant 1955, donner le nom, le résultat annuel et le statut.
    Le statut prend la valeur « OK » si l’étudiant à obtenu au moins 12 comme résultat annuel
    et « KO » dans le cas contraire.
*/

Console.Clear();

var requete_4 = from e in DB.Students
                where e.BirthDate.Year < 1955
                select new
                {
                    e.Last_Name,
                    e.Year_Result,
                    Statut = (e.Year_Result >= 12) ? "OK" : "KO"
                };

foreach (var montrer in requete_4)
{
    Console.WriteLine($"{montrer.Last_Name} | {montrer.Year_Result} | {montrer.Statut}\n");
}
#endregion

#region Exo 2.2
/*  
    Donner pour chaque étudiant entre 1955 et 1965 le nom, le résultat annuel et la
    catégorie à laquelle il appartient. La catégorie est fonction du résultat annuel obtenu ;
    un résultat inférieur à 10 appartient à la catégorie « inférieure », un résultat égal à 10 appartient
    à la catégorie « neutre », un résultat autre appartient à la catégorie « supérieure »
*/

Console.Clear();

var requete_5 = from e in DB.Students
                where e.BirthDate.Year >= 1955 && e.BirthDate.Year <= 1965 
                select new
                {
                    e.Last_Name,
                    e.Year_Result,
                    Categorie = (e.Year_Result < 10) ? "inférieure" :
                                (e.Year_Result == 10) ? "neutre" : "supérieure"
                };

foreach (var montrer in requete_5)
{
    Console.WriteLine($"{montrer.Last_Name}\t | {montrer.Year_Result}\t | {montrer.Categorie}\n");
}
#endregion

#region Exo 2.3
/*  
    Ecrire une requête pour présenter le nom, l’id de section et de tous les étudiants
    qui ont un nom de famille qui termine par r.
*/

Console.Clear();

var requete_6 = from e in DB.Students
                where e.Last_Name.EndsWith("r")
                select new
                {
                    e.Last_Name,
                    e.Section_ID
                };

foreach (var montrer in requete_6)
{
    Console.WriteLine($"{montrer.Last_Name}\t | {montrer.Section_ID}\n");
}
#endregion

#region Exo 2.4
/*  
    Ecrire une requête pour présenter le nom et le résultat annuel classé par résultats
    annuels décroissant de tous les étudiants qui ont obtenu un résultat annuel
    inférieur ou égal à 3.
*/

Console.Clear();

var requete_7 = from e in DB.Students
                where e.Year_Result <= 3
                orderby e.Year_Result descending
                select new
                {
                    e.Last_Name,
                    e.Year_Result
                };

foreach (var montrer in requete_7)
{
    Console.WriteLine($"{montrer.Last_Name}\t | {montrer.Year_Result}\n");
}
#endregion

#region Exo 2.5
/*  
    Ecrire une requête pour présenter le nom complet (nom et prénom séparés par un
    espace) et le résultat annuel classé par nom croissant sur le nom de tous les étudiants
    appartenant à la section 1110.
*/

Console.Clear();

var requete_8 = from e in DB.Students
                where e.Section_ID == 1110
                orderby e.Section_ID descending
                select new
                {
                    e.Last_Name,
                    e.First_Name,
                    e.Year_Result
                };

foreach (var montrer in requete_8)
{
    Console.WriteLine($"{montrer.Last_Name} {montrer.First_Name}\t | {montrer.Year_Result}\n");
}
#endregion

#region Exo 2.6
/*  
    Ecrire une requête pour présenter le nom, l’id de section et le résultat annuel
    classé par ordre croissant sur la section de tous les étudiants appartenant aux sections 1010
    et 1020 ayant un résultat annuel qui n’est pas compris entre 12 et 18.
*/

Console.Clear();

var requete_9 = from e in DB.Students
                where (e.Section_ID == 1010 || e.Section_ID == 1020) &&
                      !(e.Year_Result >= 12 && e.Year_Result <= 18)
                orderby e.Section_ID ascending
                select new
                {
                    e.Last_Name,
                    e.Section_ID,
                    e.Year_Result
                };

foreach (var montrer in requete_9)
{
    Console.WriteLine($"{montrer.Last_Name}\t | {montrer.Section_ID}\t | {montrer.Year_Result}\n");
}
#endregion

#region Exo 2.7
/*  
    Ecrire une requête pour présenter le nom, l’id de section et le résultat annuel sur
    100 (nommer la colonne ‘result_100’) classé par ordre décroissant du résultat de tous les
    étudiants appartenant aux sections commençant par 13 et ayant un résultat annuel sur 100
    inférieur ou égal à 60.
*/

Console.Clear();

var requete_10 = from e in DB.Students
                where e.Section_ID.ToString().StartsWith("13") && e.Year_Result * 5 <= 60
                orderby e.Year_Result descending
                select new
                {
                    e.Last_Name,
                    e.Section_ID,
                    Result = e.Year_Result * 5,
                };

foreach (var montrer in requete_10)
{
    Console.WriteLine($"{montrer.Last_Name}\t | {montrer.Section_ID}\t | {montrer.Result}\n");
}
#endregion

#region Exo 3.1
/*  
    Donner le résultat annuel moyen pour l’ensemble des étudiants.
*/

Console.Clear();

var requete_11 = DB.Students.Average(e => e.Year_Result);

Console.WriteLine(requete_11);

#endregion

#region Exo 3.2
/*  
    Donner le plus haut résultat annuel obtenu par un étudiant.
*/

Console.Clear();

var requete_12 = DB.Students.Max(e => e.Year_Result);

Console.WriteLine(requete_12);

#endregion

#region Exo 3.3
/*  
    Donner la somme des résultats annuels.
*/

Console.Clear();

var requete_13 = DB.Students.Sum(e => e.Year_Result);

Console.WriteLine(requete_13);

#endregion

#region Exo 3.4
/*  
    Donner le résultat annuel le plus faible.
*/

Console.Clear();

var requete_14 = DB.Students.Min(e => e.Year_Result);

Console.WriteLine(requete_14);

#endregion

#region Exo 3.5
/*  
    Donner le nombre de lignes qui composent la séquence « Students »
    ayant obtenu un résultat annuel impair.
*/

Console.Clear();


#endregion

#region Exo 4.1
/*  
    Donner pour chaque section, le résultat maximum (« Max_Result »)
    obtenu par les étudiants.
*/

Console.Clear();



#endregion