
namespace Demo_Propriete.Classes
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
            /*private*/ set { 
                if(value != "")
                {
                    _lastname = value;

                }    
                else
                {
                    _lastname = "!EMPTY STRING!";
                }
            }
        }
        public string Firstname { 
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

    }
}
