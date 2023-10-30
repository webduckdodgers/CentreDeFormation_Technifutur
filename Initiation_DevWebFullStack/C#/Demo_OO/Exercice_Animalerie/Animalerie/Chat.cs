using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Animalerie
{
    public class Chat : Animal
    {
        //Les chats doivent également être caractérisés par leur caractère (énergique, farouche, câlin, etc.), si leurs griffes ont été
        //coupées et s’il s’agit d’un chat à poil long ou non. Pour les chats, la probabilité de décès est de 0,5%.

        public string Caractere {  get; set; }
        public bool Griffe { get; set; }
        public bool PoilLong { get; set; }

    }
}
