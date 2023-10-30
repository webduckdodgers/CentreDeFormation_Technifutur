using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_10.Interfaces
{
    public interface ICustomer
    {
        double Solde { get; }

        void Retrait(double montant);
        void Depot(double montant);
    }
}
