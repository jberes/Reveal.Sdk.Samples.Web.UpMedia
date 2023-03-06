using Reveal.Sdk;
using System.Threading.Tasks;

namespace Reveal.Sdk.Samples.Web.UpMedia.Services
{
    public class AuthenticationProvider : IRVAuthenticationProvider
    {
        public Task<IRVDataSourceCredential> ResolveCredentialsAsync(IRVUserContext userContext, 
                                RVDashboardDataSource dataSource)
        {
            {
                IRVDataSourceCredential userCredential =
                    new RVUsernamePasswordDataSourceCredential();


                if (dataSource is RVAzureSqlDataSource) userCredential =
                  new RVUsernamePasswordDataSourceCredential("jasonberes", "=RevealJasonSdk09");

                if (dataSource is RVSqlServerDataSource) userCredential =
                        new RVUsernamePasswordDataSourceCredential("jasonberes", "=RevealJasonSdk09");

                else if (dataSource is RVPostgresDataSource) userCredential =
                    new RVUsernamePasswordDataSourceCredential("postgres", "superuser");

                else if (dataSource is RVAthenaDataSource) userCredential =
                        new RVAmazonWebServicesCredentials("AKIATQNPIZE6JX57QF5A",
                        "nJOy4eFNrDvN6C2D5iLxo1pCA6sTckkp5RnXF6fA");

                else if (dataSource is RVBigQueryDataSource) userCredential =
                        new RVBearerTokenDataSourceCredential("ya29.a0AVvZVsqUW4eKRVbIUsQCZdOw8K02ykhOe4og_QGM3a6ydkpTJ9RwLWgN9TptqDr5OYEwmCx3zYtAetQjvBnMz3QQ-Ufs3r1hNXO-vv33qic9NHIDmKVwxzjMBO_4I_Te7U4zxvd7w0bRqgbQQ88qgi4Bsmhb4Rt27O5H4l8EYiIf5OA3m1qEP7T1ZmVQOQYng1z_45vBImWwgEW7OpM0c7j9K_r0guPDq2axKJAaCgYKAYoSARESFQGbdwaIgxrdamFLU4B9PoOQX199RQ0238", "");

                else if (dataSource is RVSnowflakeDataSource) userCredential =
                        new RVUsernamePasswordDataSourceCredential("jberes", "revealUser2023");

                return Task.FromResult(userCredential);
            }
        }
    }
}
