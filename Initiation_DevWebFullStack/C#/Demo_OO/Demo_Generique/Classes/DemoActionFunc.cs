using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo_Generique.Classes
{
    public class DemoActionFunc
    {

        public Action<string> afficherMessage = new Action<string>(AfficherMessage);
        public Func<int, int, double > diviserNombres = new Func<int, int, double>(Division);


        private static void AfficherMessage(string message)
        {
            Console.WriteLine(message);
        }

        private static double Division(int nb1, int nb2)
        {
            return (double)(nb1) / nb2;
        }



    }
}
