using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_07.Classes
{
    public class Personne
    {
        // Propriétées
        public string Nom { get; private set; }
        public string Prenom { get; private set; }
        public DateTime DateNaiss { get; private set; }

        // Constructeur
        public Personne(string nom, string prenom, DateTime dateNaiss)
        {
            this.Nom = nom;
            this.Prenom = prenom;
            this.DateNaiss = dateNaiss;
        }

        // Surchage d'opérateur
        public static bool operator ==(Personne left, Personne right)
        {
            if(left is null && right is null)
                return true;

            if (left is null || right is null)
                return false;

            return left.Nom == right.Nom
                && left.Prenom == right.Prenom
                && left.DateNaiss == right.DateNaiss;
        }

        public static bool operator !=(Personne left, Personne right)
        {
            return !(left == right);
        }


    }
}
