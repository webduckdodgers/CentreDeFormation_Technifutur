using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Animalerie
{
    public class Animal
    {
        public string Nom { get; set; }
        public double Poid { get; set; }
        public double Taille { get; set; }
        public DateTime Age { get; set; }
        public DateTime DateArrivee { get; set; }

        public void Crier(string message)
        {
            Console.WriteLine(message);
        }
    }
}
