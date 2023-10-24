
using Demo_Indexeur.Classes;

Person person1 = new Person();
person1.Lastname = "Beurive";
person1.Firstname = "Aude";
person1.Birthdate = new DateTime(1989, 10, 16);
Console.WriteLine("Personne 1 :");
Console.WriteLine(person1.FullName);
Console.WriteLine(person1.Birthdate.ToShortDateString());

Person person2 = new Person();
person2.Lastname = "Beurive";
person2.Firstname = "Eric";
person2.Birthdate = new DateTime(1962, 03, 14);

Person person3 = new Person();
person3.Lastname = "Beurive";
person3.Firstname = "Thomas";
person3.Birthdate = new DateTime(1992, 06, 19);


person1["Père"] = person2;
person1["Frère1"] = person3;
Console.WriteLine($"Le père de {person1.FullName} est {person1["Père"].FullName}");
Console.WriteLine($"La mère de {person1.FullName} est {person1["Mère"]?.FullName}");
Console.WriteLine($"L'un des frères de {person1.FullName} est {person1["Frère1"].FullName}");

