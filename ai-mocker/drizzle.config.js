/**@type {import("drizzle-kit").Config} */
export default {
    schema:"./utils/schema.js",
    dialect:"postgresql",
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_MGq7Rxjz5NoT@ep-wispy-sea-a8a8u9gd-pooler.eastus2.azure.neon.tech/ai-interview%20mocker?sslmode=require'
    }
}