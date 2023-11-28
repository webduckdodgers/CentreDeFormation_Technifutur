using System.ComponentModel.DataAnnotations;
using System.Security.Policy;

namespace ASPMVCWebAPI.Models
{
    public class Form
    {
        [Required(ErrorMessage = "Veillez indiquer votre prénom")]
        public string FirstName {  get; set; }

        [Required(ErrorMessage = "Veillez indiquer votre nom")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Votre boîte mail n'est pas valide !")]
        [EmailAddress]
        public string Email { get; set; }
    }
}
