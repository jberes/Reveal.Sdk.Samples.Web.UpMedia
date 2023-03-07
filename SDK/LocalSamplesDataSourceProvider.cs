using System.Collections.Generic;
using System.Threading.Tasks;

namespace Reveal.Sdk.Samples.Web.UpMedia.SDK
{
    internal class DataSourceProvider : IRVDataSourceProvider
    {

        public Task<RVDataSourceItem> ChangeDataSourceItemAsync(IRVUserContext userContext, 
            string dashboardId, RVDataSourceItem dataSourceItem)
        {
            if (IsSamplesWebResource(dataSourceItem))
            {
                return Task.FromResult(CreateLocalSamplesDataSourceItem((RVExcelDataSourceItem)dataSourceItem));
            }

            if (dataSourceItem is RVAthenaDataSourceItem athenaDsi)
            {
                athenaDsi.Table = "northwindinvoicesparquet";
            }

            if (dataSourceItem is RVSqlServerDataSourceItem sqlDsi)
            {
                var sqlServerDS = (RVSqlServerDataSource)sqlDsi.DataSource;
                sqlServerDS.Host = "jberes.database.windows.net";
                sqlServerDS.Database = "NorthwindCloud";

                if (sqlDsi.Id == "OrdersQry")
                {

                    sqlDsi.CustomQuery = "Select * from Orders Qry";
                }

                else if (sqlDsi.Id == "Category1997")
                {
                    sqlDsi.CustomQuery = "Select * from 'Category Sales for 1997'";
                }

                else if (sqlDsi.Id == "Customers")
                {
                    sqlDsi.CustomQuery = "Select * from Customers";
                }

                else if (sqlDsi.Id == "CustomerDemographics")
                {
                    sqlDsi.CustomQuery = "Select * from Customers";
                }
            }
            return Task.FromResult(dataSourceItem);
        }




        private static bool IsSamplesWebResource(RVDataSourceItem dataSourceItem)
        {
            var excelItem = dataSourceItem as RVExcelDataSourceItem;
            var wrItem = excelItem?.ResourceItem as RVWebResourceDataSourceItem;
            return wrItem != null && wrItem.Url.EndsWith("Samples.xlsx");
        }

        private static RVDataSourceItem CreateLocalSamplesDataSourceItem(RVExcelDataSourceItem excelItem)
        {
            var localItem = new RVLocalFileDataSourceItem();
            localItem.Uri = "local:/Samples.xlsx";
            excelItem.ResourceItem = localItem;
            return excelItem;
        }


        public Task<RVDashboardDataSource> ChangeDataSourceAsync(IRVUserContext userContext, RVDashboardDataSource dataSource)
        {
            // REST
            if (dataSource is RVRESTDataSource restDs)
            {
                if (restDs.Id == "CustomerData")
                {
                    var userContextId = (IRVUserContext)userContext;
                    restDs.Id = "RestCustomerData";
                    restDs.Title = "Northwind";
                    restDs.Subtitle = "Customers";
                    restDs.Url = $"https://northwindcloud.azurewebsites.net/api/customers/";
                    restDs.UseAnonymousAuthentication = true;
                }

                else if ((restDs.Id == "OrderData"))
                {
                    var userContextId = (IRVUserContext)userContext;
                    restDs.Id = "RestOrderData";
                    restDs.Title = "Northwind";
                    restDs.Subtitle = "Orders";
                    restDs.Url = $"https://northwindcloud.azurewebsites.net/api/customer_orders/{userContextId.UserId}";
                    restDs.UseAnonymousAuthentication = true;
                }
            }

            // Postgres
            else if (dataSource is RVPostgresDataSource pgDs)
            {
                pgDs.Host = "localhost";
                pgDs.Database = "Northwind";
            }

            else if (dataSource is RVRedshiftDataSource redshiftDs)
            {
                redshiftDs.Host = "reveal-redshift.cmeyu4xjvffl.us-east-1.redshift.amazonaws.com";
                redshiftDs.Database = "reveal";
            }



            // Snowflake
            else if (dataSource is RVSnowflakeDataSource snwDs)
            {
                snwDs.Id = "snowflakeDSId";
                snwDs.Title = "Snowflake DS";
                snwDs.Account = "al16914";
                snwDs.Host = "gpiskyj-al16914.snowflakecomputing.com";
                snwDs.Database = "SNOWFLAKE_SAMPLE_DATA";
            }

            // Athena
            else if (dataSource is RVAthenaDataSource athDs)
            {
                athDs.Id = "athenaDSId";
                athDs.Title = "Athena Data Source";
                athDs.Region = "us-east-1";
                athDs.Database = "mydatabase";
                athDs.OutputLocation = "s3://infragistics-test-bucket1/Temp";
            }

            else if (dataSource is RVSqlServerDataSource sqlDs)
            {
                sqlDs.Host = "jberes.database.windows.net";
                sqlDs.Database = "NorthwindCloud";
                sqlDs.Port = 1433;
            }

            else if (dataSource is RVAzureSqlDataSource sqlADs)
            {
                sqlADs.Host = "jberes.database.windows.net";
                sqlADs.Database = "NorthwindCloud";
                sqlADs.Port = 1433;
            }
            return Task.FromResult(dataSource);
        }

    }
}
