using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo_Generique.Classes
{
    public interface Entity<T>
    {
        public T Id { get; set; }
    }
}
