
using Microsoft.Data.SqlClient;



Console.WriteLine("Bienvenue sur Steam.");

Console.WriteLine("Entré votre boîte mail : ");
string email = Console.ReadLine()!;

Console.WriteLine("Entré un mot de passe : ");
string password = Console.ReadLine()!;

string country = "";

bool cle = false;
while (!cle)
{
    Console.WriteLine("Entré 1 = Belgique, 2 = France ou 3 = Espagne : ");
    country = Console.ReadLine()!;

    switch (country)
    {
        case "1":
            country = "Belgique";
            cle = true;
            break;
        case "2":
            country = "France";
            cle = true;
            break;

        case "3":
            country = "Espagne";
            cle = true;
            break;
        default:
            Console.WriteLine("ERREUR ! \nVeillez tapez 1, 2 oou 3");
            break;
    }
}

Console.WriteLine("Bienjoué vous avez créer un compte sur Steam");


const string connectionString = @"
    Server=DESKTOP-UQU36BE\DUCKSERVER;
    Database=DB;
    User Id=sa;
    Password=Spartacus;
    TrustServerCertificate=True;
";

using (SqlConnection connection = new SqlConnection(connectionString))
{
    using (SqlCommand command = connection.CreateCommand())
    {
        command.CommandText =   $"INSERT INTO Users (Email, Password, Wallet, Country)" +
                                $"VALUES (@email, @password, 0, @country)";

        command.Parameters.AddWithValue("@email", email);
        command.Parameters.AddWithValue("@password", password);
        command.Parameters.AddWithValue("@country", country);

        connection.Open();
        command.ExecuteScalar();
        connection.Close();
    }
}

