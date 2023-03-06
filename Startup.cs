using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Reveal.Sdk.Samples.Web.UpMedia.SDK;
using Reveal.Sdk.Samples.Web.UpMedia.Services;
using System.IO;
using System.IO.Compression;

namespace Reveal.Sdk.Samples.Web.UpMedia
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //You could configure the default disk locations used by RevealView to store cached data by uncommenting the following lines:
            var cacheFilePath = Configuration.GetSection("Caching")?["CacheFilePath"] ?? @"C:\Temp\Reveal\Web\Cache";
            Directory.CreateDirectory(cacheFilePath);

            services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Fastest);
            services.AddResponseCompression(options =>
            {
                options.Providers.Add<GzipCompressionProvider>();
                options.EnableForHttps = true;
            });

            services
                .AddSingleton<IDashboardService, DashboardService>()
                .AddMvc()
                .AddReveal(builder =>
                {
                    builder
                    .AddDashboardProvider<DashboardProvider>()
                    .AddDataSourceProvider<DataSourceProvider>()
                    .AddAuthenticationProvider<AuthenticationProvider>()
                    .AddSettings(settings =>
                    {
                        settings.LocalFileStoragePath = "Data";
                        settings.DataCachePath = cacheFilePath;
                        settings.CachePath = cacheFilePath;
						settings.License = "A87002002482396134";
					});
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();

            app.UseResponseCompression();
            // Serving unknown file types is requered so the wwwroot/MapServerFiles content should be served.
            // Besides mapData.json, this folder contains .shp and .dbf files which are needed for Choropleth & Scatter Map visualizations.
            app.UseStaticFiles(new StaticFileOptions { ServeUnknownFileTypes = true });

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
