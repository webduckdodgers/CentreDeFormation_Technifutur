
using Demo_Propriete.Classes;

Person person1 = new Person();
person1.Lastname = "Beurive";
person1.Firstname = "Aude";
person1.Birthdate = new DateTime(1989, 10, 16);
Console.WriteLine("Personne 1 :");
Console.WriteLine(person1.FullName);
Console.WriteLine(person1.Birthdate.ToShortDateString());



