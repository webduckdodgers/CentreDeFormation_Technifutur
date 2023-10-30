using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_04.Classes
{
    public class Epargne : Compte
    {
        private DateTime _dateDernierRetrait;

        public DateTime DateDernierRetrait
        {
            get { return _dateDernierRetrait; }
        }

        public override void Retrait(double Montant)
        {
            if(Solde - Montant  < 0)
            {
                Console.WriteLine("ERROR : Opération impossible, t'as plus de thune !");
                //TODO remplacer ça par des exceptions
                return;
            }

            base.Retrait(Montant);

            _dateDernierRetrait = DateTime.Now;
        }
    }
}
