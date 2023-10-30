using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_04.Classes
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


        // Méthodes :

        protected override double CalculInteret()
        {
            return (Solde >= 0) ? (Solde / 100) * _tauxInteretPositif : (Solde / 100) * _tauxInteretNegatif; 
        }
        public override void Retrait(double Montant)
        {
            if (Solde - Montant < -LigneDeCredit)
            {
                Console.WriteLine("ERROR : Opération impossible, vous avez dépassé votre ligne de crédit");
                //TODO remplacer ça par des exceptions
                return;
            }

            base.Retrait(Montant);
        }
    }
}
