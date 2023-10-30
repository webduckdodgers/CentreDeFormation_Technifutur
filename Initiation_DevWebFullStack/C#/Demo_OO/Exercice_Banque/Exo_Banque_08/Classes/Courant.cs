using Exo_Banque_08.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_08.Classes
{
    public class Courant : Compte
    {
        // Variables :
        private double _ligneDeCredit;

        private const double _tauxInteretPositif = 3;
        private const double _tauxInteretNegatif = 0.75;

        // Propriétés :
        public double LigneDeCredit
        {
            get { return _ligneDeCredit; }
            private set 
            { 
                if(value >= 0)
                {
                    _ligneDeCredit = value;
                }
                else
                {
                    throw new BanqueInvalidOperationException(Numero, "La ligne de credit doit être positif !");
                }
            }
        }

        protected override double SoldeLimit
        {
            get { return -LigneDeCredit; }
        }

        // Constructeurs : 
        public Courant(string numero, Personne titulaire, double ligneDeCredit = 0)
            : base (numero, titulaire)
        {
            this.LigneDeCredit = ligneDeCredit;
        }

        public Courant(string numero, Personne titulaire, double solde, double ligneDeCredit)
            : base (numero, titulaire, solde)
        {
            this.LigneDeCredit = ligneDeCredit;
        }

        // Méthodes :
        protected override double CalculInteret()
        {
            return (Solde >= 0) ? (Solde / 100) * _tauxInteretPositif : (Solde / 100) * _tauxInteretNegatif; 
        }
        
    }
}
