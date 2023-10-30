using Exo_Banque_09.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exo_Banque_09.Interfaces
{
    public interface IBanker : ICustomer
    {
        Personne Titulaire { get; }
        string Numero { get; }

        double AppliquerInteret();
    }
}
