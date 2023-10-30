using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_09.Classes
{
    public class Epargne : Compte
    {
        // Variables :
        private DateTime? _dateDernierRetrait;

        private const double _tauxInteret = 4.5;

        // Propriétées : 
        public DateTime? DateDernierRetrait
        {
            get { return _dateDernierRetrait; }
        }

        // Constructeur : 
        public Epargne(string numero, Personne titulaire) 
            : base(numero, titulaire)
        {
            this._dateDernierRetrait = null;
        }

        public Epargne(string numero, Personne titulaire, double solde, DateTime? dateDernierRetrait)
            : base(numero, titulaire, solde)
        {
            this._dateDernierRetrait = dateDernierRetrait;
        }


        // Méthodes : 
        protected override double CalculInteret()
        {
            return (Solde / 100) * _tauxInteret;
        }
        public override void Retrait(double Montant)
        {
            base.Retrait(Montant);
            _dateDernierRetrait = DateTime.Now;
        }
    }
}
