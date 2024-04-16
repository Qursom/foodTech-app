## Lesson
1. Introduciton to the course

2. Install development tools

3. Create Angular App

   1. Create project's folder
   2. Install @angular/cli
   3. Create App as frontend
4. Add Header

    1. Generate Component
    2. Add Html
    3. Add CSS
5. List Foods
      1.  Create Food model
      2.  Create data.ts
      3. Add sample foods
      4. Add images to assets
      5.  Create Food service
      6.  Create Home component
       7. Add ts
       8. Add html
       10. Add css

6. Search Bar

    1. Add method to Food service
    2. Add search route
    3. Show search result in Home component
    4. Generate search component
    5. Add to home component
       1. Add ts
       2. Add html
       3. Add css
    
7. Tags Bar

    1. Create Tag model
    2. Add sample tags to data.ts
    3. Food service
        1. Add get all tags method
        2. Add get all foods by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate Tags component
        1. Add to home component
        2. Add ts
       3. Add html
       4. Add css


8. Food Page

   1. Add method to food service
   2. Generate Food Page component
   3. Add Route
       1. Add ts
       2. Add html
       3. Add css
8.  Cart Page

   1. Create CartItem Model
   2. Create Cart Model
   3. Generate Cart service
    4. Add to Cart Button in Food Page
   5. Generate Cart page component
     1.   Add Route
     2.   Add ts
      3.  Add html
      4.  Add css
9.Not Found!

   1. Generate Component
      1.  Add ts
      2. Add html
      3. Add css
    2. Add To Pages
       1. Home Page
       2. Food Page
       2. Cart Page

       
10. Connect To Backend

    1. Create backend folder
    2. npm init
    3. npm install typescript
    4. Create tsconfig.json
    5. Create .gitignore
    6. Copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
    9. Add Apis
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service
11. Login Page

    1. Generate Component

       1. Add to routes
       2.  Add ts
       3.  Add html
        4. Import Reactive Forms Module
        5. Add Css
        7. Add Login Api


   2. Add jsonwebtoken
    3. Generate User Service

        Generate User model
        Add User Subject
        Add Login Method
        Add User Urls
        Generate IUserLogin interface
        Add ngx-toastr
        Import Module
        Import BrowserAnimationsModule
        Add styles in angular.json
        Add to Header
        Add Local Storage methods
        Add Logout Method
        Add to Header
    Make Components For Login Page

        Input Container
        Input Validation
        Text Input
        Default Button
        Connect Login API To MongoDB Atlas

        Moving Apis into routers
        Create MongoDB Atlas
        Create .env file
        Install
        mongoose
        dotenv
        bcryptjs
        express-async-handler
        Connect to MongoDB Atlas
        Use MongoDB instead of data.ts in apis

 Register User

    Add Register api
    Add Register service method
    Add Register link
    Add Register Component
    Loading!

    Add Image
    Add Component
    Add Service
    Add Interceptor
Checkout Page

    Create Order Model
    Create Checkout Page Component
    Add To Router
    Add User to User Service
    Add Cart to Cart Service
    Create Order Items List Component
    Adding Map To The Checkout Page
    Add Leaflet npm package
    Add @types/leaflet
    Add Css to angular.json
    Add AddressLatLng to Order Model
    Create Map component
    Add to checkout page
    Add TS
    Change app-map selector to map
    Add Html
    Add CSS
    Add Auth Guard
Save Order
    Add Order Model
    Add Order Status Enum
    Add Auth Middleware
    Add Order Router
    Add create API
    Add Order Urls to urls.ts
    Add Order Service
    Add create Method
    Add Auth Interceptor

Payment Page

    Generate Component
    Add 'getOrderForCurrentUser' api
    Add Order Service method
    Connect Component to Service
    Make the map component readonly
Adding Paypal

    Generate Component
    Add to payment page
    Get Paypal client Id
    Add Paypal JS to index.html
    Set up Paypal button
    Add Pay api to order router
    Get Paypal sandbox account
Order Track Page
   Generate Component


1. Get All orders Api from backend
2. Generate component for all orders
3.  Generate a service for all orders
4. genrate a new route for all orders Api

1.  Generate component for User profile
2.  Generate a service for User Profile
3.  genrate a new route for User Profile
 
