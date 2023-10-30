using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_04.Classes
{
    public class Courant
    {
        // Variables :
        private double _solde;
        private double _ligneDeCredit;

        // Propriétés :
        public string Numero { get; set; }
        
        public double Solde {
            get { return _solde; }
            private set 
            {
                _solde = value;
            } 
        }

        public double LigneDeCredit
        {
            get { return _ligneDeCredit; }
            set 
            { 
                if(value > 0)
                {
                    _ligneDeCredit = value;
                }
                else
                {
                    Console.WriteLine("Vous essayez de mettre une ligne de crédit négative !");
                }
            }
        }

        public Personne Titulaire { get; set; }

        // Méthodes :
        public void Retrait(double Montant)
        {
            Console.WriteLine($"Vous essayez de retirer {Montant} euros ...");
            if (Montant < 0)
            {
                Console.WriteLine("ERROR : Vous essayez de retirer un montant négatif");
                //TODO remplacer ça par des exceptions
            }
            else if(_solde - Montant < - _ligneDeCredit)
            {
                Console.WriteLine("ERROR : Opération impossible, vous avez dépassé votre ligne de crédit");
                //TODO remplacer ça par des exceptions
            }
            else
            {
                _solde -= Montant;
                Console.WriteLine($"Opération validée : Vous avez maintenant {_solde} euros sur votre compte.");
            }
        }

        public void Depot(double Montant)
        {
            Console.WriteLine($"Vous essayez de déposer {Montant} euros...");
            if (Montant < 0) 
            {
                Console.WriteLine("ERROR : Vous essayez de déposer un montant négatif");
                //TODO : remplacer par une exception
            }
            else
            {
                _solde += Montant;
                Console.WriteLine($"Opération validée : Vous avez maintenant {_solde} euros sur votre compte.");
            }
        }


        // Surcharge d'operateur
        public static double operator +(Courant c1, Courant c2)
        {
            return Math.Max(c1.Solde, 0) + Math.Max(c2.Solde, 0);
        }

        /*
        public static double operator +(Courant c1, Courant c2)
        {
            if (c1.Solde < 0 && c2.Solde < 0)
                return 0;

            if (c1.Solde < 0)
                return c2.Solde;

            if (c2.Solde < 0)
                return c1.Solde;

            return c1.Solde + c2.Solde;
        }
        */
    }
}
