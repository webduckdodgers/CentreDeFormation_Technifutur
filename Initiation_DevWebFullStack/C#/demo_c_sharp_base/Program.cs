using System.Net;
using System.Runtime.ConstrainedExecution;
using System.Runtime.Serialization;
using System;

namespace demo_c_sharp_base
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            /*  
                Partie 1 : Ajouter un nouveau projet à votre solution, nommé le exemple c# comme vous voulez....

                Partie 2 : Insérer le code de Loic dans ce projet lancé le pour qu'il fonctionne.

                Partie 3 : Par la suite dans une méthode ajoutée avec le même concept de création que votre formateur, déclarer des entier et des string (affiché dans la console),
                           la concaténation du int et du string trouver la troisième facon d'afficher des variable directmeent dans une chaine dans la console.
                           Voir "Console.WriteLine("{0} fois {1} = {2} ou {3}", 5, 10, 50, "Cinquante");" <- Une autre méthode bien plus belle existe.

                Partue 4 : Trouver le moyen de convertir un int en string et afficher le.

                Partue 5 : Trouver un exemple (hors cours) de l'utilisation de la méthode Convert, et de la méthode Parse (aller voir la documentation sur cette infos).

                Partue 6 : Créer une méthode, qui fait une additation d'entier !
                           Et une autre qui fait une addiation de nombre a virgule flottante.
                           Tout en considérant que vous devez dans chacune d'entre elle, utiliser, soit un convert soit un parse.
         
            
            // Partie 2 :


            // Partie 3 :

            string bonjour = "Salut les gars";
            Console.WriteLine(bonjour);
            bonjour.Parse();

            



            // Partie 4 :
 
            int nb1 = 10;
            int nb2 = 10;
            string numberString = nb2.ToString();
            Console.WriteLine(numberString);
            Console.WriteLine("Resultat : "+nb1+nb2);
            

            // Partie 5 :

            // Methode Convert est généralement utilisée pour effectuer des conversions de type prédéfinies entre des types de données [int <=> string ou double <=> decimal]
            int number = 42;
            string numberString = Convert.ToString(number);
            
            // Méthode Parse est généralement utilisée pour convertir une chaîne de caractères en une valeur
            string numberString = "42";
            Console.WriteLine(numberString + 8);
            int number = int.Parse(numberString);
            Console.WriteLine(number + 8);

            */
            // Partie 6 :
            /*
            Types Numériques :
                int: Entier signé de 32 bits.
                double: Nombre à virgule flottante en double précision.
                decimal: Nombre décimal à virgule fixe.
                float: Nombre à virgule flottante en simple précision.
            Types Booléens :
                bool: Type booléen représentant Vrai(true) ou Faux(false).
            Types Caractères :
                char: Caractère Unicode simple.
            Énumérations :
                enum: Un type défini par l'utilisateur qui consiste en un ensemble de constantes nommées.
            Structures :
                struct: Un type de données composé défini par l'utilisateur qui peut contenir plusieurs champs de données.
            */

            int nb1 = 5;
            int nb2 = 10;
            Console.WriteLine("La somme de " + nb1 + " et " + nb2 + " est égale à " + (nb1+nb2));

            float nb3 = 3.5f;
            float nb4 = 2.7f;

            float somme = nb3 + nb4;

            Console.WriteLine("La somme de " + nb3 + " et " + nb4 + " est égale à " + somme);






        }
    }
}