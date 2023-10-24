using Demo_Structures;

Console.WriteLine("Demo Structures");
Console.WriteLine();

Character Char1;
Char1.Name = "Gimli";
Char1.Race = "Dwarf";
Char1.Class = "War";

Character Char2;
Char2.Name = "Gandoulf";
Char2.Race = "Human";
Char2.Class = "Wizzard";

Console.WriteLine($"The first character is a {Char1.Race} {Char1.Class} called {Char1.Name}");
Console.WriteLine($"The second character is a {Char2.Race} {Char2.Class} called {Char2.Name}");

Console.ReadLine();