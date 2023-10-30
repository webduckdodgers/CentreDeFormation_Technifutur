using Exercice_Carwash.Delegates;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercice_Carwash.Models
{
    public class CarwashV1
    {
        private void Preparer(Voiture v)
        {
            Console.WriteLine($"Je prépare la voiture : {v.Plaque}");
        }
        private void Laver(Voiture v)
        {
            Console.WriteLine($"Je lave la voiture : {v.Plaque}");
        }
        private void Secher(Voiture v)
        {
            Console.WriteLine($"Je seche la voiture : {v.Plaque}");
        }
        private void Finaliser(Voiture v)
        {
            Console.WriteLine($"Je finalise la voiture : {v.Plaque}");
        }

        public void Traiter(Voiture v)
        {
            CarwashDelegate? carwashDelegate = null;

            carwashDelegate += Preparer;
            carwashDelegate += Laver;
            carwashDelegate += Laver;
            carwashDelegate += Secher;
            carwashDelegate += Finaliser;

            carwashDelegate?.Invoke(v);
        }
    }
}
