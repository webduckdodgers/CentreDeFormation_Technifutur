using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo_Generique.Classes
{
    public class Gestion<Tid, TClass> where TClass : Entity<Tid>
    {
        private List<TClass> _list = new List<TClass>();
        public List<TClass> GetAll()
        {
            return _list;
        }

        public TClass? GetById(Tid id) 
        {
            return _list.FirstOrDefault(l => (l.Id).Equals(id) );
        }

        public TClass Create(TClass data)
        {
            _list.Add(data);
            return data;
        }

        public void Delete(TClass data)
        {
            _list.Remove(data);
        }
    }
}
