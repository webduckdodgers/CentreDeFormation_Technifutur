using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Heroes_Vs_Monsters
{
    public class De
    {
        private static Random face = new Random();
        public static int LancerLeDe()
        {
            return face.Next(1, 7);
        }
    }
}

