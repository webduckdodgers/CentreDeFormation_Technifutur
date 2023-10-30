using Demo_Generique.Classes;

Gestion<int, User> gestionUser = new Gestion<int, User>();

User user = new User
{
    Id = 1,
    FirstName = "Test",
    Email = "Test",
    LastName = "Test",
    Password = "Test"
};
User user2 = new User
{
    Id = 2,
    FirstName = "Test2",
    Email = "Test2",
    LastName = "Test2",
    Password = "Test2"
};
gestionUser.Create(user);
gestionUser.Create(user2);
List<User> users = gestionUser.GetAll();
foreach(User u in users)
{
    Console.WriteLine("GETALL : " + u.FirstName + " " + u.LastName);
}
User? userGet = gestionUser.GetById(1);
Console.WriteLine("GETBYID : " + userGet?.FirstName + " " + userGet?.LastName);

Gestion<string, Event> gestionEvent = new Gestion<string, Event>();
Event event1 = new Event
{
    Id = "1",
    Name = "Super Event",
    Creator = user,
    BeginDate = DateTime.Now,
    Description = "Oui."
};
gestionEvent.Create(event1);
List<Event> events = gestionEvent.GetAll();
foreach(Event e in events)
{
    Console.WriteLine(e.Name + " : " + e.Description );
}

DemoActionFunc demo = new DemoActionFunc();
demo.afficherMessage.Invoke("Voici un message");
demo.afficherMessage("Voici un message");

Console.WriteLine( demo.diviserNombres.Invoke(15, 2) );
Console.WriteLine( demo.diviserNombres(15, 2) );