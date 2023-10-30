using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercice_Carwash.Models
{
    public class Voiture
    {
        public string Plaque { get; private init; }

        public Voiture(string plaque)
        {
            Plaque = plaque;
        }
    }
}
