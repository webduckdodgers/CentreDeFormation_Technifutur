using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using System.Security.Cryptography.X509Certificates;

namespace Hanget_Game.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            string server = "localhost";
            string database = "hanged_game";
            string user = "root";
            string password = "";

            string link = $"server={server};database={database};uid={user};password={password}";

            MySqlConnection connection = new(link);
            
            connection.Open();

            MySqlCommand query = new MySqlCommand("SELECT * FROM words WHERE id = @id", connection);
            query.Parameters.AddWithValue("@id", id);

            MySqlDataReader reader = query.ExecuteReader();

            string word = null;   
            
            if (reader.Read())
            {
                word = reader["word"].ToString();
            }
            
            connection.Close();

            return Ok(word);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok("R�cup�ration de tous les �l�ments");
        }

        [HttpPost]
        public IActionResult Add(int id)
        {
            return Ok("�l�ment ajout� avec succ�s");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok($"�l�ment avec l'ID {id} supprim� avec succ�s");
        }
    }
}
