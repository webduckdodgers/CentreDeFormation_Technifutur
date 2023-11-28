
using ASPMVCWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASPMVCWebAPI.Controllers
{
    public class Usercontroller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CreerUnCompte()
        {
            return View();
        }


        [HttpPost]
        
        public IActionResult CreerUnCompte(Form creerUnCompte)
        {
            if (ModelState.IsValid)
            {
                FakeDB.Users.Add(creerUnCompte.Email, creerUnCompte.FirstName, creerUnCompte.LastName);

                Console.WriteLine("Le formulaire à été valider en envoyer à la base de donné FakeDB");
                return RedirectToAction("Index");
            }

            Console.WriteLine("Erreur ! Manque d'information sur le formulaire...");
            return View(creerUnCompte);
        }
    }
}
