
/*Raccourci Région : ctrl + k + c 
    après sélection du code à englober dans la région
 */

#region Exo 1
//int nb1, nb2;

//Console.Write("Entrez nb 1 : ");

//nb1 = int.Parse(Console.ReadLine());

//Console.Write("Entrez nb 2 : ");

//nb2 = int.Parse(Console.ReadLine());

//Console.WriteLine($"{nb1} + {nb2} = {nb1 + nb2}");
#endregion

#region Exo 2
//float nb1, nb2;

//Console.Write("Entrez nb 1 : ");

//nb1 = Convert.ToSingle(Console.ReadLine());

//Console.Write("Entrez nb 2 : ");

//nb2 = Convert.ToSingle(Console.ReadLine());

//Console.WriteLine($"{nb1} + {nb2} = {nb1 + nb2}");
#endregion

#region Exo3 (slide 114)
//int nb;
//Console.WriteLine("Entrez un nombre : ");

//if(int.TryParse(Console.ReadLine(), out nb))
//{
//    if(nb/2 + nb/2 == nb)
//        Console.WriteLine("Nombre pair");
//    else
//        Console.WriteLine("Nombre impair");

//    //Console.WriteLine((nb / 2 + nb / 2 == nb) ? "Nombre pair" : "Nombre impair");
//}
//else
//{
//    Console.WriteLine("vous n'avez pas entré un nombre correct");
//}




#endregion

#region Exo 4 (slide 138)
//int a = 5, b = 2;
//Console.WriteLine($"Division entière {a / b}");
//Console.WriteLine($"Modulo {a%b}");
//Console.WriteLine($"Division {(float)a / b}");
#endregion

#region Exo5 (bban) slide 138
//string compte = "000000000097";
//long test;
//bool testbool = long.TryParse(compte, out test);
//if (compte.Length != 12 || !testbool)
//{
//    Console.WriteLine("Compte invalide");
//}
//else
//{
//    long tenFirst = long.Parse(compte.Substring(0, 10));
//    int lastTwo = int.Parse(compte.Substring(10, 2));

//    int modulo = (int)tenFirst % 97;
//    Console.WriteLine(lastTwo == ((modulo == 0) ? 97 : modulo) ? "Ok" : "Ko");
//}
#endregion

#region Exo6 (bban to iban) slide 138
//string compte = "000000000097";


//long test;
//bool testbool = long.TryParse(compte, out test);

////b = 11, e = 14
//string codepays = "1114";

//string tmpIban = compte + codepays + "00";

//if (compte.Length != 12 || !testbool)
//{
//    Console.WriteLine("Compte invalide");
//}
//else
//{
//    long tenFirst = long.Parse(compte.Substring(0, 10));
//    int lastTwo = int.Parse(compte.Substring(10, 2));

//    int modulo = (int)tenFirst % 97;
//    if(lastTwo == ((tenFirst % 97 == 0) ? 97 : tenFirst % 97))
//    {
//        int result = 98 - (int)(long.Parse(tmpIban) % 97);
//        string ResultatIban = ((result == 98) ? 1 : result).ToString("D2");
//        string IBAN = "BE" + ResultatIban + compte;
//        Console.WriteLine(IBAN);
//    }

//    else
//    {
//        Console.WriteLine("Modulo par 97 non valide");
//    }
//}


#endregion

#region Exo 7 Fibbo (slide 148)

//int nb1 = 0, nb2 = 1, tmp;

//Console.WriteLine(nb1);
//Console.WriteLine(nb2);

//for (int i = 0; i < 23; i++)
//{
//    Console.WriteLine(nb1+nb2);
//    tmp = nb1;
//    nb1 = nb2;
//    nb2 = nb2 + tmp;
//}
#endregion

#region Exo 8 Factoriel
//int nb;
//Console.WriteLine("Entrez un nombre : ");
//nb = int.Parse(Console.ReadLine());

//int result = 1;
//for(int i = 1;i <= nb; i++)
//{
//    result *= i;
//}
//Console.WriteLine(result);

#endregion

#region Exo9 NbPremier
//int x;
//Console.WriteLine("Entrez le nombre de premier souhaité");
//x = int.Parse(Console.ReadLine());

//for(int count = 0, value = 2; count < x; value++)
//{
//    bool isPrime = true;


//    for(int diviseur = 2; diviseur <= value / 2 && isPrime; diviseur++)
//    {
//        if(value % diviseur == 0)
//        {
//            isPrime = false;
//        }
//    }
//    if(isPrime)
//    {
//        Console.WriteLine(value);
//        count++;
//    }
//}
#endregion

#region Exo10 Table Multiplication

//for(int i = 1; i <= 5; i++)
//{
//    Console.WriteLine("Table de " + i);
//    for(int j = 1; j <= 20; j++)
//    {
//        Console.WriteLine($"{i} x {j} = {i*j}");
//    }
//    Console.WriteLine();
//}

#endregion

#region boucle double
//for(decimal i = 0; i <= 20; i+= 0.1M)
//{
//    Console.WriteLine(i);
//}

//double incr = 0.0;

//for (double k = 0; k <= 200; k++)
//{
//    Console.WriteLine(incr + k / 10);
//}
#endregion

#region Racine carrée (méthode de Newton)
//{
//    decimal maxError = decimal.Zero;
//    decimal a = 71214.28M;
//    decimal startValue = a;
//    decimal currentValue = a;
//    decimal error = a;
//    //Tant que nous somme au dessus de l'erreur prévue
//    while (error > maxError)
//    {
//        //la racine carré =
//        //0.5 * (le chiffre trouvé + (le nombre de départ/le chiffre trouvé)  )
//        currentValue = 0.5M * (currentValue + (a / currentValue));
//        //Calcul du pas pour savoir si on s'approche du taux d'erreur permis
//        //le pas c'est le (chiffre de départ - le chiffre trouvé)/chiffre de départ
//        error = (startValue - currentValue) / startValue;
//        //on recommencera le calcul à partir du chiffre trouvé
//        startValue = currentValue;
//        Console.WriteLine("pas=" + error + " racine=" + currentValue);
//    }
//    Console.WriteLine(currentValue.ToString("N10"));

//    //c'est mieux comme ça
//    Console.WriteLine(Math.Sqrt((double)a).ToString("N10"));
//}
#endregion

#region Exercice 1 / Page : 164

/*  
    Grâce à une boucle « while » et à l’aide d’une collection,
    calculez les nombres premiers inférieur à un nombre entier entré au clavier.
*/

List<int> nombresPremiers = new List<int>();

Console.Write("Entrez un nombre entier : ");
int enterNumber = int.Parse(Console.ReadLine());


Console.WriteLine("Nombres premiers inférieurs à " + enterNumber + " :");


double racineCarre = Math.Sqrt(enterNumber);

Console.WriteLine("Racine carre : " + racineCarre);






#endregion


