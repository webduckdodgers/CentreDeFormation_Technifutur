using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_09.Exceptions
{
    public class BanqueException : Exception
    {
        public string NumeroCompte { get; set; }

        public BanqueException(string numeroCompte, string message)
            : base(message)
        {
            NumeroCompte = numeroCompte;
        }
    }
}
