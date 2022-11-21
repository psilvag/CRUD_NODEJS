
FILES MVC
    1. users.controllers.js
    2. users.services.js
    3. users.router.js
    
ROUTES
    1. /users 
        1. GET → When making this request, all users are returned
        2. POST → By making this request, a new user will be created.
        3. DELETE→ When making this request, the user with the sent id is deleted
        4. PATCH→ When making this request, the user's information is updated with the id sent
    2. /users/:id
        1. GET → When making this request, the user is returned with the specific ID that is received from parameters
      