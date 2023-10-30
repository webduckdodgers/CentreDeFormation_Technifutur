using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo_Generique.Interfaces
{
    public interface ICRUD<TId, TData>
    {
        public List<TData> GetAll();
        public TData GetById(TId id);

        public TData Create(TData data);
        public TData Update(TData data);
        public void Delete(TId id);
    }
}
