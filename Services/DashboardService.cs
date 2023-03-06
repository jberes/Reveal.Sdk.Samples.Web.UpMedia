using Reveal.Sdk;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;

namespace Reveal.Sdk.Samples.Web.UpMedia.Services
{
    public class DashboardService : IDashboardService
    {
        private string _dashboardsFolderLocation = "Dashboards";
        public List<string> GetDashboardNames()
        {
            return Directory.EnumerateFiles(_dashboardsFolderLocation)
                .Select(f => Path.GetFileName(f)
                .Replace(".rdash", ""))
                .ToList();
        }

        public async Task<Dashboard> GetDashboardByNameAsync(string name)
        {
            string combinedPath = Path.Combine(_dashboardsFolderLocation, name + ".rdash");
            if (File.Exists(combinedPath))
            {
                var db = new Dashboard(combinedPath);
                await db.ToByteArrayAsync();
                return db;
            }

            return null;
        }

        public async Task<DashboardInfo[]> GetThumbnailInfosAsync()
        {
            var dbInsoTasks = Directory.EnumerateFiles(_dashboardsFolderLocation)
               .Where(f => f.EndsWith(".rdash"))
               .Select(f => Path.GetFullPath(f))
               .Select(async fileName =>
               {
                   return await new Dashboard(fileName).GetInfoAsync(Path.GetFileName(fileName).Replace(".rdash", ""));
               }).ToArray();

            return await Task.WhenAll(dbInsoTasks);

        }
    }
}
