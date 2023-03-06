using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Reveal.Sdk.Samples.Web.UpMedia.SDK
{
    public class DashboardProvider : IRVDashboardProvider
    {
        public readonly string _ext = ".rdash";
        public readonly string _dashboardsDirectoryPath;

        public DashboardProvider(string dashboardsDirectoryPath = "Dashboards")
        {
            // Note: The following line calculates the absolute path to the dashboards location.
            _dashboardsDirectoryPath = Path.GetFullPath(dashboardsDirectoryPath);
        }
        public Task<Dashboard> GetDashboardAsync(IRVUserContext userContext, string dashboardId)
        {
            var fileToLoad = Directory.EnumerateFiles(_dashboardsDirectoryPath)
                                        .Where(f => Path.GetFileName(f) == dashboardId || Path.GetFileName(f) == dashboardId + _ext)
                                        .FirstOrDefault(f => f.EndsWith(_ext));
            if (fileToLoad != null)
            {
                return Task.FromResult(new Dashboard(fileToLoad));
            }
            throw new ArgumentException($"No rdash file with name \"{dashboardId}\" was found in the dashboards folder:{_dashboardsDirectoryPath}.");
        }

        public Task SaveDashboardAsync(IRVUserContext userContext, string dashboardId, Dashboard dashboard)
        {
            string dashboardFileName = dashboardId.Contains(_ext) ? dashboardId : dashboardId + _ext;

            return dashboard.SaveToFileAsync(Path.Combine(_dashboardsDirectoryPath, dashboardFileName));
        }
    }
}
