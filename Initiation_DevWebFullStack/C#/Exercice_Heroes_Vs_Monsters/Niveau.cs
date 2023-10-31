using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Heroes_Vs_Monsters
{
    public static class Niveau
    {

        public static int addition()
        {
            int resultat = 0;

            int l1 = De.LancerLeDe();
            int l2 = De.LancerLeDe();
            int l3 = De.LancerLeDe();
            int l4 = De.LancerLeDe();

            List<int> tableau = new List<int>() { l1, l2, l3, l4 };

            tableau.Sort();
            tableau.RemoveAt(0);

            resultat = tableau.Sum();

            return resultat;
        }
        
    }
}
