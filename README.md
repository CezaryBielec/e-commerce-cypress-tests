In order to run these tests it is required to execute following steps:

1. Clone the git repository
2. Run "npm i" command in the root of the project
3. Run "npm run test" to run tests headlessly or "npm run cy" to open cypress dashboard

Please mind that filtering the products test fails because the application has a bug which resulst in receiving 403 http response code while trying to filter the products.
