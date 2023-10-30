using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_08.Exceptions
{
    public class SoldeInsuffisantException : BanqueException
    {
        public double Solde { get; set; }
        public double Montant { get; set; }

        public SoldeInsuffisantException(string numeroCompte, double solde, double montant) 
            : this(numeroCompte, solde, montant, $"Solde insuffisant pour retirer {montant} (Solde Actuel: {solde})")
        { }

        public SoldeInsuffisantException(string numeroCompte, double solde, double montant, string message)
            : base(numeroCompte, message)
        {
            this.Solde = solde;
            this.Montant = montant;
        } 
    }
}
