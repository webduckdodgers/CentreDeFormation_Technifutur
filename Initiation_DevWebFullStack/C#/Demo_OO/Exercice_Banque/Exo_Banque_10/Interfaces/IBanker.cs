using Exo_Banque_10.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_10.Interfaces
{
    public interface IBanker : ICustomer
    {
        Personne Titulaire { get; }
        string Numero { get; }

        double AppliquerInteret();
    }
}
