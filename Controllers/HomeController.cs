using Microsoft.AspNetCore.Mvc;

namespace Reveal.Sdk.Samples.Web.UpMedia.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return RedirectToAction("Alerts");
        }

        public IActionResult Campaigns()
        {
            ViewData["Message"] = "Campaigns";

            return View();
        }

        public IActionResult Manufacturing()
        {
            ViewData["Message"] = "Manufacturing";

            return View();
        }

        public IActionResult Marketing()
        {
            ViewData["Message"] = "Marketing";

            return View();
        }

        public IActionResult Sales()
        {
            ViewData["Message"] = "Sales";

            return View();
        }

        public IActionResult CreateDashboard()
        {
            ViewData["Message"] = "CreateDashboard";

            return View();
        }

        public IActionResult Alerts()
        {
            ViewData["Message"] = "Alerts";

            return View();
        }

        public IActionResult CustomSortString()
        {
            ViewData["Message"] = "CustomSortString";

            return View();
        }
    }
}
