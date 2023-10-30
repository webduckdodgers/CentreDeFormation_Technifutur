using Exercice_Carwash.Delegates;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace Exercice_Carwash.Models
{
    public class CarwashV2
    {
        public void Traiter(Voiture v)
        {
            CarwashDelegate? carwashDelegate = null;

            carwashDelegate += delegate(Voiture v)
            {
                Console.WriteLine($"Je prépare la voiture : {v.Plaque}");
            };

            carwashDelegate += voiture => { Console.WriteLine($"Je lave la voiture : {v.Plaque}"); };

            carwashDelegate += voiture => Console.WriteLine($"Je seche la voiture : {v.Plaque}");
            carwashDelegate += voiture => Console.WriteLine($"Je finalise la voiture : {v.Plaque}");

            carwashDelegate?.Invoke(v);
        }
    }
}
