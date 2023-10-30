using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Heroes_Vs_Monsters
{
    public class Loup : Caracteristiques
    {
        public string monstre { get; }

        public Loup(string monstre = "Loup", int vie, int force, int endurance)
        {
            this.monstre = monstre;
            this.vie = vie;
            this.force = force;
            this.endurance = endurance;
        }

    }
}
