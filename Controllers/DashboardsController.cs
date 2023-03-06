using Microsoft.AspNetCore.Mvc;
using Reveal.Sdk.Samples.Web.UpMedia.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reveal.Sdk.Samples.Web.UpMedia.Controllers
{
    public class DashboardsController : Controller
    {
        IDashboardService _dashboardsService = null;
        public DashboardsController(IDashboardService dashboardsService)
        {
            _dashboardsService = dashboardsService;
        }

        public List<string> Index()
        {
            return _dashboardsService.GetDashboardNames();
        }

        [HttpGet]
        public async Task<DashboardInfo[]> GetThumbnailInfos()
        {
            return await _dashboardsService.GetThumbnailInfosAsync();
        }
    }
}
