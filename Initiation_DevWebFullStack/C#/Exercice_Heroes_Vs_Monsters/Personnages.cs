using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Heroes_Vs_Monsters
{
    public class Personnages
    {
        public int vie { get; set; }
        public int force { get; set; }
        public int endurance { get; set; }

        public Personnages(int vie, int force, int endurance)
        {
            this.vie = vie;
            this.force = force;
            this.endurance = endurance;
        }


    }
}
