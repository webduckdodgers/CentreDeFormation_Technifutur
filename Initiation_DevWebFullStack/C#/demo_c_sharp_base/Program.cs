namespace demo_c_sharp_base
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            //Console.WriteLine("Hello, Project one! Line 1");
            //Console.WriteLine("Hello, Project one! Line 2");

            //Console.Write("Hello part 3");

            //Console.WriteLine();

            //cw tab -> Console.WriteLine();
            //Console.WriteLine("{0} fois {1} = {2} ou {3}", 5, 10, 50, "Cinquante");


            Console.WriteLine("Veuillez entrer le nom de ta mère: ");
            string mamanName = Console.ReadLine();
            Console.WriteLine(mamanName);

            Console.WriteLine("Veuillez entrer votre prénom : ");
            string prenomInputUser = Console.ReadLine();
            Console.WriteLine(prenomInputUser);

            Console.WriteLine("Veuillez entrer votre initial de nom : ");
            char initialName = (char)Console.Read();
            Console.WriteLine(initialName);

        }
    }
}