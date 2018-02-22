# Plan

* Front-end
    * ~~Routing - BrowserRouter~~
    * Components
        * ~~Login~~
            * Picture
            * Button
        * Account
            * User Info (redux)
            * Axios to fetch user info
    * Redux
        * Store
        * ducks folder
        * Reducer
        * Action creators
        * Action names
* Back-end
    * Database
        * User Table
            * id (serial)
            * auth0_sub
            * name
            * email
            * picture
        * Queries (Massive)
            * Look up user by auth0_id
            * Add user
            * Init
    * Server
        * Proxy in package.json
        * API endpoints
            * GET user data
                * Ensure user is logged in (middleware)
            * Auth login (callback)
            * Logout
* ~~Packages~~
    * dotenv
    * axios
    * redux
    * react-redux
    * react-router-dom
    * massive
    * express
    * body-parser
    * express-session

* Environment Variables
    * Connection string
    * Session Secret
    * auth0 domain
    * auth0 client ID
    * auth0 client secret

* Important Notes
    * Put .env in .gitignore
    * Restart servers whenever we change environment variables
    * Change package.json proxy for auth0 callback