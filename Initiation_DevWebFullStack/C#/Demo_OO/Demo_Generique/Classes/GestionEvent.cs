using Demo_Generique.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo_Generique.Classes
{
    public class GestionEvent : ICRUD<string, Event>
    {
        private List<Event> _events = new List<Event>();
        public Event Create(Event data)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }

        public List<Event> GetAll()
        {
            return _events;
        }

        public Event GetById(string id)
        {
            throw new NotImplementedException();
        }

        public Event Update(Event data)
        {
            throw new NotImplementedException();
        }
    }
}
