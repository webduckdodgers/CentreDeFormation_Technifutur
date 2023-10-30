using Demo_Generique.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo_Generique.Classes
{
    public class GestionUser : ICRUD<int, User>
    {
        private List<User> _users = new List<User>();
        public User Create(User data)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<User> GetAll()
        {
           return _users;
        }

        public User GetById(int id)
        {
            throw new NotImplementedException();
        }

        public User Update(User data)
        {
            throw new NotImplementedException();
        }
    }
}
