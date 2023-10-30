using Exo_Banque_07.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_07.Classes
{
    public abstract class Compte : IBanker, ICustomer
    {        
        // Variables :
        private double _solde;

        // Propriétés :
        public string Numero { get; private set; }
        public Personne Titulaire { get; private set; }
        public double Solde
        {
            get { return _solde; }
            private set
            {
                _solde = value;
            }
        }

        // Constructeur : 
        public Compte(string numero, Personne titulaire)
        {
            this.Numero = numero;
            this.Titulaire = titulaire;
            this.Solde = 0;
        }

        public Compte(string numero, Personne titulaire, double solde)
            : this(numero, titulaire)
        {
            this.Solde = solde;
        }

        // Méthodes :
        public double AppliquerInteret()
        { return _solde + CalculInteret(); }

        protected abstract double CalculInteret();


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

        public virtual void Retrait(double Montant)
        {
            Console.WriteLine($"Vous essayez de retirer {Montant} euros ...");
            if (Montant < 0)
            {
                Console.WriteLine("ERROR : Vous essayez de retirer un montant négatif");
                //TODO remplacer ça par des exceptions
            }
            else
            {
                _solde -= Montant;
                Console.WriteLine($"Opération validée : Vous avez maintenant {_solde} euros sur votre compte.");
            }
        }

        // Surcharge d'operateur : 
        public static double operator +(Compte c1, Compte c2)
        {
            return Math.Max(c1.Solde, 0) + Math.Max(c2.Solde, 0);
        }

        /*
        public static double operator +(Compte c1, Compte c2)
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
