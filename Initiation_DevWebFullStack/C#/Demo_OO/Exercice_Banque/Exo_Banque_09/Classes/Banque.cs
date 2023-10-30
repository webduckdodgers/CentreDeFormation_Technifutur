using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_09.Classes
{
    public class Banque
    {
        private readonly Dictionary<string, Compte> _comptes = new Dictionary<string, Compte>();
        private string _nom;

        public string Nom
        {
            get { return _nom; }
            set { _nom = value; }
        }

        public Compte this[string numero]
        {
            get
            {
                Compte resultat;
                _comptes.TryGetValue(numero, out resultat);

                return resultat;
            }
        }

        public void Ajouter(Compte compte)
        {
            _comptes.Add(compte.Numero, compte);
            compte.PassageEnNegatifEvent += PassageEnNegatifAction;
        }
        public void Supprimer(string numero)
        {
            _comptes[numero].PassageEnNegatifEvent -= PassageEnNegatifAction;
            _comptes.Remove(numero);           

        }


        public double AvoirDesComptes(Personne titulaire)
        {
            double resultat = 0;

            foreach (KeyValuePair<string, Compte> kvp in _comptes)
            {
                if (kvp.Value.Titulaire == titulaire)
                {
                    Personne fakeUser = new Personne("", "", DateTime.Today);
                    resultat += (new Courant("Test", fakeUser, 0, 0)) + kvp.Value;
                }
            }

            return resultat;
        }

        protected void PassageEnNegatifAction(Compte c)
        {
            Console.WriteLine($"------ Le compte { c.Numero } vient de passer en négatif ------");
        }
    }
}
