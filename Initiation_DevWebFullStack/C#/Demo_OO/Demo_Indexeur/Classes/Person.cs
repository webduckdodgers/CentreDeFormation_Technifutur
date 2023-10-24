using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo_Indexeur.Classes
{
    public class Person
    {
        // Variables
        private string _lastname;
        private string _firstname;


        // Propriétés
        public string Lastname
        {
            private get { return _lastname; }
            /*private*/
            set
            {
                if (value != "")
                {
                    _lastname = value;

                }
                else
                {
                    _lastname = "!EMPTY STRING!";
                }
            }
        }
        public string Firstname
        {
            private get { return _firstname; }
            set { _firstname = value; }
        }

        public string FullName
        {
            get
            {
                return _firstname + " " + _lastname;
            }
        }

        public DateTime Birthdate { /*private*/ get; set; }

        Dictionary<string, Person> Famille = new Dictionary<string, Person>();
        //Indexeurs
        public Person this[string Key]
        {
            get
            {
                Person p;
                Famille.TryGetValue(Key, out p);
                return p;
            }
            set
            {
                Famille[Key] = value;
                //Famille.Add(Key, value); //Fait pareil
            }
        }
    }
}
