using Reveal.Sdk;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Threading.Tasks;

namespace Reveal.Sdk.Samples.Web.UpMedia.Services
{
    public interface IDashboardService
    {
        public List<string> GetDashboardNames();

        public Task<DashboardInfo[]> GetThumbnailInfosAsync();
    }
}