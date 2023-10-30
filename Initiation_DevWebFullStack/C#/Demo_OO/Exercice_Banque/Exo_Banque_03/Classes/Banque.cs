using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_04.Classes
{
    public class Banque
    {
        private readonly Dictionary<string, Courant> _comptes = new Dictionary<string, Courant>();
        private string _nom;

        public string Nom
        {
            get { return _nom; }
            set { _nom = value; }
        }

        public Courant this[string numero]
        {
            get
            {
                Courant resultat;
                _comptes.TryGetValue(numero, out resultat);

                return resultat;
            }
        }

        public void Ajouter(Courant compte)
        {
            _comptes.Add(compte.Numero, compte);
        }
        public void Supprimer(string numero)
        {
            _comptes.Remove(numero);
        }


        public double AvoirDesComptes(Personne titulaire)
        {
            double resultat = 0;

            foreach(KeyValuePair<string, Courant> kvp in _comptes)
            {
                if(kvp.Value.Titulaire == titulaire)
                {
                    resultat += (new Courant()) + kvp.Value;
                }
            }

            return resultat;
        }
    }
}
