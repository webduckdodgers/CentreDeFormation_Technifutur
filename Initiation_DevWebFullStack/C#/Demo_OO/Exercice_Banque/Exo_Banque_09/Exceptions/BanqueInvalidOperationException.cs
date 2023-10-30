using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_09.Exceptions
{
    internal class BanqueInvalidOperationException : BanqueException
    {
        public BanqueInvalidOperationException(string numeroCompte, string message)
            : base(numeroCompte, message)
        { }
    }
}
