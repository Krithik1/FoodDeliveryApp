Steps to initialize

1. Create 2 folders:-

    a. `api`

    b. `client`

2. For `api` folder

    a. Run `npm init -y` to initialize the folder.

    b. Run `npm install --save-dev typescript` to install typescript.

    c. Run `npx tsc --init` to create `tsconfig.json` file.

    d. Run `npm i express mongoose cors dotenv` to install dependencies.

    - `express` is a web framework for Node.js.

    - `mongoose` is a MongoDB object modeling tool designed to work in an asynchronous environment.

    - `cors` is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

    - `dotenv` is a zero-dependency module that loads environment variables from a .env file into process.env.

    e. Run `npm i --save-dev @types/express @types/node` to install types for express.
    
    f. Run `npm install -D concurrently nodemon` to install nodemon and concurrently.



TODO: Add quantity for products in order
TODO: Test API
TODO: Add payment method ???
TODO: Add admin user
TODO: Create frontend